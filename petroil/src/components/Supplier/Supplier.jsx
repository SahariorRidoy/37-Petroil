import car from "../../assets/car1.png";
import pump from "../../assets/pump2.png";
import pipeline from "../../assets/pipeline3.png";
import oiltanker from "../../assets/oiltanker4.png";

export default function Supplier() {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center gap-[178px] pt-[78px] pb-[100px]">
          <h2 className="font-bold text-5xl leading-[72px] max-w-[290px]">
            The biggest supplier on the country
          </h2>
          <p className="text-[#6C6C6C]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-7">
        <img className="w-[458px] h-[426px]" src={car} alt="" />
        <img className="w-[458px] h-[426px]" src={pump} alt="" />
        <img className="w-[458px] h-[426px]" src={pipeline} alt="" />
        <img className="w-[458px] h-[426px]" src={oiltanker} alt="" />
      </div>
    </div>
  );
}
