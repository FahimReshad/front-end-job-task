import Button from './shared/button';
import banner from '/banner.jpg';

const Banner = () => {
  return (
    <section className="bg-gradient-red">
      <div className="font-sans max-w-7xl max-md:max-w-md mx-auto p-4 lg:p-0">
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-8">
          <div className="max-md:order-1 z-50 relative lg:w-1/2">
            <h2 className=" text-white bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2] lg:text-7xl md:text-5xl text-3xl font-extrabold mb-4 leading-none lg:leading-[80px] uppercase lg:w-[845px] z-50 rounded">
            Taste the authentic Saudi cuisine
            </h2>
            <p className="text-white my-6 text-base leading-relaxed ">
            Among the best Saudi chefs in the world, <br /> serving  you something beyond flavor. 
            </p>
            <Button text={'Explore Menu'}/>
          </div>

          <div className="lg:h-[649px] w-full lg:w-[700px] md:h-[550px] h-[400px] flex items-center relative max-md:before:hidden before:absolute before:h-[120%] before:w-[120%] before:right-0 before:z-0">
            <img
              src={banner}
              className="rounded-md w-full h-[70%] relative object-cover"
              alt="Dining Experience"
              
            />
            <div className='absolute bottom-20 lg:bottom-24 right-4 md:right-0 lg:-right-10 bg-[#FEBF00] rounded-full w-20 h-20 flex justify-center items-center p-4
          '><p className='text-center border rounded-full border-dashed border-[#BD1F17] p-2 uppercase font-extrabold'>today offer</p></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
