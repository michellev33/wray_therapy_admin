import React, { } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1 className="p-4">WrayTherapy</h1>
        <div className="p-4 row">
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-body">
                        <Link to={"/users"} className="btn btn-lg btn-primary btn-block p-5"><span className="h2">Users</span></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center">
                <div className="card">
                    <div className="card-body">
                        <Link to={"/questionSets"} className="btn btn-lg btn-primary btn-block p-5"><span className="h2">Question Sets</span></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center">
                <div className="card">
                    <div className="card-body">
                        <Link to={"/questions"} className="btn btn-lg btn-primary btn-block p-5"><span className="h2">Questions</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home