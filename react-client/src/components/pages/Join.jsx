import messageImg from '../../static/newsletter.jpg'

const Join = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="newsletter-placeholder"></div>
                </div>
                <div className="content-left">
                    <h2>
                        Stay up to date with the latest express and react
                        articles and guides.
                    </h2>
                    <p>Sign up to the newsletter her.</p>
                    <form action="">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-entry"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="submit-btn "
                        />
                    </form>
                </div>
                <div className="content-right">
                    <img className="newsletter-img" src={messageImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Join
