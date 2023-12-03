import "./HomeFeature.css";

const HomeFeature = () => {
  return (
    <div className="homefeature_container">
      <img src={require("../../../assets/feature_text.png")} alt="" />
      <div className="homefeature_first_section section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 901 902"
          fill="none"
        >
          <path
            d="M899.503 544.233C887.972 599.914 804.502 626.179 773.532 670.576C742.201 716.713 747.885 803.179 701.677 833.532C655.468 863.885 578.371 824.328 523.586 834.758C470.541 845.549 413.285 911.722 357.604 900.19C301.923 888.659 275.657 805.189 231.26 774.219C185.124 742.888 98.6574 748.572 68.3044 702.363C37.9515 656.155 77.5085 579.058 67.0783 524.273C56.2878 471.228 -9.88511 413.972 1.6462 358.291C13.1775 302.609 96.6474 276.344 127.618 231.947C158.948 185.81 153.265 99.3443 199.473 68.9913C245.682 38.6383 322.779 78.1954 377.564 67.7652C430.609 56.9747 487.865 -9.19823 543.546 2.33308C599.227 13.8644 625.493 97.3343 669.889 128.305C716.026 159.635 802.492 153.951 832.845 200.16C863.198 246.368 823.641 323.465 834.071 378.251C844.862 431.296 911.035 488.552 899.503 544.233Z"
            fill="url(#paint0_linear_141_36)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_141_36"
              x1="94.6174"
              y1="-90.6381"
              x2="992.474"
              y2="95.3042"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#74EBD5" />
              <stop offset="1" stop-color="#9FACE6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="first_section_block">
          <div className="section_container orange">
            <p>
              Transform your text effortlessly with our Paraphraser feature.
              Redefine clarity, eliminate redundancy, and express your ideas
              with a fresh perspective. Your writing, reimagined.
            </p>
          </div>
        </div>
        <img src={require("../../../assets/placeholder1.png")} alt="" />
      </div>
      <div className="homefeature_second_section section">
        <div className="first_section_block">
          <div className="section_container green">
            <p>
              Transform your text effortlessly with our Paraphraser feature.
              Redefine clarity, eliminate redundancy, and express your ideas
              with a fresh perspective. Your writing, reimagined.
            </p>
          </div>
          
        </div>
        <img src={require("../../../assets/placeholder1.png")} alt="" />
      </div>
    </div>
  );
};

export default HomeFeature;
