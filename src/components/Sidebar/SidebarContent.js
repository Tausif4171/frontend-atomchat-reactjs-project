import { caretDown, search, mic } from "../../assets/icons";

const SidebarContent = ({ content, dropdown }) => {
  return (
    <>
      <div className="sidebar-content" style={{ height: 114, width: 281 }}>
        <div className="flex a-i-c w-375" style={{ height: 64, width: 248 }}>
          <div className="fs-22 fw-700 fs-32">{"heading"}</div>
        </div>
        <div className="flex jc-sb a-i-fs" style={{ height: 50, width: 248 }}>
          <div
            style={{
              height: 32,
              borderRadius: 8,
              width: dropdown ? 216 : 248,
            }}
            className="input-text mb-10 flex a-i-c"
          >
            <img alt={""} src={search} />
            <input
               className="h-w"
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
            <div className="mic"><img alt={""} src={mic} /></div>
          </div>
          <div
            style={{ width: 32, height: 32 }}
            className={dropdown ? "flex a-i-c jc-fe csr-p" : "d-none"}
          >
            <img
              src={caretDown}
              alt={""}
              onClick={() => dropdown.update(!dropdown.open)}
            />
          </div>
        </div>
      </div>
      <div className="flex-d a-i-c scroll-list" style={{ marginBottom: 64 }}>
        {content()}
      </div>
    </>
  );
};

export default SidebarContent;
