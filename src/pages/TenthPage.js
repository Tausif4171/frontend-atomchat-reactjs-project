import React from "react";
import { newChat, moreAlt, notification, close, mic, search,checkBoxOn,
  checkBoxOff, } from "../assets/icons/index";
import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import Modal from "react-modal";

import ChatBox from "./ChatBox";

export default function TenthPage() {
  const [modal, setModal] = React.useState(false);
  const contactList = [
    {
      name: "Darren Adams",
      image: "/images/darrenadams.svg",
      status: "Available",
    },
    {
      name: "Evelyn Allen",
      image: "/images/evelynAllen.svg",
      status: "Available",
    },
    {
      name: "Kun Chang-Min",
      image: "/images/Kun Chang-Min.svg",
      status: "Busy",
    },
    {
      name: "Heather Clark",
      image: "/images/heatherClark.svg",
      status: "Away",
    },
    {
      name: " Bárbara Cotilla",
      image: "/images/bárbaraCotilla.svg",
      status: "Available",
    },

    {
      name: "Gypsy Cardinge",
      image: "/images/gypsyCardinge.svg",
      status: "Available",
    },
    {
      name: "Gauthier Drewitt",
      image: "/images/gauthierDrewitt.svg",
      status: "Away",
    },
    {
      name: "Gauthier Drewitt",
      image: "/images/gauthierDrewitt.svg",
      status: "Away",
    },
  ];

  const showContactList = () => {
    return contactList.map((contact, index) => {
      return (
        <>
          {index === 0 || index === 2 || index === 6 ? (
            <div style={{ width: 360, height: 28 }} className="flex j-c-c w-256">
              <div
                style={{ height: 28, width: 328, marginBottom: 0 }}
                className="label flex a-i-c"
              >
                {" "}
                {index === 0 && "A"}
                {index === 2 && "C"}
                {index === 6 && "D"}
              </div>
            </div>
          ) : null}
          <div style={{ width: 360, height: 54 }} className="flex j-c-c w-256">
            <div
              style={{ width: 328, height: 54 }}
              className="flex jc-sb a-i-c w-220"
            >
              <div style={{ height: 54 }} className="flex a-i-c">
                <img className="mr-8" alt={""} src={contact.image} width={28} height={28} />
              </div>
              <div
                className="flex jc-sb a-i-c hr-light"
                style={{ width: 292, height: 54 }}
              >
                <div className="fs-15 fw-700">{contact.name}</div>
                <img
                  alt=""
                  src={index === 0 || index === 1 ? checkBoxOn : checkBoxOff}
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </>
      );
    });
  };
  return (

    <>
    <Modal
        isOpen={modal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setModal(false)}
        // style={customStyles}
       className="modal"
       overlayClassName='modal-overlay'
      >
        <div>
          <div style={{ height: 114, width: 360 }} className="flex-d a-i-c w-256">
            <div
              style={{ height: 64, width: 328 }}
              className="flex jc-sb a-i-c w-256"
            >
              <div className="fs-15 fw-600 m-hide hide-header" style={{ color: "#9C9C9C" }}  onClick={()=> setModal(false)}>Cancel</div>
              <div className="fs-15 fw-600 unhide-header" style={{ color: "#3399FF" }} onClick={()=> setModal(false)}>&#x3c; Back</div>
              <div className="fs-22 fw-700 hide-header">Select Members</div>
              <div className="fs-15 fw-600 hide-header" style={{ color: "#3399FF" }}>Send</div>
              <div className="fs-15 fw-600 unhide-header" style={{ color: "#3399FF" }}>save</div>
            </div>
            <div className="fs-22 fw-700 h-s-head" style={{display:'block', margin:"0px auto 13px 0px"}}>Select Members</div>
            <div style={{ width: 328, height: 50 }} className="flex w-256">
              <div
                style={{
                  height: 32,
                  borderRadius: 8,
                  width: 328,
                }}
                className="input-text flex a-i-c w-256"
              >
                <img className="imgw-18" alt={""} src={search} />
                <input
                className="w-218"
                  type="text"
                  placeholder="Search"
                  style={{
                    height: 32,
                    width: 328,
                    border: 0,
                    background: "transparent",
                    outline: "none",
                    marginLeft: 5,
                  }}
                />
                <img className="mic" alt={""} src={mic} style={{width:25, height:25, marginTop: 4}} />
              </div>
            </div>
          </div>
          <div className="scroll-list w-256">{showContactList()}</div>
        </div>
      </Modal>    
    <div className="flex">
      <div className="left-sidebar">
        <div className="header">
          <div className="hide-header"><UserDetail status={"Away"} name="User - 1234" from={"header"} /></div>
          <div className="hide-header"><img alt={"chat-icon"} src={newChat} className="csr-p" /></div>
          <div className="hide-header"><img alt={"notifiation-icon"} src={notification} className="csr-p" /></div>
          <div className="hide-header"><img alt={"more-icon"} src={moreAlt} className="csr-p" /></div>
          <div className="unhide-header"><span className="spn-back">&#x3c; Back</span></div>
          <div className="unhide-header"><span className="spn-more">Broadcast Message</span></div>
          <div className="unhide-header"><span></span></div>
        </div>
        <div className="left-sidebar-bottom">
          <div className="flex jc-sb a-i-c hide-header" style={{ width: 248 }}>
            <div className="fs-22 fw-700 mt-20 mb-20">Broadcast Message</div>
            <img
              alt={""}
              src={close}
              width={24}
              height={24}
              className="csr-p"
            />
          </div>
          <div>
            <div
              className="fs-12 fw-500 mb-10 mt-10 msg-txt"
              style={{ color: "lightgray" }}
            >
              TYPE YOUR MESSAGE
            </div>
            <textarea
              type="text"
              placeholder="Message"
              className="msg-box"
            />
          </div>
          <hr className="hr-light" />

          <div onClick={() => setModal(true)}>
            <SidebarButton text={"Select Member"} />
          </div>
        </div>
      </div>
      <ChatBox />
    </div>
    </>

  );
}
