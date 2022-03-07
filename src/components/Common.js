export const SidebarButton = ({ text }) => {
  return <div className="large-button">{text ? text : "Button"}</div>;
};

export const Bullet = ({ size, color, number }) => {
  return (
    <div
      style={{
        width: size ? size : 8,
        height: size ? size : 8,
        borderRadius: size ? size : 8,
        background: color ? color : "#FFF",
        border: `1px solid ${color ? color : "#51b681"}`,
        color: "#fff",
        fontSize: 10,
      }}
      className="flex j-c-c a-i-c"
    >
      {number}
    </div>
  );
};

export const statusColor = (status) => {
  if (status === "Available") return "#51b681";
  else if (status === "Away") return "#efbe4d";
  else if (status === "Busy") return "#eb5160";
  else return "";
};

export const MessageOption = ({ image, color, text }) => {
  return (
    <div
      style={{ width: 54, height: 74, padding: "20px 20px 0 20px" }}
      className="flex-d a-i-c"
    >
      <div
        style={{ background: color, width: 48, height: 48, borderRadius: 24 }}
        className="flex j-c-c a-i-c"
      >
        <img alt="" src={image} />
      </div>
      <div className="fs-9 fw-400 flex j-c-c a-i-c">{text}</div>
    </div>
  );
};
