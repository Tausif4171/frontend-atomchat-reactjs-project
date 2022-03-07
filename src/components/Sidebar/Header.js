import React from "react";
import { Link } from "react-router-dom";
import { newChat, moreAlt, notification } from "../../assets/icons/index";
import UserDetail from "../../components/UserDetail";

const Header = () => {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <>
      {dropdown ? (
        <div style={{ left: 176, top: 50 }} className="dropdown">
          <div className="dropdown-item">New Broadcast</div>
          <Link className="dropdown-item" to={"/create_new_group"}>
            New Group
          </Link>
        </div>
      ) : null}
      <div className="header">
        <UserDetail status={"Away"} name="User - 1234" from={"header"} />
        <div className="flex jc-sb" style={{ width: 100 }}>
          <img alt={"chat-icon"} src={newChat} className="csr-p" />
          <img alt={"notifiation-icon"} src={notification} className="csr-p" />
          <img
            alt={"more-icon"}
            src={moreAlt}
            className="csr-p"
            onClick={() => setDropdown(!dropdown)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
