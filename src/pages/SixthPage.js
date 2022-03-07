import React from "react";
import {
  closeWhite,
  radio,
  radioActive,
  checkBoxOn,
  checkBoxOff,
} from "../assets/icons/index";
import { userImage } from "../assets/images";
import { Bullet, statusColor } from "../components/Common";
import ChatBOx from "./ChatBox";

export default function SixthPage() {
  const onlineStatus = [
    {
      status: "Available",
    },
    {
      status: "Away",
    },
    {
      status: "Busy",
    },
    {
      status: "Invisible",
    },
  ];

  const notificationType = [
    {
      type: "Sound Notifications",
    },
    {
      type: "Popup Notifications",
    },
    {
      type: "Show Read Receipt",
    },
  ];

  const showOnlineStatus = () => {
    return onlineStatus.map((group, index) => {
      return (
        <div className="mt-20" key={index}>
          <div className="flex jc-sb a-i-c">
            <div className="flex a-i-c fs-15 fw-500">
              <Bullet size={"16.5px"} color={statusColor(group.status)} />
              <span className="ml-10">{group.status}</span>
            </div>
            {/* <input type="radio" name="group" className="input-radio" /> */}
            <img
              alt={""}
              src={!index ? radioActive : radio}
              className="input-radio"
            />
          </div>
          <hr className="hr-light" />
        </div>
      );
    });
  };

  const showNotificationStatus = () => {
    return notificationType.map((notifiation, index) => {
      return (
        <div className="mt-20" key={index}>
          <div className="flex jc-sb a-i-c">
            <div className="fw-500 fs-15">{notifiation.type}</div>
            {/* <input
              type="checkbox"
              name="notification"
              className="input-checkbox"
            /> */}
            <img
              alt={""}
              src={!index ? checkBoxOn : checkBoxOff}
              className="input-radio"
            />
          </div>
          <hr className="hr-light" />
        </div>
      );
    });
  };

  return (
    <div className="flex">
      <div className="left-sidebar">
        <div className="header header-left">     
            <div className="unhide-header ml-98"><span className="spn-back">&#x3c; Back</span></div>     
            <div className="spn-more">More</div>
            <img className="hide-header ml-98" alt={""} src={closeWhite} width={24} height={24} />
        </div>
        <div className="sidebar-center">
          <div className="user-image">
            <img src={userImage} alt={""} />
          </div>
          <div className="left-sidebar-bottom">
            <div>
              <div className="op-5 fs-12 fw-500 mb-10">NAME</div>
              <input type="text" placeholder="12345" className="input-text input-text-3 i-3" />

              <hr className="hr-light" />
            </div>
            <div className="status-message">
              <div className="op-5 fs-12 fw-500">STATUS MESSAGE</div>
              <div>
                <textarea
                  type="text"
                  placeholder="I'm Available"
                  className="textarea txt-area"
                />
              </div>
              <hr style={{ backgroundColor: "lightcyan" }} />
              <div className="op-5 fs-12 fw-500 mt-20">ONLINE STATUS</div>
              {showOnlineStatus()}
            </div>
            <div className="div-noti" style={{ width: 248 }}>
              <div className="op-5 fs-12 fw-500 mt-20">NOTIFICATIONS</div>
              {showNotificationStatus()}
            </div>
            <div>
              <div className="div-noti" style={{ width: 248 }}>
                <div className="op-5 fs-12 fw-500 mb-10 mt-10">PRIVACY</div>
                <div className="flex a-i-c jc-sb">
                  <div className="fw-500 fs-15">Blocked User</div>
                  <div className="fw-300">0</div>
                </div>
              </div>
              <hr className="hr-light" />
            </div>

            <div className="div-noti" style={{ width: 248 }}>
              <div className="op-5 fs-12 mb-10 mt-10 fw-500">CONVERSATION</div>
              <div className="fs-15 fw-500">Translate Conversation</div>
              <hr className="hr-light" />
            </div>
          </div>
        </div>
        <ChatBOx />
      </div>
    </div>
  );
}
