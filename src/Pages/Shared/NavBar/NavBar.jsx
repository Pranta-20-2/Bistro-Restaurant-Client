import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfully",
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

            })
            .catch(error => console.log(error))
    }
    const navOptions =
        <>
            <div className=" flex items-center">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Our Menu</NavLink></li>
                <li><NavLink to="/order/salads">Order Food</NavLink></li>
                <li>
                    <Link to="/dashboard">
                        <button className="btn">
                            <FaShoppingCart className=" mr-2"></FaShoppingCart>
                            <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                    </Link>
                </li>
                {
                    user ?
                        <>

                            <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                            <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName}`}>

                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>

                            </div>
                        </>
                        :
                        <>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                        </>
                }

            </div>


        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <p className="text-xl font-bold">BISTRO BOSS <br />RESTAURANT</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;