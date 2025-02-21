import aboutImg from '../../static/jsreactexvite.png'

const About = () => {
    return (
        <>
            <div className="container about">
                <div className="content">
                    <h1 className="h-top">About</h1>
                </div>
                <div className="content-left">
                    <p>
                        This blog has been created using{' '}
                        <a className="std-link" href="https://react.dev/">
                            react.js
                        </a>{' '}
                        and{' '}
                        <a className="std-link" href="https://vite.dev/">
                            vite
                        </a>{' '}
                        in the front-end and{' '}
                        <a className="std-link" href="https://expressjs.com/">
                            express.js
                        </a>{' '}
                        in the back-end. The axios modul is used to send http
                        requests from the client to the server. The
                        react-router-dom allows routing in the react frontend.
                        Data in the backend is stored in a MongoDB using the
                        mongoose module. Using the cors module on the server we
                        allow data to be accessed from the client side. This
                        blog has been created for educational reasons only.
                    </p>
                </div>
                <div className="content-right">
                    <img src={aboutImg} alt="" width={140} />
                </div>
            </div>
        </>
    )
}

export default About
