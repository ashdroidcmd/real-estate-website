import React from 'react'

const ContactDetails = () => {
    return (
        <>
            <section className="container py-5">
                <h1 className="text-center pb-4 text-light-brown">Call or Visit</h1>
                
                <div className="row row-cols-1 row-cols-md-2 pt-3 pb-5">

                    {/* Embedded Google Maps Location */}
                    <div className="col mb-5">
                        <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272692037134!2d-115.95525319999999!3d36.18424939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1746794363941!5m2!1sen!2sph"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Details and Address */}
                    <div className="col d-flex flex-column justify-content-center align-items-start px-4">
                        <button
                            type="button"
                            className="btn btn-secondary py-2 px-5 fs-6 rounded-pill fw-bold mb-4 align-self-start"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                            Message us on Whatsapp
                        </button>
                        <h4>Marci Metzger - THE RIDGE REALTY GROUP</h4>
                        <p className="mb-2">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                        <p className="mb-5">(206) 919-6886</p>
                        <h4>Office Hours</h4>
                        <p className="mb-2">Open daily 8:00 am - 7:00 pm</p>
                        <p>Appointments outside office hours available upon request. Just call!</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="px-2">
                    <h4>Send A Message</h4>
                    <form className="d-flex flex-column">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Name" id="name"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" id="email" />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control" rows="6" placeholder="Message" id="message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-secondary mb-4 px-5 py-3 rounded-pill text-white fw-bold align-self-center text-center">SEND</button>
                        <p className="text-center text-muted">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactDetails