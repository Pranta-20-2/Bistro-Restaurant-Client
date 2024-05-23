const MenuCard = ({ item }) => {
    const { name, recipe, image, price, category  } = item;
    return (
        <div className="relative ">
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl space-y-4">
           
                <figure><img src={image} alt="" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>Category: {category}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-[#D99904] border-b-4 text-[#D99904] hover:text-[#D99904] ">ADD TO CART</button>
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