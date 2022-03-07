import React from "react";
import { userImage } from "../assets/images";

export default function UserDetail({ status, name, from, img, imgSize }) {
  const color =
    status === "Available"
      ? "#51B681"
      : status === "offline" || status === "Away"
      ? "#EFBE4D"
      : status === "Busy"
      ? "#EB5160"
      : "pink";

  return (
    <div className="flex a-i-c" id="user_hide">
      <img
      className="himg-w-h"
        src={img ? img : userImage}
        alt="user"
        style={{
          width: imgSize ? imgSize : 36,
          height: imgSize ? imgSize : 36,
          overflow: "hidden",
        }}
      />
      <div style={{ marginLeft: 10 }} className="flex-d j-c-c ">
        <div
          className="fs-15 fw-600 flex j-c-c a-i-c hfs-17"
          style={{
            color: from === "header" ? "#FFF" : "#141414",
            height: 22,
          }} 
        >
          {name}
        </div>
        {status ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {from !== "chat" && (
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 12,
                  background: color,
                  marginRight: 5,
                }}
              />
            )}
            <div
              style={{
                color: from === "header" ? "#FFF" : "lightslategrey",
                fontSize: 12,
                fontWeight: 400,
                height: 20,
              }}
              className="flex j-c-c a-i-c hfs-15"
            >
              {from === "list" ? `I'm ${status}` : status}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
