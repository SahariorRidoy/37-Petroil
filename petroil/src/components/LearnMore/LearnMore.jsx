import learnMore from '../../assets/learnmoreDockYeard.png'
export default function LearnMore() {
  return (
   <div className='bg-[#F0F0F0]'>
     <div className="max-w-[1140px] mx-auto flex py-[136px]">
<h2 className='bg-[#F40404] px-[77px] py-[100px] font-bold text-white text-4xl'>Learn more <br /> about our company</h2>
<div style={{backgroundImage:`url(${learnMore})`}} className='bg-cover bg-no-repeat h-full w-full py-[152px] flex justify-center'>
    <button className='bg-white text-[#F40404] font-semibold px-7 py-3'>Learn More</button>
</div>
    </div>
   </div>
  )
}
