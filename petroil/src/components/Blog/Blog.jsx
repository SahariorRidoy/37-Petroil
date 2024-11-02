import safety from "../../assets/safety-helmet1.png";
import planning from "../../assets/planning-discussion2.png";
import hangingPipe from "../../assets/hanging-pipe3.png";
import angle from '../../assets/angle-right.png'

const Blog = () => {
  return (
    <div className="bg-[#F0F0F0] py-28">
      <div className="max-w-[1140px] mx-auto  grid grid-cols-3 gap-16 mb-7">
        <div
          style={{ backgroundImage: `url(${safety})` }}
          className=" bg-cover bg-no-repeat w-full pt-20 pb-14 relative"
        >
          <div className="absolute inset-0 bg-[#00000099] " />
          <div className=" relative z-10 px-11 w-[300px] mx-auto">
            <h1 className=" text-white font-bold text-2xl mb-12 ">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </h1>
            <button className=" hover:bg-[#F40404] bg-[#ffffff80] py-3 px-6 text-white font-semibold hover:text-white hover:border-black text-xs">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${planning})` }}
          className=" bg-cover bg-no-repeat w-full pt-20 pb-14 relative"
        >
          <div className="absolute inset-0 bg-[#00000099] " />
          <div className="relative z-10 px-11 w-[300px] mx-auto">
            <h1 className=" text-white font-bold text-2xl mb-12 ">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </h1>
            <button className=" hover:bg-[#F40404] bg-[#ffffff80] py-3 px-6 text-white font-semibold hover:text-white hover:border-black text-xs">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${hangingPipe})` }}
          className=" bg-cover bg-no-repeat w-full pt-20 pb-14 relative"
        >
          <div className="absolute inset-0 bg-[#00000099] " />
          <div className="relative z-10 px-11 w-[300px] mx-auto">
            <h1 className=" text-white font-bold text-2xl mb-12  ">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </h1>
            <button className=" hover:bg-[#F40404] bg-[#ffffff80] py-3 px-6 text-white font-semibold hover:text-white hover:border-black text-xs">
              LEARN MORE
            </button>
          </div>
        </div> 
      </div>
      <div className=" flex max-w-[1140px] mx-auto justify-end">
      <button className="font-bold hover:text-[#F40404]">MORE FROM THE BLOG </button>
      <img src={angle} alt="angle-icon" />
      </div>
    </div>
  );
};

export default Blog;
