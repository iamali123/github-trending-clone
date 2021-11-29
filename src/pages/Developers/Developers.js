import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Developers.css";
import Header from '../Header/Header'
import axios from 'axios'
import { Container } from "react-bootstrap";
const Developers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      if (res.status === 200) {
        setUsers(res.data)
      }
    }).catch((error) => {
      console.log("error", error)
    })
  }, [])
  return (
    <>
      <Header />
      <Container className="p-0 mb-3">
      {
        users?.map((user, index) => {
          return (
            <div className="filter-box d-flex p-3">
              <Link to="#" className="num">
                {index + 1}
              </Link>
              <div className="mx-3">
                <Link to="#">
                  <img
                    className="rounded-circle"
                    src={user?.avatar_url}
                    alt="dummy"
                  />
                </Link>
              </div>
              <div className="col-sm-8 d-md-flex">
                <div className="col-md-6">
                  <h4>
                    <p >{user?.login ?? "N/A"}</p>
                  </h4>

                </div>
                <div className="col-md-6">
                  <h6 className="text-uppercase mb-1">Popular repo</h6>
                  <h6 className=" mb-1">
                    <Link to="#"> {user?.repos_url ?? "N/A"}</Link></h6>
                  <p>A prompt theme engine for any shell.</p>
                </div>
              </div>
            </div>
          )
        })
      }
      </Container>
    </>
  );
};

export default Developers;
