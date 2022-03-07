import React from "react";
import {
  call,
  video,
  sidebar,
  messageRead,
  add,
  mic,
  smile,
  documentCopy,
  location,
  mic2,
  documentLike,
  monitor,
  radar,
  edit2,
  translate,
  keyboard,
  cross,
  close,

} from "../assets/icons/index";
import map from "../assets/images/map.JPG";
import UserDetail1 from "../components/UserDetail1";
import {
  handwriteMessage,
  whiteBoard,
  writeLanguage,
} from "../assets/icons/index";
import { MessageOption } from "../components/Common";
import { BsFillShieldSlashFill } from "react-icons/bs";
import { userImage } from "../assets/images";

export default function ChatBox({ chat, ningthpage }) {
  const showChat = () => {
    return chat?.map((message, index) => {
      return (
        <div
          style={{

          }}
          className={message?.sentStatus ? "flex-d ai-fe" : "flex-d"} id="chatbox_width"
        >
          <div
            className={message?.sentStatus ? "mr-10" : ""}
            style={{

              background: message?.sentStatus ? "#3399ff" : "#f8f8f8",
              borderRadius: 8,
              padding: 10,
            }}
            key={index} id="chatbox_msg"
          >
            {message?.replied_on && (
              <div className="fw-400 fs-13 mb-10 flex">
                <div
                  style={{
                    width: 3,
                    height: 14,
                    background: "rgba(20, 20, 20, 0.113172)",
                    marginRight: 10,
                  }}
                />{" "}
                {message?.replied_on}
              </div>
            )}
            <div
              className="fs-15 fw-400"
              style={{ color: message?.sentStatus ? "#fff" : "#141414" }}
            >
              {message.message}
            </div>
          </div>
          <div
            style={{ height: 26, width: 342 }}
            className={
              message.sentStatus
                ? "fw-500 fs-11 op-5 flex a-i-c jc-fe"
                : "fw-500 fs-11 op-5 flex a-i-c"
            }
          >
            {message.time}
            {message.sentStatus ? <img alt={""} src={messageRead} /> : null}
          </div>
        </div>
      );
    });
  };

  return chat ? (
    <div className="chat-right" id="shift">
      <div className="header w-100 bg-normal" >
        <UserDetail1 name="User - 1234" from="chat" status="Online" />

        <div className="flex jc-sb" style={{ width: 100 }} id="chatbox_icons">
          <img alt={""} src={call} />
          <img alt={""} src={video} />
          <img alt={""} src={sidebar} id="sidebar_icon" />
          <img alt={""} src={close} id="close_icon" />
        </div>

        <div id="abc">
          <h4 style={{ color: "rgb(51, 153, 255)", marginTop: 10, width: 200 }}> &#8592; Chats</h4>
          <span style={{ color: "black", marginTop: -70, marginLeft: 140, fontSize: 16, width: 84 }}>User-1234</span>
          <span style={{ color: "rgb(51, 153, 255)", marginTop: -20, marginLeft: 158, fontSize: 14, width: 30 }}>Online</span>
          <span><img style={{ width: 40, height: 35, marginTop: -116, marginLeft: 295 }} src={userImage} /></span>
        </div>
      </div>


      <div className="flex-d jc-sb w-100" style={{ marginTop: 26 }}>
        <div style={{ width: "100%" }}>{showChat()}</div>
        {/* <div>
        <img src={map} alt="" style={{borderRadius: "12px"}}/>
            </div> */}
        {ningthpage ? (
          <div className="flex-d jc-fe a-i-c w-100">
            <div
              style={{
                borderRadius: "12px",
                background: "rgba(248, 248, 248, 0.92)",

                alignItems: "center"

              }} id="chatbox_message_option"
            >
              {/* <img alt="add" src={MdOutlineSecurity} /> */}
              <div className="threeSeven"><BsFillShieldSlashFill style={{ fontSize: 40 }} />
                <h4>Sorry, you don't have access to this feature</h4>
              </div>

            </div>


            <div style={{ height: 64 }} className="flex jc-sb a-i-c" id="chatbox_footer">
              <img alt="add" src={add} id="add" />&nbsp;&nbsp;
              <div className="input-msg">
                <input type="text" placeholder="Message" />{" "}
                <img alt={""} src={smile} />
              </div>&nbsp;
              <img alt="add" src={mic} id="add" />
            </div>
          </div>
        ) : <div style={{ height: 64, marginTop: 184 }} className="flex jc-sb a-i-c" id="chatbox_footer">
          <img alt="add" src={add} id="add" />
          <div className="input-msg">
            <input type="text" placeholder="Message" />{" "}
            <img alt={""} src={smile} />
          </div>
          <img alt="add" src={mic} id="add" />
        </div>}
      </div>
    </div>
  ) : (
    <div className="chat-right-blank">Select a chat to start messaging</div>
  );
}
