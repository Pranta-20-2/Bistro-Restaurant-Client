import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="text-white mt-10 bg-fixed  " style={{ backgroundImage: `url(${featuredImg})` }} >
            <div className=" bg-[#151515B2] bg-opacity-70 ">
                <div className="pt-10 ">
                    <SectionTitle
                        heading={"FROM OUR MENU"}
                        subHeading={"Check it out"}>
                    </SectionTitle>
                </div>
                <div className="md:flex justify-center items-center gap-10 pb-20 pt-5 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="space-y-3">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline border-0 text-white border-b-4">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;