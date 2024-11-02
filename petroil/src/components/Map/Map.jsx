import map from "../../assets/maps.png";

const Map = () => {
  return (
    <div >
      <img className="mx-auto" src={map} alt="" />
      <div className="bg-[#F40404] py-12 border-b-4 border-b-[#FFB800]">
        <div className="max-w-[1140px] mx-auto flex justify-between items-center ">
          <h2 className="font-bold text-4xl text-white">Want to join as member branch in your area?</h2>
            <button className="border-2 border-white text-white py-3 px-8 font-semibold text-center">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
