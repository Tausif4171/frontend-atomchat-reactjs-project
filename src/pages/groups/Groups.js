import { CometChat } from "@cometchat-pro/chat";
import React, { useEffect, useState } from "react";
import { messageRead, search, caretDown } from "../../assets/icons/index";
import { Bullet } from "../../components/Common";
import Sidebar from "../../components/Sidebar";
import ChatBox from "../ChatBox";
import { fetchGroups } from "../../redux/action/groupAction";
import { useDispatch, useSelector } from "react-redux";

export default function Groups() {
  const [dropdown, setDropdown] = useState(false);
  const { groupList } = useSelector((state) => state?.groups);

  const dispatch = useDispatch();

  useEffect(() => {
    !groupList && dispatch(fetchGroups());
  }, []);

  const showgroupChat = () => {
    return groupList?.map((group, index) => {
      return (
        <div
          key={index}
          style={{ width: 248, height: 62 }}
          className="flex a-i-c"
        >
          <img alt={""} src={group.icon} width={36} height={36} />
          <div
            style={{ width: 202, height: 62, marginLeft: 10 }}
            className="flex a-i-c hr-light"
          >
            <div
              style={{
                width: 202,
                height: 36,
              }}
              className="flex-d jc-sb"
            >
              <div
                style={{
                  width: 202,
                  height: 22,
                }}
                className="flex jc-sb"
              >
                <div className="fs-15 fw-700">{group.name}</div>
                <div className="fs-13 fw-400 color-light flex a-i-c">
                  {group.status === "seen" ? (
                    <img alt={""} src={messageRead} />
                  ) : null}
                  {group.time}
                  {false ? (
                    <Bullet size={12} color={"#3399FF"} number={"8"} />
                  ) : null}
                </div>
              </div>
              <div
                style={{
                  width: 211,
                  height: 12,
                }}
                className="flex ai-fe fs-13 fw-400 color-light"
              >
                {group.msg ? group.msg : "start chattering"}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex">
      <Sidebar
        content={showgroupChat}
        heading={"Groups"}
        dropdown={{
          open: dropdown,
          update: setDropdown,
        }}
      />
      <ChatBox />
    </div>
  );
}
