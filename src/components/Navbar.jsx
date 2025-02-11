import Searchbar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Searchbar/>
            </div>
            <div className="navbar__container">
                <button className="btn btn--primary">HOME</button>
                <button className="btn btn--primary">
                    <FontAwesomeIcon className="icon" icon={faPlus} transform="grow-15"  />
                    PRODUTO
                </button>
                
            </div>
        </nav>
    );
  }