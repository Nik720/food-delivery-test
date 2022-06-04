import Login from "../components/login/Login";
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
                    <Login />
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