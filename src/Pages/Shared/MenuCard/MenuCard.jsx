import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const MenuCard = ({ item }) => {
    const { name, recipe, image, price, category, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()
    const handleAddToCart = () => {
        if (user && user.email) {
            // sent cart item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          // Refetch cart to update the items count
                          refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="relative ">
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl space-y-4">

                <figure><img src={image} alt="" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>Category: {category}</p>
                    <div className="card-actions">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline border-0 border-[#D99904] border-b-4 text-[#D99904] hover:text-[#D99904] ">ADD TO CART</button>
                    </div>
                </div>
                <div className=" absolute bg-black text-white bg-opacity-70 text-center right-5 px-4 py-1 rounded-xl">
                    $ {price}
                </div>

            </div>

        </div>

    );
};

export default MenuCard;