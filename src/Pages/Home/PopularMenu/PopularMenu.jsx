import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div >
            <section>
                <SectionTitle
                    heading={"FROM OUR MENU"}
                    subHeading={"Check it out"}
                >
                </SectionTitle>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }

                </div>


            </section>
            <div className="flex flex-col items-center mt-8">
                <Link to="/menu">
                    <button className="btn btn-outline border-0 border-black border-b-4 ">View Full Menu</button>
                </Link>

            </div>
        </div>
    );
};

export default PopularMenu;