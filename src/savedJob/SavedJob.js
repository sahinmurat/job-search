import React from 'react'
import Card from '../Card/Card'
import Grid from '@material-ui/core/Grid';
import useStyles from '../categories/CategoryStyle'


function SavedJob() {
    const joblist = JSON.parse(localStorage.getItem('jobList'))
    const classes = useStyles();

    return (
              <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {joblist?.map((item) => (
                <Grid key={item._id} item xs={12} sm={3}>
                    <Card data={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default SavedJob
