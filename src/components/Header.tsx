import { navData } from '../data/navData';

const Header: React.FC = () => {
  return (
    <header className='bg-[#5173B4]'>
      <nav>
        <ul className='flex justify-center'>
          {navData.map((nav) => (
            <li
              id={nav.id}
              className='font-nav text-[#EDE6D4] text-xl p-4 hover:text-[#E58D05]'
            >
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
