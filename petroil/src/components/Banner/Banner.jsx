import banner from '../../assets/banner.png'

export default function Banner() {
    return (
      <div style={{backgroundImage:`url(${banner})`}} className=" bg-cover bg-no-repeat w-full py-[257px] relative">
        <div className="absolute inset-0 bg-[#00000099]" />
        <div className='max-w-[1140px] mx-auto relative z-10'>
            <h1 className='max-w-[920px] text-white font-bold text-7xl mb-7'>We exist since 1975 on the oil and gas industry.</h1>
            <button className='bg-[#F40404] py-[13px] px-10 text-white font-semibold'>LEARN MORE</button>
        </div>
      </div>
    )
  }
  
