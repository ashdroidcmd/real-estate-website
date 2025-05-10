import React from 'react'

const ListingSearch = () => {
    return (
        <>
            <section id="listing-bg">
                <div className="container py-5">
                    <h1 className="py-4 text-center text-white">Find Your Dream Home</h1>

                    <div className="p-5 mb-5 bg-white rounded-4">
                        <h1 className="text-light-brown">Search Listings</h1>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4">
                            <div className="col">
                                <p className="fs-5 mb-0">Location</p>
                                <div className="dropdown w-100">
                                    <button
                                        className="btn btn-outline-light dropdown-toggle text-black rounded-1 w-100 d-flex justify-content-between align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span>Any</span>
                                        <span className="dropdown-toggle-arrow"></span>
                                    </button>
                                    <ul className="dropdown-menu  w-100">
                                        <li><a className="dropdown-item" href="#">Alamo</a></li>
                                        <li><a className="dropdown-item" href="#">Alton</a></li>
                                        <li><a className="dropdown-item" href="#">Blue Diamond</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <p className="fs-5 mb-0">Type</p>
                                <div className="dropdown  w-100">
                                    <button
                                        className="btn btn-outline-light dropdown-toggle text-black rounded-1 w-100 d-flex justify-content-between align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span>Any</span>
                                        <span className="dropdown-toggle-arrow"></span>
                                    </button>
                                    <ul className="dropdown-menu  w-100">
                                        <li><a className="dropdown-item" href="#">Land</a></li>
                                        <li><a className="dropdown-item" href="#">High Rise</a></li>
                                        <li><a className="dropdown-item" href="#">Residential</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <p className="fs-5 mb-0">Sort By</p>
                                <div className="dropdown  w-100">
                                    <button
                                        className="btn btn-outline-light dropdown-toggle text-black rounded-1 w-100 d-flex justify-content-between align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span>Any</span>
                                        <span className="dropdown-toggle-arrow"></span>
                                    </button>
                                    <ul className="dropdown-menu  w-100">
                                        <li><a className="dropdown-item" href="#">Newest</a></li>
                                        <li><a className="dropdown-item" href="#">Oldest</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-2">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                    <p className="fs-5 mb-0">Bedrooms</p>
                                        <div className="dropdown w-100">
                                            <button
                                                className="btn btn-outline-light dropdown-toggle text-black rounded-1 w-100 d-flex justify-content-between align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span>Any Number</span>
                                                <span className="dropdown-toggle-arrow"></span>
                                            </button>
                                            <ul className="dropdown-menu  w-100">
                                                <li><a className="dropdown-item" href="#">1+</a></li>
                                                <li><a className="dropdown-item" href="#">2+</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <p className="fs-5 mb-0">Baths</p>
                                        <div className="dropdown w-100">
                                            <button
                                                className="btn btn-outline-light dropdown-toggle text-black rounded-1 w-100 d-flex justify-content-between align-items-center"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span>Any Number</span>
                                                <span className="dropdown-toggle-arrow"></span>
                                            </button>
                                            <ul className="dropdown-menu  w-100">
                                                <li><a className="dropdown-item" href="#">1+</a></li>
                                                <li><a className="dropdown-item" href="#">2+</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <p className="fs-5 mb-0">Min Price</p>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col">
                                        <p className="fs-5 mb-0">Max Price</p>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className="col d-flex align-items-center justify-content-center">
                                <button type="submit" className="btn btn-secondary mb-4 px-5 py-2 rounded-pill text-white fw-bold text-center w-100 mt-3">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListingSearch