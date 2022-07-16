const ContactUs = () => {
  return (
    <section id="contactUs " className="pt-5">
                <div className="container">
                    <div className="row text-center">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row  align-items-center mt-5">
                        <div className="col-12 col-lg-7  p-5 pb-1 pt-1">
                            <form action="" className='px-4'>
                                <div className=" row">
                                    <div className=" col-sm-6 col-xs-12  mb-3 ">
                                        <input type="text" placeholder="First Name" className="form-control " />
                                    </div>
                                    <div className=" col-sm-6 col-xs-12 mb-3 ">
                                        <input type="text" placeholder="Last Name" className="form-control " />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <input type="email" placeholder="Email" className="form-control " />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <textarea placeholder="Your Message" name="" id="" cols="30" rows="10" className=" form-control"></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <input type="submit" value="Send" className="form-control btn btn-violet fw-bold " />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 col-lg-5">
                            <img src={require('../../assets/img/contact-us.png')} alt="contact us"className="w-75   m-auto d-block" srcSet=""/>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ContactUs
