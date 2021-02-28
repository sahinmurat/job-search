import React from 'react'

function SavedJob() {
    const joblist = JSON.parse(localStorage.getItem('jobList'))

    return (
        <div>
            { joblist?.map((item) => <p>{item.title}</p>)}
        </div>
    )
}

export default SavedJob
