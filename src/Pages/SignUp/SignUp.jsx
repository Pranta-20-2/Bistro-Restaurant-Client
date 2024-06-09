import signUpImg from "../../assets/others/authentication1.png"
import loginBack from "../../assets/others/authentication.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // Create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User Created to database");
                                    reset();
                                    Swal.fire({
                                        title: "User created Successfully",
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
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200" style={{ background: `url(${loginBack})` }}>
                <div className="hero-content flex-col md:flex-row-reverse shadow-2xl m-20 py-10" style={{ background: `url(${loginBack})` }}>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm" >
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type == 'required' && <span className="text-red-600">Password is required</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters </span>
                                }
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters </span>
                                }
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase one lowercase one special character</span>
                                }

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#f1bd6f] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <p className=" text-[#D1A054] text-center font-semibold">Already Registered? Go to <Link className=" underline" to="/login">Log in</Link></p>
                        </div>
                        <div className="divider px-4"></div>
                        <SocialLogin></SocialLogin>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;