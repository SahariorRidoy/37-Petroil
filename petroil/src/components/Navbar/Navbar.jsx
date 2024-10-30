import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <div className="bg-[#F40404] py-[30px]">
        <div className="max-w-[1140px] mx-auto md:flex justify-between">
            <div>
                <img className='w-[192px] h-11' src={logo} alt="" />
            </div>

            <div className='md:flex items-center gap-[72px]'>
                
                    <ul className='md:flex text-center text-white gap-12 text-base font-semibold'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    <button className='border-2 text-center ml-32 md:ml-0 border-white px-7 py-[13px] text-white text-base font-semibold'>
                        <a href="">Contact</a></button>
                

            </div>
        </div>
    </div>
  )
}
