import { navData } from '../data/navData';

const Header: React.FC = () => {
  return (
    <header className='bg-blue'>
      <nav>
        <ul className='flex justify-center'>
          {navData.map((nav) => (
            <li
              id={nav.id}
              className='font-main text-ivory text-xl p-4 hover:text-orange'
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
