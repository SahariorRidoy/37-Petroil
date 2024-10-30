import logo1 from '../../assets/pertomax-logo.png'
import logo2 from '../../assets/thevron-logo2.png'
import logo3 from '../../assets/barcoo-logo3.png'
import logo4 from '../../assets/bioSool-logo4.png'

const Logos = () => {
    return (
        <div className='max-w-[1140px] mx-auto flex justify-between py-[116px]'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
    );
};

export default Logos;