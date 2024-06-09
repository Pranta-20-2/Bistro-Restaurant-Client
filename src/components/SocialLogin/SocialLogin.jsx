import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(from, { replace: true })
                    })

            })
    }
    return (
        <div>
            <p className="text-center font-semibold mb-4">Or Sign In With</p>
            <div>
                <button onClick={handleGoogleSignIn} className="btn flex mx-auto">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;