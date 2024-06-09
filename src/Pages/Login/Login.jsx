import loginImg from "../../assets/others/authentication1.png"
import loginBack from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Log In</title>
            </Helmet>
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
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                {/* <button className="btn btn-outline btn-xs mt-4 bg-green-400 ">Validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#f1bd6f] text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div>
                            <p className=" text-[#D1A054] text-center font-semibold">New Here? Go to <Link className=" underline" to="/signup">Sign Up</Link></p>

                        </div>
                        <div className="divider px-6"></div>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default Login;