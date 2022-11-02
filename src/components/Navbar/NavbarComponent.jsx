import './navbarComponent.css';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
        <header>
            <nav>
                <h1>Task</h1>
                <ul>
                    <li>
                        <Link to="/">Pagination</Link>
                    </li>
                    <li>
                        <Link to="lazy-loading">Lazy Loading</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavbarComponent