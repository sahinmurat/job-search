import React from 'react'
import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const myparam = location.state.params;

     return (
        <div
        dangerouslySetInnerHTML={{
          __html: myparam.data.description,
        }}
      ></div>
    )
}

export default Detail


