import React from "react";
import {
  newChat,
  moreAlt,
  notification,
  messageRead,
  group,
  contacts,
  call,
  chat,
  search,
} from "../assets/icons/index";
import { Bullet } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";
import "../App.css";

export default function EighthPage() {
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

  const currentChat = [
    {
      sentStatus: "",
      time: "7:56 PM",
      message:
        "That's sounds awesome! Want to check out that new cafe down the street from the park?",
      replied_on: "How about 1pm?",
    },
    {
      sentStatus: "read",
      time: "7:57 PM",
      message:
        "Perfect! I've been waiting to go. I hear the pizza is delicious 😋",
      replied_on: "",
    },
    {
      sentStatus: "",
      time: "7:58 PM",
      message: "Excelent! See you Saturday at 1pm in front of the cafe.",
      replied_on: "",
    },
  ];

  const showUserChat = () => {
    return userChat.map((chat, index) => {
      return (
        <div style={{ width: 248 }} className="flex jc-sb">
          <img alt={`user-${index + 1}`} src={chat.image} />

          <div
            key={index}
            style={{
              width: 202,
              height: 62,
            }}
            className="flex-d j-c-c hr-light"
          >
            <div
              style={{
                width: 202,
                height: 35,
              }}
              className="flex-d jc-sp"
            >
              <div className=" flex jc-sb">
                <div className="fs-15 fw-600">{chat.name}</div>
                <div className="flex a-i-c fs-11 fw-500 op-5">
                  {chat.status === "seen" ? (
                    <img alt={""} src={messageRead} />
                  ) : null}
                  {chat.time}
                </div>
              </div>

              <div className="flex jc-sb fs-13 color-light">
                <div>{chat.msg}</div>
                {index === 2 ? (
                  <Bullet size={12} color={"#3399FF"} number={"8"} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
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
            <div className="fs-22 fw-700">Chats</div>
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

          {showUserChat()}
        </div>
        <div
          className="flex a-i-c jc-sb "
          style={{ height: 64, margin: "0px 15px 0px 15px" }}
        >
          <img alt="contacts" src={contacts} height={24} width={24} />
          <img alt="call" src={call} height={24} width={24} />
          <img alt="chat" src={chat} height={24} width={24} />
          <img alt="group" src={group} height={24} width={24} />
        </div>
      </div>
      <ChatBox chat={currentChat} />
    </div>
  );
}
