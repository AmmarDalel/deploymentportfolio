import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
  } from "react-share";
  import { IoCloseSharp } from 'react-icons/io5';
import './share.css'
  const ShareModal = ({ urlModel, modalContent }) => (
    <div id="icon-id" className="modal-body" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              <IoCloseSharp />
            </button>
          </div>
          <div className="modal-body">
            {modalContent && (
              <div className="share-icons">
                <h3 className="SHAREtitre">Share social media</h3>
                <div className="iconsshare">
                  <FacebookShareButton
                    url={urlModel}
                    hashtag={`${modalContent}#project`}
                  >
                    <FacebookIcon size={52} round />
                  </FacebookShareButton>
                  
                  <TwitterShareButton url={urlModel} title={modalContent}>
                    <TwitterIcon size={52} round />
                  </TwitterShareButton>
                  
                  <LinkedinShareButton url={urlModel}>
                    <LinkedinIcon size={52} round />
                  </LinkedinShareButton>
                  
                  <WhatsappShareButton url={urlModel} title={modalContent}>
                    <WhatsappIcon size={52} round />
                  </WhatsappShareButton>
                  
                  <EmailShareButton url={urlModel} subject={modalContent}>
                    <EmailIcon size={52} round />
                  </EmailShareButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  export default ShareModal;
  