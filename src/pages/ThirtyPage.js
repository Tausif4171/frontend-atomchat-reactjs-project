import React from "react";
import {
  newChat,
  moreAlt,
  notification,
  group,
  contactsblue,
  call2,
  chatgray,
  search,
} from "../assets/icons/index";

// import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";

export default function ThirtyPage() {
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
              className="fs-12 fw-400 flex a-i-c"
            >
              {" "}
              {index === 0 && "A"}
              {index === 2 && "B"}
              {index === 6 && "C"}
            </div>
          ) : null}
          <div style={{ width: 248, height: 54 }} className="flex a-i-c">
            <UserDetail
              status={contactlist.status}
              name={contactlist.name}
              from={"list"}
              img={contactlist.image}
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
          <UserDetail status={"Away"} name="User - 1234" from={"header"} />
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
          <div className="flex jc-sb a-i-c" style={{ width: 248, height: 64 }}>
            <div className="fs-22 fw-700">Contacts</div>
          </div>
          <div
            style={{
              height: 12,
              borderRadius: 8,
            }}
            className="input-text mb-10 flex a-i-c"
          >
            <img alt={""} src={search} />
            <input
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
          </div>

          <div className="flex-d a-i-c">{showContactList()}</div>
        </div>
        <div
          className="flex a-i-c jc-sb "
          style={{ height: 64, margin: "0px 15px 0px 15px" }}
        >
          <img alt="contacts" src={contactsblue} height={24} width={24} />
          <img alt="call2" src={call2} height={24} width={24} />
          <img alt="chat" src={chatgray} height={24} width={24} />
          <img alt="group" src={group} height={24} width={24} />
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
