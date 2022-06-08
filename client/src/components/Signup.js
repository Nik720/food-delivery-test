import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import ErrorMessage from './ErrorMessage';
const SIGNUP_URL = '/api/v1/auth/register';

const Signup = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setErrMsg('');
	}, [email, password, name]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				SIGNUP_URL,
				JSON.stringify({ name, email, password }),
				{
					headers: { 'Content-Type': 'application/json' }
				}
			);
			setEmail('');
			setPassword('');
			setName('');
            handleClick();
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg(err.response.data.params.errmsg);
			} else {
				setErrMsg('Registration Failed');
			}
		}
	};

    const handleClick = () => {
        props.setStateOfPage(true);
    }

    return (
        <>
            <div className="bg-white login-sec text-c-sub-text">
                
                <h1 className="text-c-heading font-bold text-5xl mb-5">Register</h1>
                <p className=" text-sm font-normal mb-7">Sign in with your data that you entered
                    during your registration. </p>

                {errMsg != '' ? <ErrorMessage variant="error">{errMsg}</ErrorMessage> : '' } 

                <form onSubmit={handleSubmit}>

                    <div className="field mb-5 ">
                        <label className="text-xs" htmlFor="username">Name</label>
                        <div className="flex items-center border py-1 px-3 h-11 rounded-[8px] text-sm">
                            <input className="flex-auto outline-none border-none leading-8"
                                    type="text"
                                    id="n"
                                    autoComplete="off"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                    placeholder="Name" />
                        </div>
                    </div>  

                    <div className="field mb-5 ">
                        <label className="text-xs" htmlFor="username">Email</label>
                        <div className="flex items-center border py-1 px-3 h-11 rounded-[8px] text-sm">
                            <input className="flex-auto outline-none border-none leading-8"
                                    type="email"
                                    id="c"
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
                    
                    <button type="submit" className="block w-full bg-c-blue mt-4 py-2 rounded-[7px] text-white font-semibold mb-2">Register</button>
                    
                </form>
            </div>
            <div className="text-center text-sm md:absolute bottom-5 left-0 w-full">
                <p>Already have an account? <a href="#" onClick={handleClick} className="text-c-blue">Login</a></p>
            </div>
        </>
    );
}

export default Signup;