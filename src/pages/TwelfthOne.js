import React from "react";
import {
  newChat,
  moreAlt,
  notification,
  messageRead,
  group,
  contacts,
  call2,
  chat,
  search,
  group2,
  chatgray,
  caretDown,
} from "../assets/icons/index";
import { Bullet } from "../components/Common";
// import { SidebarButton } from "../components/Common";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";

export default function TwelfthOne() {
  const [groupDropdown, setGroupDropdown] = React.useState(false);
  const userChat = [
    {
      name: "101 Study Group",
      status: "seen",
      time: "7:49 PM",
      msg: "I'm definetly in!",
      image: "/images/Container.svg",
    },
    {
      name: "Super Surfers",
      status: "",
      time: "Mon",
      msg: "In the meantime, can anyon…",
      image: "/images/Container-1.svg",
    },
    {
      name: "Rodolfo & Leon",
      status: "",
      time: "2:54 PM",
      msg: "See you soon",
      image: "/images/Container-2.svg",
    },
    {
      name: "October Party",
      status: "",
      time: "9:01 AM",
      msg: "Sounds good. I'll send it tomorrow",
      image: "/images/Container-3.svg",
    },
    {
      name: "Dev Camp",
      status: "",
      time: "Yesterday",
      msg: "John sent a sticker",
      image: "/images/Container-4.svg",
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
                {false ? (
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
            <div className="fs-22 fw-700">Groups</div>
          </div>
          <div className="flex jc-sb a-i-c" style={{ width: 248 }}>
            <div
              style={{
                height: 12,
                borderRadius: 8,
                width: 200,
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
            <div>
              <img
                src={caretDown}
                alt={""}
                onClick={() => setGroupDropdown(!groupDropdown)}
              />
            </div>
          </div>

          {showUserChat()}
        </div>
        <div
          className="flex a-i-c jc-sb "
          style={{ height: 64, margin: "0px 15px 0px 15px" }}
        >
          <img alt="contacts" src={contacts} height={24} width={24} />
          <img alt="call" src={call2} height={24} width={24} />
          <img alt="chat" src={chatgray} height={24} width={24} />
          <img alt="group" src={group2} height={24} width={24} />
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
