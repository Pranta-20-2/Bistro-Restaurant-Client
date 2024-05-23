import MenuCard from "../../Shared/MenuCard/MenuCard";

const OrderItem = ({ order }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
                {
                    order.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>

        </div>
    );
};

export default OrderItem;