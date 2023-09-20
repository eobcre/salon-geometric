import { navData } from '../data/navData';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {navData.map((nav) => (
            <li id={nav.id}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
