import { useState } from "react";
import "./styles/showlink.scss";

function ShowLink(props) {
  const [btnText, setBtnText] = useState("Copy");
  const [btncolor, setBtncolor] = useState("cyan");

  function resetBtnText() {
    setTimeout(() => {
      setBtnText("Copy");
      setBtncolor("cyan");
    }, 2000);
  }
  console.log(props.list);
  return (
    <div className="show">
      {props.list &&
        props.list.map((item, key) => {
          console.log(item);
          return (
            <div key={key} className="show__indi">
              <h5 className="long-link">{item.original_link}</h5>
              <h5 className="short-link">{item.short_link}</h5>
              <button
                style={{ backgroundColor: btncolor }}
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(item.short_link);
                  setBtnText("Copied!");
                  setBtncolor("hsl(257, 27%, 26%)");
                  resetBtnText();
                }}
              >
                {btnText}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ShowLink;
