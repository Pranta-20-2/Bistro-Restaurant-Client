const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" my-10 md:w-4/12 mx-auto text-center">
            <p className="text-[#D99904] text-xl mb-4">---{subHeading}---</p>
            <p className="text-3xl uppercase border-y-2 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;