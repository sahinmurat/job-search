import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Category() {

    const { slug } = useParams();
    console.log(slug)

    useEffect(() => {
        axios.get(`https://remotive.io/api/remote-jobs?category=${slug}`)
            .then((res) => console.log(res.data.jobs))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            category** {slug}
        </div>
    )
}

export default Category
