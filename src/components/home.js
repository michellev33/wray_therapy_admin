import React, { } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <center><h1>WrayTherapy</h1></center>
        <div className="card">
            <div className="card-body">
                <Link to={"/users"}><h5 className="card-title">View users</h5></Link>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <Link to={"/questionSets"}><h5 className="card-title">Create new question set</h5></Link>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <Link to={"/questions"}><h5 className="card-title">Create new question</h5></Link>
            </div>
        </div>
    </div>
    )
}

export default Home