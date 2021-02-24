import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Category() {

    const { slug } = useParams();
    const [data, setData] = useState([])

    useEffect( async () => {
       await axios.get(`https://remotive.io/api/remote-jobs?category=${slug}`)
            .then((res) =>{
                console.log(res.data.jobs)
                setData(res.data.jobs)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            category** {slug}
            {data?.map((item) => <p>{item.title}</p>)}
        </div>
    )
}

export default Category
