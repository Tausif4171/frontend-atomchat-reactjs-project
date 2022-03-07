import React from "react";
import { Link } from "react-router-dom";
import {
  contacts,
  call2,
  group2,
  chatgray,
  contactsOn,
  group,
} from "../../assets/icons/index";

const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/contacts"}>
        <img
          alt="contacts"
          src={
            window.location.pathname.includes("contacts")
              ? contactsOn
              : contacts
          }
          height={24}
          width={24}
        />
      </Link>
      <img alt="call" src={call2} height={24} width={24} />
      <img alt="chat" src={chatgray} height={24} width={24} />
      <Link to={"/all_groups"}>
        <img
          alt="group"
          src={window.location.pathname.includes("groups") ? group2 : group}
          height={24}
          width={24}
        />
      </Link>
    </div>
  );
};

export default Footer;
