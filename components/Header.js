import Image from 'next/image';
import tesla from '../public/assets/images/tesla.webp';

const Header = ({ cycleOpen }) => {
  return (
    <header className='flex justify-between fixed top-0 mx-auto z-50 px-2 sm:px-8 md:px-14 py-6 w-full font-["Gotham"] font-semibold text-sm sm:gap-0 gap-3'>
      <div>
        <Image
          className='opacity-80'
          // layout='responsive'
          src={tesla}
          width='120'
          height='28.5'
          alt='tesla'
        />
      </div>
      <div className='xl:block hidden'>
        <ul className='flex items-center justify-center'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/models'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model S
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/model3'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model 3
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/modelx'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model X
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/modely'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model Y
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/solarroof'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Solar Roof
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/solarpanels'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Solar Panels
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://shop.tesla.com'
              className='px-1 sm:px-4 py-2 transition rounded-lg bg-blur'
            >
              Shop
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/teslaaccount'
              className='px-1 sm:px-4 py-2 transition rounded-lg bg-blur'
            >
              Account
            </a>
          </li>
          <li>
            <button
              className='px-1 sm:px-4 py-2 transition rounded-lg cursor-pointer bg-blur select-none'
              onClick={cycleOpen}
            >
              Menu
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
