import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import chefService from '../../../assets/home/chef-service.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div className='my-10'>
            <SectionTitle
                subHeading={"From 11:00 am to 10:00 pm"}
                heading={"Order Online"}

            >
            </SectionTitle>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="Salads" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Pizzas" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Soups" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Desserts" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="Salads" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
            <div
                className="text-center bg-center md:h-[550px] mt-10 flex flex-col justify-center" style={{ backgroundImage: `url(${chefService})` }}
            >
                <div className=' md:h-[340px] bg-white flex flex-col justify-center md:w-[1000px] mx-auto'>
                    <h3 className=' text-4xl'>Bistro Boss</h3>
                    <p className=' md:w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
