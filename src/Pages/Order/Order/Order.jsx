import { useState } from 'react';
import orderImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderItem from '../OrderItem/OrderItem';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Order = () => {
    const categories = ['salads', 'pizzas', 'soups', 'desserts', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title="OUR SHOP" desc="Would you like to try a dish?"></Cover>
            <div className=' my-10 text-center uppercase'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderItem order={salads}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem order={pizzas}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem order={soups}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem order={desserts}></OrderItem>
                    </TabPanel>

                    <TabPanel>
                        <OrderItem order={drinks}></OrderItem>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;