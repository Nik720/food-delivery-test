import cardImage from "./../assets/images/card_image.png"
import "./Login-page.css"

const LoginPage = () => {
    return (
        <div className="h-screen flex">
            <div className="flex flex-auto justify-evenly p-4 w-12/12 md:w-5/12 lg:w-5/12 bg-white">
                <div className="flex flex-col w-80 relative space-y-[80px] md:space-y-[120px]">
                    <div className="logo mb-5">
                        <img src={require('./../assets/images/logo.png')} alt="" />
                    </div>
                    <div className="bg-white login-sec text-c-sub-text">
                        <h1 className="text-c-heading font-bold text-5xl mb-5">Login</h1>
                        <p className=" text-sm font-normal mb-7">Sign in with your data that you entered
                            during your registration. </p>

                        <div className="field mb-5 ">
                            <label className="text-xs">Email</label>
                            <div className="flex items-center border py-2 px-3 h-11 rounded-[8px] text-sm">
                                <input className="flex-auto outline-none border-none" type="text" name="" id=""
                                    placeholder="Email Address" />
                            </div>
                        </div>    
                        
                        <div className="field mb-5 ">
                            <label className="text-xs">Password</label>
                            <div className="flex items-center border py-2 px-3 h-11 rounded-[8px] text-sm">
                                <input className="flex-auto outline-none border-none" type="text" name="" id=""
                                    placeholder="Min. 8 character" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="field mb-5">
                            <label className="flex flex-auto text-xs" for="rememberme">
                                <input type="checkbox" className="default:ring-4 mr-2" name="remember" />
                                <span>Keep me logged in</span>
                            </label>
                        </div>
                        
                        <button type="submit" className="block w-full bg-c-blue mt-4 py-2 rounded-[7px] text-white font-semibold mb-2">Login</button>
                        
                        <div className="text-sm ml-2 hover:text-blue-500 text-c-blue cursor-pointer text-center">
                            <a href="">Forgot Password ?</a>
                        </div>
                    </div>
                    <div className="text-center text-sm md:absolute bottom-5 left-0 w-full">
                        <p>Don't have an account? <a href="#" className="text-c-blue">Sign up</a></p>
                    </div>
                </div>
            </div>


            <div className="hidden md:flex md:w-7/12 lg:w-7/12 bg-c-blue i">
                <div className="my-4">
                    <img src={cardImage} className="w-2/3 mx-auto mt-10"/>
                    <h1 className="text-white font-bold text-2xl font-sans text-center mt-5">Leave reviews for all meals</h1>
                    <p className="text-white mt-5 text-center  md:w-7/12 lg:w-7/12 mx-auto">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;