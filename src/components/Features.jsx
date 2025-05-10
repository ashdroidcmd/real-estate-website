import React from 'react'

const Features = () => {
    return (
        <>
            <section className="container py-5">

                <div className="my-2 pb-5 border-bottom">
                    <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
                        <div className="col d-flex justify-content-center">
                            <img className="brand-logo img-fluid" src="/real-estate-website/logo2.webp" alt="Ridge Realty Group Logo" />
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img className="brand-logo img-fluid" src="/real-estate-website/logo3.webp" alt="Equal Housing Opportunity Logo" />
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img className="brand-logo img-fluid" src="/real-estate-website/logo4.webp" alt="Realtor Logo" />
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img className="brand-logo img-fluid" src="/real-estate-website/logo5.webp" alt="Pahrump Valley Logo" />
                        </div>
                    </div>
                </div>
                <h1 className="text-center pt-4 text-light-brown">Get It Sold</h1>

                <div>
                    <div className="row">
                        <div className="featurette my-5 align-items-center">
                            <div className="col-md-6 order-md-2 text-center">
                                <h4 className="mb-4">Top Residential Sales Last 5 Years</h4>
                                <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
                                    Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
                                </p>
                            </div>

                            <div className="col-md-6 order-md-1">
                                <img className="img-fluid shadow-lg rounded-4" src="/real-estate-website/features1.webp" alt="" />
                            </div>
                        </div>

                        <div className="featurette mb-5 align-items-center">
                            <div className="col-md-6 text-center">
                                <h4 className="mb-4">Don't Just List it...</h4>
                                <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid shadow-lg rounded-4" src="/real-estate-website/features2.webp" alt="" />
                            </div>
                        </div>

                        <div className="featurette mb-4 align-items-center mb-5">
                            <div className="col-md-6 order-md-2 text-center">
                                <h4 className="mb-4">Guide to Buyers</h4>
                                <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                                </p>
                            </div>

                            <div className="col-md-6 order-md-1">
                                <img className="img-fluid shadow-lg rounded-4" src="/real-estate-website/features3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Features