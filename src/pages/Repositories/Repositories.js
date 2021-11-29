import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Repositories.css";

const Repositories = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            if (res.status === 200) {
                setPost(res.data)
            }
        }).catch((error) => {
            console.log("error", error)
        })
    }, [])
    return (
        <Container className="p-0 mb-3">
        {
        post.map((item, index) => {
            return (
                <div className="filter-box  p-3" key={index}>
                    <div className="d-flex justify-space-between mb-2 w-100">
                        <h4>
                            <Link to="#"> {item?.title ?? "N/A"}</Link>
                        </h4>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                        <p>{item?.body ?? "N/A"}</p>
                    </div>
                </div>
            )
        })
    }
    </Container>
    )
}

export default Repositories
