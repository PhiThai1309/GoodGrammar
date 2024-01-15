import React, { useState, useEffect } from "react";
import { Document, DownloadBtn, Loading, showSub } from "../../components";
import { useAuth } from "@clerk/clerk-react";
import "./History.css";
import axios from "axios";
import { API } from "../../api";

const History = (props) => {
  const { getToken } = useAuth();
  const [selected, setSelected] = useState(null); // currently selected file in history
  const [selectedId, setSelectedId] = useState(-1);
  const [historyId, setHistoryId] = useState(null);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null); // download file
  const [loading, setLoading] = useState(true);

  // Use for updating document ig
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await getToken();
        const response = await axios.get(API.history(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHistoryId(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    getHistory();
  }, [historyId]);

  const getHistory = async () => {
    setLoading(true);
    let list = [];

    for (let id in historyId) {
      const file = await axios
        .get(API.getFileInfo(historyId[id]))
        .catch((err) => {
          console.error(err);
        });
      const data = file.data;
      data.id = historyId[id];
      // const date = new Date(data.create_at);
      // const dateString = date.toISOString().slice(0, 10);
      // data.create_at = dateString;
      list.push(data);
    }

    list = list.reverse();
    setHistory(list);
    setLoading(false);

    // const groupedItems = list.reduce((groups, file) => {
    //   const date = file.create_at;

    //   if (!groups[date]) {
    //     groups[date] = [];
    //   }

    //   groups[date].push(file);
    //   return groups;
    // }, {});
    // console.log(groupedItems);
  };

  const DocumentList = ({ list }) => {
    return (
      <div className="history_document">
        {list.map((item, index) => (
          <Document
            key={index}
            id={index}
            item={item}
            onClick={() => {
              documentClick(item, index);
            }}
            selected={selectedId}
          />
        ))}
      </div>
    );
  };

  const documentClick = async (item, index) => {
    setSelected(item);
    setSelectedId(index);
    setText(item.content);

    await axios
      .get(API.getFile(item.id), { responseType: "blob" })
      .then((res) => {
        setFile(res.data);
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

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="history_container">
        <div className="header">
          <h3>History</h3>
          {showSub(props.sub)}
        </div>
        <div className="history">
          <div className="history-bar">
            <div className="history_document_container">
              <h4>Today</h4>
              <div className="history_document">
                <DocumentList list={history} selected={selected} />
              </div>
            </div>
            <a href="grammar">
              <div className="tips_card">
                <h3>Quick tips</h3>
                <p className="paragraph">
                  Harness the precision of our Grammar AI to effortlessly
                  perfect your writing
                </p>
                <button className="circle_btn_small"> Learn more </button>
                <svg
                  id="sw-js-blob-svg"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="sw-gradient"
                      x1="0"
                      x2="1"
                      y1="1"
                      y2="0"
                    >
                      {" "}
                      <stop
                        id="stop1"
                        stopColor="rgba(27, 71, 21, 0.4)"
                        offset="0%"
                      ></stop>{" "}
                      <stop
                        id="stop2"
                        stopColor="rgba(165.212, 239.721, 155.052, 0.64)"
                        offset="80%"
                      ></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                  <path
                    fill="url(#sw-gradient)"
                    d="M28.7,-31.1C36.5,-27.6,41.8,-18,41.8,-8.7C41.9,0.5,36.6,9.3,30.8,16.3C25,23.3,18.6,28.5,11.6,30.4C4.6,32.4,-3.1,31,-10.7,28.6C-18.3,26.2,-25.9,22.7,-31.9,16.4C-37.9,10.1,-42.3,1,-41.2,-7.6C-40.1,-16.2,-33.5,-24.2,-25.8,-27.7C-18,-31.2,-9,-30.3,0.7,-31.1C10.4,-32,20.8,-34.6,28.7,-31.1Z"
                    width="100%"
                    height="100%"
                    transform="translate(80 60)"
                    strokeWidth="0"
                    stroke="url(#sw-gradient)"
                  ></path>{" "}
                </svg>
              </div>
            </a>
          </div>
          <div className="history-text">
            <textarea
              placeholder="Corrected text will be shown here"
              disabled
              value={text}
            ></textarea>
            <DownloadBtn
              class="green"
              isVisible={file !== null}
              onClick={downloadClick}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default History;
