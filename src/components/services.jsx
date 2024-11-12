import bag from "/bag.png";
import medal from "/medal.png";
import packagee from "/package.png";

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-[#FFFFFF] shadow-2xl rounded-full z-10">
                <img src={packagee} alt="fastest delivery image" className="" />
                </div>
                <div>
                <h5 className="text-xl text-black font-semibold uppercase">Fast Delivery</h5>
                <p className="font-medium">Within 30 minutes</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-4 bg-[#FFFFFF] shadow-2xl rounded-full z-10">
                <img src={medal} alt="fastest delivery image" className="" />
                </div>
                <div>
                <h5 className="text-xl text-black font-semibold uppercase">absolute dining</h5>
                <p className="font-medium">Best buffet restaurant</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-4 bg-[#FFFFFF] shadow-2xl rounded-full z-10">
                <img src={bag} alt="fastest delivery image" className="" />
                </div>
                <div>
                <h5 className="text-xl text-black font-semibold uppercase">pickup delivery</h5>
                <p className="font-medium">Grab your food order</p>
                </div>
            </div>

            </div>
        </section>
    );
};

export default Services;