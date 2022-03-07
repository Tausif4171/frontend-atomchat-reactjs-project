import React, { useEffect, useState } from "react";
import { close, radio, radioActive, search } from "../../assets/icons/index";
import { SidebarButton } from "../../components/Common";
import ChatBox from "../ChatBox";
import Modal from "react-modal";
import Header from "../../components/Sidebar/Header";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { groupTypes } from "../../constants/Constants";
import { fetchUsers } from "../../redux/action/userAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 12,
    padding: "0 20px",
  },
};

export default function CreateGroup() {
  const [modal, setModal] = React.useState(false);
  const { userList } = useSelector((state) => state?.users);

  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    !userList && dispatch(fetchUsers());
  }, []);

  // const handleCreateGroup = () => {
  //   let GUID = "GUID";
  //   let groupName = "Hello Group!";
  //   let groupType = CometChat.GROUP_TYPE.PUBLIC;
  //   let password = "";

  // };

  const showGroupTypes = () => {
    return groupTypes.map((group, index) => {
      return (
        <div key={index} style={{ height: 93 }} className="flex-d j-c-c">
          <div className="flex jc-sb a-i-c">
            <div
              style={{ width: 212, height: 24 }}
              className="fs-15 fw-500 flex a-i-c"
            >
              {group.name}
            </div>
            <img
              alt={""}
              src={!index ? radioActive : radio}
              className="input-radio"
            />
          </div>
          <div
            className="fw-400 fs-13 color-light hr-light flex a-i-c"
            style={{ height: 46 }}
          >
            {group.description}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Modal
        isOpen={modal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setModal(false)}
        ariaHideApp={false}
        style={customStyles}
      >
        <div>
          <div style={{ height: 114, width: 360 }} className="flex-d a-i-c">
            <div
              style={{ height: 64, width: 328 }}
              className="flex jc-sb a-i-c"
            >
              <div className="fs-15 fw-600" style={{ color: "#9C9C9C" }}>
                Cancel
              </div>
              <div className="fs-22 fw-700">Select Members</div>
              <div className="fs-15 fw-600" style={{ color: "#3399FF" }}>
                Send
              </div>
            </div>
            <div style={{ width: 328, height: 50 }} className="flex">
              <div
                style={{
                  height: 32,
                  borderRadius: 8,
                  width: 328,
                }}
                className="input-text flex a-i-c"
              >
                <img alt={""} src={search} />
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    height: 30,
                    border: 0,
                    background: "transparent",
                    outline: "none",
                    marginLeft: 5,
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="scroll-list">{showContactList()}</div> */}
        </div>
      </Modal>
      <div className="flex">
        <div className="sidebar">
          <Header />
          <div className="sidebar-content">
            <div
              className="flex jc-sb a-i-c"
              style={{ width: 248, height: 64 }}
            >
              <div className="fs-22 fw-700">New Group</div>
              <img
                alt={""}
                src={close}
                width={24}
                height={24}
                className="csr-p"
                onClick={() => navigate.goBack()}
              />
            </div>
            <div style={{ height: 89 }} className="flex-d j-c-c hr-light">
              <div className="label">GROUP NAME</div>
              <div>
                <input
                  type="text"
                  placeholder="Test Group"
                  className="input-text"
                  style={{ height: 48 }}
                />
              </div>
            </div>
            <div style={{ width: 248 }} className="flex-d jc-c">
              <div className="label mt-20">GROUP TYPE</div>
              {showGroupTypes()}
            </div>
            <div
              className="flex ai-fe"
              style={{ height: 70 }}
              onClick={() => setModal(true)}
            >
              <SidebarButton text={"Create Group"} />
            </div>
          </div>
        </div>
        <ChatBox />
      </div>
    </>
  );
}
