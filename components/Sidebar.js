import { motion } from 'framer-motion';
import { sidebarLinks } from './../utils/sidebarLinks';

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Sidebar = ({ open, cycleOpen }) => {
  return (
    <>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className='fixed top-0 left-0 z-[50] h-screen w-screen backdrop-blur-lg'
          onClick={cycleOpen}
        />
      )}
      <motion.aside
        className={`fixed top-0 right-0 bottom-0 z-50 bg-gray-50 pl-4 overflow-y-auto p-5`}
        initial={{
          x: '100%',
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 float-right cursor-pointer rounded-full bg-blur p-1 select-none'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={cycleOpen}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
        <motion.ul
          className='flex flex-col gap-3 p-2 justify-center font-["Gotham"] font-semibold mt-7'
          initial='closed'
          animate='open'
          variants={sideVariants}
        >
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <motion.a
                className='rounded-lg py-2 px-4 bg-blur'
                href={link.url}
                target='_blank'
                rel='noreferrer'
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </motion.aside>
    </>
  );
};

export default Sidebar;
