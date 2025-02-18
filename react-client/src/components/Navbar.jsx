const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">ExpressReactBlog</div>
                    <ul className="nav-links">
                        <li>
                            <a className="nav-link" href="#">
                                New Articles
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                Create Entry
                            </a>
                        </li>
                        <li>
                            <a className="nav-button" href="#">
                                Join free
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
