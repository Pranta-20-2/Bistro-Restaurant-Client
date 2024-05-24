import loginImg from "../../assets/others/authentication1.png"
import loginBack from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {

        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else {
           setDisabled(true)
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ background: `url(${loginBack})` }}>
                <div className="hero-content flex-col md:flex-row shadow-2xl m-20 py-10" style={{ background: `url(${loginBack})` }}>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm" >
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-4">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#f1bd6f] text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;