import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import ErrorMessage from './ErrorMessage';
import axios from '../api/axios';
const LOGIN_URL = '/api/v1/auth/login';

const Login = (props) => {

    const { setAuth } = useContext(AuthContext);
	const userRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ email, password }),
				{
					headers: { 'Content-Type': 'application/json' }
				}
			);

			const accessToken = response?.data?.data?.tokens?.access?.token;
			const roles = response?.data?.roles || "user";
            const user = { email, roles, accessToken };
            localStorage.setItem('user', JSON.stringify(user));
			setAuth({ email, roles, accessToken });
			setEmail('');
			setPassword('');
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response.data.params.errmsg) {
				setErrMsg(err.response.data.params.errmsg);
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
		}
	};

    const handleClick = () => {
        props.setStateOfPage(false);
    }

    return (
        <>
            <div className="bg-white login-sec text-c-sub-text">
                <h1 className="text-c-heading font-bold text-5xl mb-5">Login</h1>
                <p className=" text-sm font-normal mb-7">Sign in with your data that you entered
                    during your registration. </p>
                
                {errMsg !== '' ? <ErrorMessage variant="error">{errMsg}</ErrorMessage> : '' } 
                
                <form onSubmit={handleSubmit}>

                    <div className="field mb-5 ">
                        <label className="text-xs" htmlFor="username">Email</label>
                        <div className="flex items-center border py-1 px-3 h-11 rounded-[8px] text-sm">
                            <input className="flex-auto outline-none border-none leading-8"
                                    type="email"
                                    id="c"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    placeholder="Email Address" />
                        </div>
                    </div>    
                    
                    <div className="field mb-5 ">
                        <label className="text-xs" htmlFor="password">Password</label>
                        <div className="flex items-center border py-1 px-3 h-11 rounded-[8px] text-sm">
                            <input className="flex-auto outline-none border-none leading-8"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
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
                        <label className="flex flex-auto text-xs" htmlFor="rememberme">
                            <input type="checkbox" className="default:ring-4 mr-2" name="remember" />
                            <span>Keep me logged in</span>
                        </label>
                    </div>
                    
                    <button type="submit" className="block w-full bg-c-blue mt-4 py-2 rounded-[7px] text-white font-semibold mb-2">Login</button>
                    
                </form>
                <div className="text-sm ml-2 hover:text-blue-500 text-c-blue cursor-pointer text-center">
                    <button className="text-c-blue">Forgot Password ?</button>
                </div>
            </div>
            <div className="text-center text-sm md:absolute bottom-5 left-0 w-full">
                <p>Don't have an account? <button onClick={handleClick} className="text-c-blue">Sign up</button></p>
            </div>
        </>
    );
}

export default Login;