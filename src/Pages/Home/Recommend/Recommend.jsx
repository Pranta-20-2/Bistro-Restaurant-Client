import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";
const Recommend = () => {
    const [menu] = useMenu()
    const recommend = menu.filter(item => item.category === "popular")

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {
                recommend.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>

    );
};

export default Recommend;