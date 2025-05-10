import React from 'react'

const Services = () => {
    return (
        <>
            <section className="container py-5 border-bottom">
                <h1 className="text-center pt-4 text-light-brown">Our Services</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-4 shadow-lg rounded-4">

                    <div className="col text-center p-4 my-2">
                        <img className="img-fluid mb-4 rounded-4" src="/real-estate-website/services1.webp" alt="Services Image" />
                        <h3 className="mb-4">Real Estate Done Right</h3>
                        <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!
                        </p>
                    </div>

                    <div className="col text-center p-4 my-2">
                        <img className="img-fluid mb-4 rounded-4" src="/real-estate-website/services2.webp" alt="Services Image" />
                        <h3 className="mb-4">Commercial & Residential</h3>
                        <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.
                        </p>
                    </div>

                    <div className="col text-center p-4 my-2">
                        <img className="img-fluid mb-4 rounded-4" src="/real-estate-website/services3.webp" alt="Services Image" />
                        <h3 className="mb-4">Rely on Expertise</h3>
                        <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services