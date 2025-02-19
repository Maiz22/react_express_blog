import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">ExpressReactBlog</div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className="nav-link">
                                New Articles
                            </Link>
                        </li>
                        <li>
                            <Link to="/new" className="nav-link">
                                Create Article
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/join" className="nav-button">
                                Join free
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
