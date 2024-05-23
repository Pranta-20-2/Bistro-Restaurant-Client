import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, desc }) => {
    return (
        <div className=" pt-8">
            {title && <Cover img={img} title={title} desc={desc}></Cover>}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 m-10">

                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex flex-col items-center my-8">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-black border-b-4 uppercase">Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;