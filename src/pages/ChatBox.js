import React, { useState } from "react";
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
  close,
  translate,
  keyboard,
} from "../assets/icons/index";
import UserDetail from "../components/UserDetail";
import {
  handwriteMessage,
  whiteBoard,
  writeLanguage,
} from "../assets/icons/index";
import { MessageOption } from "../components/Common";

export default function ChatBox({ chat, ningthpage }) {
  const[editToggle, setEditToggle] = useState(true);    
    
  const showChat = () => {

    return chat?.map((message, index) => {
      return (
        <div
          style={{
            width: "100%",
            position:'relative'
          }}
          onClick={() => setEditToggle(!editToggle)}
          className={message?.sentStatus ? "flex-d ai-fe" : "flex-d"}
        > 
        {/* {editToggle ? 
          (<>
            <div className="display-option">
            <div className="options"><span>Reply</span><span><img src={close} alt="close" /></span></div>
            <div className="options"><span>Forward</span><span><img src={close} alt="close" /></span></div>
            <div className="options"><span style={{color:'red'}}>Delete</span><span><img src={close} alt="close" /></span></div>
           </div>
           <div className="display-option-2">
              <span>😄</span><span>👍</span><span>😆</span><span>🤣</span><span>😅</span><span>👎</span>
           </div>
           </>
           )
            : ""
           } */}
          <div
            className={message?.sentStatus ? "mr-10" : ""}
            style={{
              width: 332,
              background: message?.sentStatus ? "#3399ff" : "#f8f8f8",
              borderRadius: 8,
              padding: 10,
            }}
            key={index}
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
    <div className="chat-right">
      <div className="header w-100 bg-normal">
        <UserDetail name="User - 1234" from="chat" status="Online" />
        <div className="flex jc-sb" style={{ width: 100 }}>
          <img alt={""} src={call} />
          <img alt={""} src={video} />
          <img alt={""} src={sidebar} />
        </div>
      </div>
      <div className="flex-d jc-sb w-100">
        <div className="pos-rel" style={{ width: "100%" }}>{showChat()}
        {editToggle ? 
          (<>
            <div className="display-option">
            <div className="options"><span>Reply</span><span><img src={close} alt="close" /></span></div>
            <div className="options"><span>Forward</span><span><img src={close} alt="close" /></span></div>
            <div className="options"><span style={{color:'red'}}>Delete</span><span><img src={close} alt="close" /></span></div>
           </div>
           <div className="display-option-2">
              <span>😄</span><span>👍</span><span>😆</span><span>🤣</span><span>😅</span><span>👎</span>
           </div>
           </>
           )
            : ""
           }
        </div>
        {ningthpage ? null : (
          <div className="flex-d jc-fe a-i-c w-100">
            <div
              style={{
                borderRadius: "12px",
                background: "rgba(248, 248, 248, 0.92)",
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                height: 203,
              }}
            >
              <MessageOption
                image={radar}
                color={"#f5d8d8"}
                text={"Audio/Video Broadcast"}
              />
              <MessageOption
                image={edit2}
                color={"#d8eaf5"}
                text={"Handwrite Message"}
              />
              <MessageOption
                image={monitor}
                color={"#d8f5e0"}
                text={"Share Screen"}
              />
              <MessageOption
                image={documentLike}
                color={"#e7d8f5"}
                text={"Sticker"}
              />
              <MessageOption
                image={translate}
                color={"#f1e5c2"}
                text={"Write in your language"}
              />
              <MessageOption
                image={mic2}
                color={"#f5d8ee"}
                text={"Voice note"}
              />
              <MessageOption
                image={keyboard}
                color={"#f1f2ba"}
                text={"Whiteboard"}
              />
              <MessageOption
                image={documentCopy}
                color={"#c0e7e7"}
                text={"Collaborative Document"}
              />
              <MessageOption
                image={location}
                color={"#f4ceda"}
                text={"Share Loaction"}
              />
            </div>

            <div style={{ height: 64 }} className="flex jc-sb a-i-c w-100">
              <img alt="add" src={add} />
              <div className="input-msg">
                <input type="text" placeholder="Message" />{" "}
                <img alt={""} src={smile} />
              </div>
              <img alt="add" src={mic} />
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="chat-right-blank">Select a chat to start messaging</div>
  );
}
