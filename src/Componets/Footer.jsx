

const Footer = () => {
    return (
        <div className="relative pt-72">
            <div className=" w-10/12 ml-[8%] border-2 border-white-100 mt-[-200px] rounded-xl absolute p-4">
                <div className="border-2 border-red-300 rounded-xl">
                    <div
                        className="hero bg-cover bg-no-repeat rounded-xl " style={{
                            backgroundImage: `url("https://i.ibb.co.com/WHXDR2P/bg-shadow.png")`,
                            backgroundColor: "#fff"
                        }} >

                        <div className="py-14 text-center ">
                            <div className="max-w-lg">

                                <form>
                                    <h6 className="text-4xl font-bold">Subscribe to our Newsletter</h6>
                                    <p className="text-xl mt-8">Get the latest updates and news right in your inbox!</p>
                                    <fieldset className="form-control w-80 mt-6">

                                        <div className="join items-center">
                                            <input
                                                type="text"
                                                placeholder="Enter Your Email.com"
                                                className="input px-20 input-bordered join-item" />
                                            <button className="btn btn-primary join-item">Subscribe</button>
                                        </div>
                                    </fieldset>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" bg-neutral tex-neutral-content   pt-40  ">
                <div className="items-center flex justify-center mb-20">
                    <img src="https://i.ibb.co.com/QfTfpG2/logo-footer.png" alt="" />
                </div>
                <footer className="footer mx-auto w-10/12 text-white flex justify-around">
                    <nav >
                        <h6 className="footer-title">About Us</h6>
                        <p>We are a passionate team dedicated to providing <br></br> the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Players</a>
                        <a className="link link-hover">Contact</a>

                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <fieldset className="form-control w-80 mt-6">

                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <p className="text-center text-white p-4 border-t border-stone-700 mt-12">@2024 Your Company All Rights Reserved.</p>

            </div>
        </div>
    );
};

export default Footer;