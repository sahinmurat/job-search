import React from 'react'
import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const myparam = location.state.params;

    var html = myparam.data.description;
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";

    return (
        <div
        dangerouslySetInnerHTML={{
          __html: myparam.data.description,
        }}
      ></div>
    )
}

export default Detail


