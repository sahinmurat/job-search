import React, { useEffect } from 'react';
import axios from 'axios'
import Blog from '../blog/Blog'

function Main() {
    useEffect(() => {
        axios.get('https://remotive.io/api/remote-jobs?category=design')
            .then((res) => console.log(res.data.jobs))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <Blog />
        </div>
    )
}

export default Main
