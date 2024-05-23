import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert");
    const offered = menu.filter(item => item.category === "offered");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" desc="Would you like to try a dish?"></Cover>
            <SectionTitle
                heading="TODAY'S OFFER"
                subHeading="Don't miss"
            >
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts */}

            <MenuCategory items={desserts} img={dessertImg} title="desserts" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

            {/* Pizzas */}
            <MenuCategory items={pizzas} img={pizzaImg} title="pizzas" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

            {/* Salads */}
            <MenuCategory items={salads} img={saladImg} title="salads" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

            {/* Soups */}
            <MenuCategory items={soups} img={soupImg} title="soups" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

        </div>
    );
};

export default Menu;