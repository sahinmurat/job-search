import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Blog from '../blog/Blog'

const basicUrl = 'https://jobs.github.com/positions.json?description=python&location=new+york'

function Main() {
    useEffect(()=>{
        // axios.get('https://sahinblog.herokuapp.com/list')
        axios.get('https://remotive.io/api/remote-jobs?category=design')
        .then((res)=>console.log(res.data.jobs))
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            <Blog />
        </div>
    )
}

export default Main
