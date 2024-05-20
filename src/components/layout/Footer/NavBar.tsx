import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='lg:w-[1140px] flex lg:gap-[120px] gap-2 px-3 mx-auto lg:mx-0 mt-5 lg:mt-0 justify-center font-custom-font'>
           
            <div className='flex flex-col gap-4 items-start text-nowrap'>
                <h4 className='lg:text-base text-sm font-bold'>Company</h4>
                <ul className='flex flex-col gap-3 lg:text-sm text-xs'>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Pricing</Link></li>
                    <li><Link href="">Jobs</Link></li>
                    <li><Link href="">Blog</Link></li>
                    <li><Link href="">Careers</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 items-start text-nowrap'>
                <h4 className='lg:text-base text-sm font-bold'>Product</h4>
                <ul className='flex flex-col gap-3 lg:text-sm text-xs'>
                    <li><Link href="">Sales software</Link></li>
                    <li><Link href="">Features</Link></li>
                    <li><Link href="">Privacy</Link></li>
                    <li><Link href="">Marketplace</Link></li>
                    <li><Link href="">Status</Link></li>
                    <li><Link href="">API</Link></li>
                </ul>
            </div>

            
            <div className='flex flex-col gap-4 items-start text-nowrap'>
                <h4 className='lg:text-base text-sm font-bold'>Discover</h4>
                <ul className='flex flex-col gap-3 lg:text-sm text-xs'>
                    <li><Link href="">Partner Program</Link></li>
                    <li><Link href="">Get our newsletter</Link></li>
                    <li><Link href="">Sales Pipeline</Link></li>
                    <li><Link href="">What is CRM?</Link></li>
                    <li><Link href="">CMR Comparison</Link></li>
                    <li><Link href="">Resources</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 items-start text-nowrap'>
                <h4 className='lg:text-base text-sm font-bold'>Help Center</h4>
                <ul className='flex flex-col gap-3 lg:text-sm text-xs'>
                    <li><Link href="">Community</Link></li>
                    <li><Link href="">Knowledge Bas</Link></li>
                    <li><Link href="">Academy</Link></li>
                    <li><Link href="">Support</Link></li>
                </ul>
            </div>

        </div>
    );
  };
  
  export default NavBar;