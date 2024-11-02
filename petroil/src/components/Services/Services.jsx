import service1 from "../../assets/ServicesPipeLine1.png";
import service2 from "../../assets/servicesWelding2.png";
import service3 from "../../assets/servicesRefuel3.png";

export default function Services() {
  return (
    <div className="grid grid-cols-2">
      <div className="mr-[150px] max-w-[405px] mx-auto flex flex-col items-end justify-center">
        <h2 className="font-bold  text-[64px]">Our Services</h2>
        <p className="font-semibold text-[#6C6C6C] ml-10 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div
        style={{ backgroundImage: `url(${service1})` }}
        className=" bg-cover bg-no-repeat w-full py-[140px] relative"
      >
        <div className="absolute inset-0 bg-[#00000099]" />
        <div className="max-w-[1140px] mx-auto relative z-10 pl-[116px]">
          <h1 className=" text-white font-bold text-4xl mb-5">
            Modern natural oil and gas refineries.
          </h1>
          <button className="bg-[#F40404] py-[13px] px-10 text-white font-semibold hover:bg-white hover:text-black hover:border-black">
            LEARN MORE
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${service2})` }}
        className=" bg-cover bg-no-repeat w-full py-[140px] relative"
      >
        <div className="absolute inset-0 bg-[#00000099]" />
        <div className="max-w-[1140px] mx-auto relative z-10 pl-[116px]">
          <h1 className=" text-white font-bold text-4xl mb-5">
            Supply of national industries.
          </h1>
          <button className="bg-[#F40404] py-[13px] px-10 text-white font-semibold hover:bg-white hover:text-black hover:border-black">
            LEARN MORE
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${service3})` }}
        className=" bg-cover bg-no-repeat w-full py-[140px] relative"
      >
        <div className="absolute inset-0 bg-[#00000099] " />
        <div className="max-w-[1140px] mx-auto relative z-10 pl-[116px]">
          <h1 className=" text-white font-bold text-4xl mb-5">
            National fuel distribution and supply.
          </h1>
          <button className="bg-[#F40404] py-[13px] px-10 text-white font-semibold hover:bg-white hover:text-black hover:border-black">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
