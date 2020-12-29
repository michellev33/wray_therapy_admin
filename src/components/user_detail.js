import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

const UserDetail = () => {
  
  const [user, setUser] = useState({});
  const detailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' +  useParams().id;
  const history = useHistory();

  const getUser = async (setUser) => {
    try {
      const userDetails = await axios.get(detailsUrl)
      setUser(userDetails.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getUser(setUser)
  }, [])

  const handleDeleteUser = e => {
    e.preventDefault();
    var confirmDelete = window.confirm('Do you really want to delete this user?');
    if (confirmDelete) {
      axios
        .delete(detailsUrl)
        .then(res => 
          console.log("Deleted user: ", res),
        )
        .then(() => 
          history.push("/users"),
        )
        .catch(err => console.log(err));
    }
  };

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - User: {user.id}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <strong>Username</strong>: {user.username}<br /><br />
          <Link to={"/users/" + user.id + "/attempts"}><h5 className="card-title">View game attempts</h5></Link>
          <hr />
          <div className="row">
            <div className="col-md-2">
              <Link to={"/users"}><h6 class="btn btn-outline-primary">&laquo; back to user list</h6></Link>
            </div>
            <div className="col-md-10 text-right">
              <form className="post" onSubmit={handleDeleteUser}>
                <div>
                  <button className="btn btn-danger" type="submit">Delete this user</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserDetail