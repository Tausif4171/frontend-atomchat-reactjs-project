import React, { useEffect } from "react";
import UserDetail from "../components/UserDetail";
import ChatBox from "./ChatBox";
import Sidebar from "../components/Sidebar";
import { fetchUsers } from "../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function Contacts() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state?.users);

  useEffect(() => {
    !userList && dispatch(fetchUsers());
  }, []);

  const showContactList = () => {
    return userList?.map((user, index) => {
      return (
        <>
          <div
            style={{ height: 28, width: 248 }}
            className={
              index === 0 || user.name[0] !== userList[index - 1]?.name[0]
                ? "fs-12 fw-400 flex ai-fe color-light"
                : "d-none"
            }
          >
            {user.name[0]}
          </div>
          <div style={{ width: 248, height: 54 }} className="flex a-i-c">
            <UserDetail
              status={user.status}
              name={user.name}
              from={"list"}
              img={user.avatar}
            />
          </div>
        </>
      );
    });
  };

  return (
    <div className="flex">
      <Sidebar content={showContactList} heading={"Contacts"} />
      <ChatBox />
    </div>
  );
}
