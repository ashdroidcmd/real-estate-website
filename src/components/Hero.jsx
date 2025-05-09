import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="text-center text-white d-flex justify-content-center align-items-center vh-100"
                id="hero-section">
                <div className="d-flex flex-column gap-3 my-5 p-5">
                    <h4>MARCI METZGER - THE RIDGE REALTY GROUP</h4>
                    <h1>Pahrump Realtor</h1>
                    <button type="button" className="btn btn-light py-3 px-5 fs-5 rounded-pill fw-bold align-self-center">CALL NOW</button>
                </div>
            </section>
        </>
    )
}

export default Hero