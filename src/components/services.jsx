// import bag from "/bag.png";
// import medal from "/medal.png";
import packagee from "/package.png";

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex gap-4">
                <div className="p-2 bg-[#FFFFFF] shadow-2xl rounded-full">
                <img src={packagee} alt="fastest delivery image" className="" />
                </div>
                <div>
                <h5 className="text-xl text-black font-semibold">Fast Delivery</h5>
                <p className="font-medium">Within 30 minutes</p>
                </div>
            </div>
        </section>
    );
};

export default Services;