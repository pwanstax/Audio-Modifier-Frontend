import Step1_1 from "./logo/1_1.jpg";
import Step1_2 from "./logo/1_2.jpg";
import Step1_3 from "./logo/1_3.jpg";
import Step1_4 from "./logo/1_4.jpg";
import Step2_1 from "./logo/2_1.jpg";
import Step2_2 from "./logo/2_2.jpg";
import Step2_3 from "./logo/2_3.jpg";
import Step2_4 from "./logo/2_4.jpg";
import Pic1 from "./logo/Step1Pic.png";
import Pic2 from "./logo/Step2Pic.png";
import NavBar from "./NavBar";
import "./PageTutorial.css";
import "./Style.css";

const PageTutorial = () => {
  return (
    <div>
      <NavBar currentPage="TUTORIAL" />
      <div className="Main-header Header-one">How to Use</div>
      <div className="Flex">
        <div className="bigBox">
          <div className="stepBox">
            <img className="stepLogo" src={Pic1} alt="" />
            <span className="Header-two">Step 1 : Upload audio file</span>
            <div className="stepFrame">
              <div className="Body stepBody">
                1.1 Click Browse button and choose audio files from your
                computer
              </div>
              <div className="Body-light stepBodyLight">
                *Support only 2 channel audio with .wav or .flac*
              </div>
              <img className="stepImage" src={Step1_1} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">1.2 Click Upload button</div>
              <img className="stepImage" src={Step1_2} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">
                1.3 Wait until uploading is done and ✓ appear
              </div>
              <div className="Body-light stepBodyLight">
                Only files with ✓ will be able to process in next step
              </div>
              <img className="stepImage" src={Step1_3} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">1.4 Click Next button</div>
              <img className="stepImage" src={Step1_4} alt="" />
            </div>
          </div>

          <div className="stepBox">
            <img className="stepLogo" src={Pic2} alt="" />
            <span className="Header-two">Step 2 : Process audio file</span>
            <div className="stepFrame">
              <div className="Body stepBody">
                2.1 Choose at least one feature from the following features to
                process
              </div>
              <div className="Body stepDetail1">• Speech to Text</div>
              <div className="Body-light stepDetail2">
                To convert audio file to text file (.json)
              </div>
              <div className="Body stepDetail1">
                • Voice Activity Detection (VAD)
              </div>
              <div className="Body-light stepDetail2">
                To detect start time and stop time of each conversation (.csv)
              </div>
              <img className="stepImage" src={Step2_1} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">2.2 Click Process button</div>
              <img className="stepImage" src={Step2_2} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">
                2.3 Wait until processing is done and Download buttons appear
              </div>
              <img className="stepImage" src={Step2_3} alt="" />
            </div>
            <div className="stepFrame">
              <div className="Body stepBody">
                2.4 Click Download button to download each result
              </div>
              <div className="Body stepBodyLight">
                or click Download All button to download all results (.zip)
              </div>
              <img className="stepImage" src={Step2_4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTutorial;
