import React from "react";
import {
  newChat,
  moreAlt,
  notification,
  group,
  call2,
  mic,
  contactsblue,
  chatgray,
  search,
} from "../assets/icons/index";

// import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";

export default function ThirdPage() {
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
  ];

  const showContactList = () => {
    return contactList.map((contactlist, index) => {
      return (
        <>
          {index === 0 || index === 2 || index === 6 ? (
            <div
              style={{ height: 20, width: 248 }}
              className="fs-12 fsm-13 fw-400 flex a-i-c div-w"
            >
              {index === 0 && "A"}
              {index === 2 && "C"}
              {index === 6 && "D"}
            </div>
          ) : null}
          <div style={{ width: 248, height: 50 }} className="flex a-i-c div-w-h">
            <UserDetail
              status={contactlist.status}
              name={contactlist.name}
              from={"list"}
              img={contactlist.avatar}
            />
          </div>
        </>
      );
    });
  };

  return (
    <div className="flex">
      <div className="left-sidebar">
        <div className="header">
          <UserDetail status={"Away"} name="Guest - 1234" from={"header"} />
          <div className="flex jc-sb" style={{ width: 100 }}>
            <img alt={"chat-icon"} src={newChat} className="csr-p" />
            <img
              alt={"notifiation-icon"}
              src={notification}
              className="csr-p"
            />
            <img alt={"more-icon"} src={moreAlt} className="csr-p" />
          </div>
        </div>
        <div className="left-sidebar-bottom">
          <div className="flex jc-sb a-i-c w-375" style={{ width: 248, height: 44 }}>
            <div className="fs-22 fw-700 fs-32">Contacts</div>
          </div>
          <div
            style={{
              height: 12,
              borderRadius: 8,
              padding: 10,
            }}
            className="input-text mb-10 flex a-i-c"
          >
            <img className="imgw-18" alt={""} src={search} />
            <input
              className="h-w"
              type="text"
              placeholder="Search"
              style={{
                height: 16,
                border: 0,
                background: "transparent",
                outline: "none",
                marginLeft: 5,
              }}
            />
            <div className="mic"><img alt={""} src={mic} /></div>
          </div>

          <div className="flex-d a-i-c">{showContactList()}</div>
        </div>
        <div
          className="flex a-i-c jc-sb "
          style={{ height: 64, margin: "0px 25px 0px 15px" }}
        >
         <div className="f-hide">
              <img alt="contacts" src={contactsblue} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>contacts</p>
            </div>
            <div className="f-hide">
              <img alt="call" src={call2} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Calls</p>
            </div>
            <div className="f-hide">
              <img alt="chat" src={chatgray} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Chats</p>
            </div>
            <div className="f-hide">
              <img alt="group" src={group} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Groups</p>
            </div>
            <div className="f-unhide" ><img alt="contacts" src={contactsblue} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="call" src={call2} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="chat" src={chatgray} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="group" src={group} height={24} width={24} /></div>
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
