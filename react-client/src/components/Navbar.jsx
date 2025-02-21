import { Link } from 'react-router-dom'
import reactLogo from '../static/react48.png'
import expressLogo from '../static/express48.png'
import viteLogo from '../static/vite48.png'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <nav>
                        <div className="logo">
                            <img src={expressLogo} width={30} alt="" />
                            <img src={reactLogo} width={28} alt="" />
                            <img src={viteLogo} width={28} alt="" />
                            <span>ExpressReactBlog</span>
                        </div>
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
            </div>
        </header>
    )
}

export default Navbar
