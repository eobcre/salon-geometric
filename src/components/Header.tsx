import { useState } from 'react';

import { navData } from '../data/navData';

import { Icon } from '@iconify/react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className='bg-blue w-full'>
      <nav className='p-4'>
        <button onClick={handleClickOpen} className='md:hidden'>
          {open ? (
            <Icon
              icon='mingcute:close-fill'
              className='text-orange text-[22px]'
            />
          ) : (
            <Icon
              icon='fontisto:nav-icon-grid-a'
              className='text-orange text-[22px]'
            />
          )}
        </button>

        <div
          className={`flex justify-center p-10 md:p-0 md:block ${
            open ? 'block' : 'hidden'
          }`}
        >
          <ul className='grid grid-cols-2 place-items-center gap-4 md:flex justify-center'>
            {navData.map((nav) => (
              <li
                id={nav.id}
                className='font-main text-ivory text-xl hover:text-orange p-3 md:mr-4 md:p-0'
              >
                <a href={nav.link}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
