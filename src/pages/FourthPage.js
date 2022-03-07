import React from "react";
import {
  newChat,
  moreAlt,
  notification,
  close,
  radio,
  radioActive,
  search,
  mic,
  checkBoxOn,
  checkBoxOff,
} from "../assets/icons/index";
import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";
import Modal from "react-modal";

const customStyles = {
  // content: {
  //   top: "50%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  //   borderRadius: 12,
  //   padding: "0 20px",
  // },
};

export default function FourthPage() {
  const [modal, setModal] = React.useState(false);
  const groupTypes = [
    {
      name: "Public",
      description:
        "Public group will be visible to all users and any user can join it",
    },
    {
      name: "Password Protected",
      description:
        "Public group will be visible to all users and any user can join it",
    },
    {
      name: "Private",
      description:
        "Public group will be visible to all users and any user can join it",
    },
  ];

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

  const showGroupTypes = () => {
    return groupTypes.map((group, index) => {
      return (
        <div key={index}>
          <div className="flex jc-sb a-i-c">
            <div
              style={{ width: 212, height: 22 }}
              className="fs-15 fw-500 flex a-i-c"
            >
              {group.name}
            </div>
            <img
              alt={""}
              src={!index ? radioActive : radio}
              className="input-radio"
            />
          </div>
          <div className="fw-400 fs-13 color-light">{group.description}</div>
          <hr className="hr-light" />
        </div>
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
              <div className="fs-22 fw-700 hide-header">Add Members</div>
              <div className="fs-15 fw-600 hide-header" style={{ color: "#3399FF" }}>Send</div>
              <div className="fs-15 fw-600 unhide-header" style={{ color: "#3399FF" }}>save</div>
            </div>
            <div className="fs-22 fw-700 h-s-head" style={{margin:"0px auto 13px 0px"}}>Add Members</div>
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
          <div className="header header-left header-left-2">
            {/* <UserDetail status={"Away"} name="Guest - 1234" from={"header"} />
            <div className="flex jc-sb" style={{ width: 100 }}>
              <img alt={"chat-icon"} src={newChat} className="csr-p" />
              <img
                alt={"notifiation-icon"}
                src={notification}
                className="csr-p"
              />
              <img alt={"more-icon"} src={moreAlt} className="csr-p" />
            </div> */}
          <div className="hide-header"><UserDetail status={"Away"} name="Guest - 1234" from={"header"} /></div>
          <div className="hide-header"><img alt={"chat-icon"} src={newChat} className="csr-p" /></div>
          <div className="hide-header"><img alt={"notifiation-icon"} src={notification} className="csr-p" /></div>
          <div className="hide-header"><img alt={"more-icon"} src={moreAlt} className="csr-p" /></div>
          <div className="unhide-header ml-98"><span className="spn-back">&#x3c; Back</span></div>
          <div className="unhide-header"><span className="spn-more">New Group</span></div>
          <div className="unhide-header"><span></span></div>
          </div>
          <div className="left-sidebar-bottom">
            <div
              className="flex jc-sb a-i-c g-align h-later"
              style={{ width: 248, height: 64 }}
            >
              <div className="fs-22 fw-700 hide-header">New Group</div>
              <img
                alt={""}
                src={close}
                width={24}
                height={24}
                className="csr-p hide-header ml-60"
              />
            </div>
            <div>
              <div className="label mb-10 mt-20 mt-20px">GROUP NAME</div>
              <input
                type="text"
                placeholder="Test Group 1"
                className="input-text input-text-3"
              />
              <hr className="hr-light" />
            </div>
            <div style={{ width: "90%" }} className="flex-d jc-c">
              <div className="label mt-25">GROUP TYPE</div>
              {showGroupTypes()}
            </div>
            <div className="mt-20" onClick={() => setModal(true)}>
              <SidebarButton text={"Create Group"} />
            </div>
          </div>
        </div>
        <ChatBox />
      </div>
    </>
  );
}
