import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../Card/Card'
import Grid from '@material-ui/core/Grid';
import useStyles from './CategoryStyle'

function Category() {
    const classes = useStyles();
    const { slug } = useParams();
    const [data, setData] = useState([])

    useEffect( async () => {
        await axios.get(`https://remotive.io/api/remote-jobs?category=${slug}`)
            .then((res) => {
                console.log(res.data.jobs)
                setData(res.data.jobs)
            })
            .catch((err) => console.log(err))
    }, [])
   
    

    return (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {data.map((item) => (
                <Grid key={item._id} item xs={12} sm={3}>
                    <Card data={item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Category
