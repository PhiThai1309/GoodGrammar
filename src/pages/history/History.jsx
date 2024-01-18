import React, { useState, useEffect } from "react";
import {
  Document,
  DownloadBtn,
  Loading,
  Popup,
  showSub,
} from "../../components";
import { useAuth } from "@clerk/clerk-react";
import "./History.css";
import axios from "axios";
import { API } from "../../api";
import { NavLink, useNavigate } from "react-router-dom";

const History = (props) => {
  const { getToken } = useAuth();
  const [selected, setSelected] = useState(null); // currently selected file in history
  const [selectedId, setSelectedId] = useState(-1);
  // const [historyId, setHistoryId] = useState(null);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null); // download file
  const [loading, setLoading] = useState(true);
  const [fullScreenLoading, setFullScreenLoading] = useState(false);

  const fetchData = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(API.history(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reverseList = response.data.reverse();
      const groupedData = groupByDate(reverseList);
      // console.log(groupedData);
      // console.log(response.data);
      setHistory(groupedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use for updating document ig
  useEffect(() => {
    fetchData();
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  const DocumentList = ({ list }) => {
    return (
      <div className="history_document">
        {/* map array in array and put it in a tag <Document /> */}
        {Object.keys(list).map((row) =>
          list[row].length > 0 ? (
            <div key={row} className="inner-group">
              <h3>{capitalizeFirstLetter(row)}</h3>
              {list[row].map((item, index) => (
                <Document
                  key={index}
                  id={item.file_id}
                  item={item}
                  documentClick={() => {
                    documentClick(item);
                  }}
                  // deleteClick={() => {
                  //   deleteClick(item);
                  // }}
                  selectedId={selectedId}
                  openPopup={() => handlePopup(item)}
                />
              ))}
            </div>
          ) : null
        )}
      </div>
    );
  };
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handlePopup(item) {
    setShowPopup(!showPopup);
    setSelectedItem(item);
  }

  function handlePopupYes() {
    deleteClick(selectedItem);
  }

  const documentClick = async (item) => {
    setText("");
    setFile(null);
    setFullScreenLoading(true);
    setSelected(item);
    setSelectedId(item.file_id);
    // console.log(item.file_id);

    const response = await axios
      .get(API.getFileInfo(item.file_id))
      .catch((err) => {
        console.error(err);
      });
    setText(response.data.content);
    setFullScreenLoading(false);
    const file = await axios
      .get(API.getFile(item.file_id), { responseType: "blob" })
      .catch((err) => {
        console.error(err);
      });
    setFile(file.data);
  };

  const deleteClick = async (item) => {
    if (selected !== null && selected.file_id === item.file_id) {
      setSelected(null);
      setSelectedId(-1);
      setFile(null);
    }

    const token = await getToken();
    await axios
      .delete(API.deleteFromHistory(item.file_id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // Iterate over the properties of history object
        const updatedHistory = {};
        for (const key in history) {
          if (Object.hasOwnProperty.call(history, key)) {
            updatedHistory[key] = history[key].filter(
              (file) => file.file_id !== item.file_id
            );
          }
        }
        setHistory(updatedHistory);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downloadClick = () => {
    // Create download link for the file
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = selected.file_name;
    link.click();
  };

  const [width, setWidth] = useState(300);
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = (event) => {
    setMouseDown(true);
    event.preventDefault();
  };

  const handleMouseUp = (_event) => {
    setMouseDown(false);
  };

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const handleMouseMove = (event) => {
    if (mouseDown) {
      // check if the remaining width is < 250px comapred to window size
      if (getWindowDimensions().width - event.clientX >= 300) {
        setWidth(event.clientX - 108);
      }
    }
  };

  const isDatesEqual = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() === date2.getTime();
  };

  const groupByDate = (array) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const thisWeek = new Date();
    const lastSunday = thisWeek.getDate() - thisWeek.getDay();
    thisWeek.setDate(lastSunday + 1);

    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return array.reduce(
      (grouped, cur) => {
        const { create_at } = cur;
        const date = new Date(create_at);

        if (isDatesEqual(today, date)) {
          grouped["today"].push(cur);
        } else if (isDatesEqual(yesterday, date)) {
          grouped["yesterday"].push(cur);
        } else if (date >= thisWeek && date <= today) {
          grouped["thisWeek"].push(cur);
        } else if (date >= thisMonth && date <= today) {
          grouped["thisMonth"].push(cur);
        } else {
          grouped["Older"].push(cur);
        }
        return grouped;
      },
      {
        today: [],
        yesterday: [],
        thisWeek: [],
        thisMonth: [],
        other: [],
      }
    );
  };

  if (loading) return <Loading />;

  return (
    <div
      className="history_container"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="history">
        <div className="simple_flex history_left">
          <div className="header green">
            <h3>History</h3>
          </div>
          <div className="history_content">
            <div className="history-bar" style={{ width: width }}>
              <div className="history_document_container">
                <DocumentList list={history} selected={selected} />
              </div>
              <div className="tips_card">
                <div className="tips_card_container">
                  <h3>Quick tips</h3>
                  <p>
                    Harness the precision of our Grammar AI to effortlessly
                    perfect your writing
                  </p>

                  {props.sub?.name === "Free" ? (
                    showSub(props.sub)
                  ) : (
                    <NavLink to="/subscribe">
                      <button className="circle_btn_small">Learn more</button>
                    </NavLink>
                  )}
                </div>
                <img src={require("../../assets/clock.png")} alt="" />
              </div>
            </div>
            <div
              className="resize"
              style={{ width: "10px" }}
              onMouseDown={handleMouseDown}
            >
              <span className="material-symbols-rounded">drag_indicator</span>
            </div>
          </div>
        </div>

        <div className="history-text">
          {fullScreenLoading ? <Loading /> : null}
          <textarea
            placeholder="Corrected text will be shown here"
            disabled
            value={text}
          ></textarea>
          <DownloadBtn
            className="green"
            isVisible={file !== null}
            onClick={downloadClick}
          />
        </div>
      </div>
      {showPopup && (
        <Popup
          title="Do you want to delete this file from History?"
          closePopup={handlePopup}
          onYes={handlePopupYes}
        />
      )}
    </div>
  );
};

export default History;
