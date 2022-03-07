import React, { useEffect, useState } from "react";
import {
  newChat,
  moreAlt,
  notification,
  messageRead,
  group,
  contacts,
  call2,
  mic,
  chat,
  search,
} from "../assets/icons/index";
import { Bullet } from "../components/Common";
// import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";
import { CometChat } from "@cometchat-pro/chat";

export default function SecondPage() {
  const [dropdown, setDropdown] = React.useState(false);

  const userChat = [
    {
      name: "Gladys Kanyinda",
      status: "seen",
      time: "8:46 PM",
      msg: "Just sent you the documents",
      image: "/images/Image.svg",
    },
    {
      name: "Ashish Asharaful",
      status: "",
      time: "8:01 PM",
      msg: "👍",
      image: "/images/Image-1.svg",
    },
    {
      name: "Yi Chun-Hwa",
      status: "",
      time: "3:20 PM",
      msg: "Ok",
      image: "/images/Image-2.svg",
    },
    {
      name: "Justine Robinson",
      status: "",
      time: "1:47 AM",
      msg: "Ah ok no worries",
      image: "/images/Image-3.svg",
    },
    {
      name: "Neeshaan El Pasha",
      status: "",
      time: "7:38 AM",
      msg: "Incoming Audio Call",
      image: "/images/Image-4.svg",
    },  
    
  ];

  const showUserChat = () => {
    return (
      userChat.map((chat, index) => {
        return (
          <div style={{ width: 248 }} className="flex jc-sb div-w-h">
            <img className="imgw-48" alt={`user-${index + 1}`} src={chat.image} />

            <div
              key={index}
              style={{
                width: 202,
                height: 62,
              }}
              className="flex-d j-c-c hr-light sd-w-h"
            >
              <div
                style={{
                  width: 202,
                  height: 35,
                }}
                className="flex-d jc-sp"
              >
                <div className=" flex jc-sb">
                  <div className="fs-15 fs-17 fw-600">{chat.name}</div>
                  <div className="flex a-i-c fs-11 fs-15 fsm-12 fw-500 op-5 m-l">
                    {chat.status === "seen" ? (
                      <img alt={""} src={messageRead} />
                    ) : null}
                    {chat.time}
                  </div>
                </div>

                <div className="flex jc-sb fs-13 fsm-13 color-light m-r">
                  <div>{chat.msg}</div>
                  {index === 2 ? (
                    <Bullet size={12} color={"#3399FF"} number={"8"} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <>
      {dropdown ? (
        <div
          style={{
            height: 80,
            width: 139,
            position: "absolute",
            boxShadow: "0 4px 8px 0 #e5e5e5",
            left: 176,
            top: 50,
            background: "#fff",
            zIndex: 1,
            borderRadius: 10,
          }}
          className="flex-d j-c-c top-60"
        >
          <div className="dropdown-item">New Broadcast</div>
          <div className="dropdown-item">New Groups</div>
        </div>
      ) : null}
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
              <img
                alt={"more-icon"}
                src={moreAlt}
                className="csr-p"
                onClick={() => setDropdown(!dropdown)}
              />
            </div>
          </div>
          <div className="left-sidebar-bottom">
            <div
              className="flex jc-sb a-i-c w-375"
              style={{ width: 248, height: 64 }}
            >
              <div className="fs-22 fw-700 fs-32 ">Chats</div>
            </div>

            <div
              style={{
                height: 12,
                borderRadius: 8,
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

            {showUserChat()}
          </div>
          <div
            className="flex a-i-c jc-sb sm-nav"
            style={{ height: 64, margin: "0px 15px 0px 15px" }}
          >
            <div className="f-hide">
              <img alt="contacts" src={contacts} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>contacts</p>
            </div>
            <div className="f-hide">
              <img alt="call" src={call2} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Calls</p>
            </div>
            <div className="f-hide">
              <img alt="chat" src={chat} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Chats</p>
            </div>
            <div className="f-hide">
              <img alt="group" src={group} height={28} width={37} />
              <p className="fs-11" style={{ marginTop: '-2px' }}>Groups</p>
            </div>
            <div className="f-unhide" ><img alt="contacts" src={contacts} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="call" src={call2} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="chat" src={chat} height={24} width={24} /></div>
            <div className="f-unhide" ><img alt="group" src={group} height={24} width={24} /></div>

          </div>
        </div>
        <ChatBox />
      </div>
    </>
  );
}
