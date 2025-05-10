import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-light" aria-label="Ninth navbar example">
                <div className="container-xl">

                    <a className="navbar-brand" href="#"><img src="/real-estate-website/logo.webp" alt="Marci Metzger Homes Logo"/></a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    
                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2"> <a className="nav-link active fs-3 fw-bold" aria-current="page" href="#">HOME</a> </li>
                            <li className="nav-item mx-2"> <a className="nav-link fs-3 fw-bold" href="#">LISTINGS</a> </li>
                            <li className="nav-item mx-2"> <a className="nav-link fs-3 fw-bold" href="#">LET'S MOVE</a> </li>
                            <li className="nav-item mx-2"> <a className="nav-link fs-3 fw-bold" href="#">ABOUT</a> </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar