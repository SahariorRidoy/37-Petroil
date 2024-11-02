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
                        <li className='hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg'><a href="">Home</a></li>
                        <li className='hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg'><a href="">About</a></li>
                        <li className='hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg'><a href="">Services</a></li>
                        <li className='hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg'><a href="">Gallery</a></li>
                        <li className='hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg'><a href="">Blog</a></li>
                    </ul>
                    <button className='border-2 text-center ml-32 md:ml-0 border-white px-7 py-[13px] text-white text-base font-semibold hover:bg-white hover:text-black hover:border-black'>
                        <a href="">Contact</a></button>
                

            </div>
        </div>
    </div>
  )
}
