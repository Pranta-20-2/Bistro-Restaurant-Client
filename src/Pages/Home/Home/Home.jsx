import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommend from "../Recommend/Recommend";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <div className=" text-center my-10 bg-black text-white">
                <p className="md:text-5xl font-semibold py-8">Call Us: +88 0192345678910</p>
            </div>
            <Recommend></Recommend>
            <Featured></Featured>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;