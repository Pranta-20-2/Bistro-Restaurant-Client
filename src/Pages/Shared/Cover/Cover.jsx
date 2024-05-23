import { Parallax } from 'react-parallax';
const Cover = ({ img, title, desc }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50}}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero md:h-[600px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-[700px] bg-[#151515B2] bg-opacity-60 text-white p-14">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{desc}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;