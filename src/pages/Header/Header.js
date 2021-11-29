import React from 'react'
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './Header.css'

function Header() {
    const location = useLocation();
    return (
        <>
            <Container fluid className="trendingBanner px-0 border-bottom">
                <Container className="text-center">
                    <h1>Trending</h1>
                    <p>These are the developers building the hot tools today.</p>
                </Container>
            </Container>
            <Container fluid className="trendingResults">
                <Container className="innerContainer px-0">
                    <div className="box-header d-flex justify-content-between p-3">
                        <div className="tabBtns d-flex">
                        <Link to="/Trending" className={`tabBtn ${location.pathname === "/Trending" ? "active" : ""}`}>Repositories</Link>
                            <Link to="/Developer" className={`tabBtn ${location.pathname === "/Developer" ? "active" : ""}`}>Developers</Link>
                                               </div>
                        <div className="filterOptions d-flex">
                            <Link to="#">Spoken Language: <span>Any</span> </Link>
                            <Link to="#">Language: <span>Any</span> </Link>
                            <Link to="#">Date Range: <span>Today</span> </Link>
                        </div>
                    </div>

                </Container>
            </Container>
        </>
    )
}

export default Header
