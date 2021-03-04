import React from 'react'
import { useLocation } from "react-router-dom";
import './Detail.styles.css'

function Detail() {
    const location = useLocation();
    const myparam = location.state.params;

     return (
        <div className='detailWrapper'
        dangerouslySetInnerHTML={{
          __html: myparam.data.description,
        }}
      ></div>
    )
}

export default Detail


