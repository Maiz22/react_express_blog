import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    //define our article state
    const [articles, setArticle] = useState([])

    //define our axios fetch inside use effect
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const url = 'http://localhost/5000/api/v1/articles'
                const response = await axios.get(url)
                console.log(response.data)
                setArticle(response.data)
            } catch (error) {
                console.log('Error fetching article data:', error)
            }
        }
        //call the fetach article function
        fetchArticle()
    }, [])

    return (
        <div className="container">
            <div className="content">
                <h1>New articles</h1>
                <p>Browse threw the newest articles.</p>
                <ul className="all-articles">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <li key={article.id}>{article.title}</li>
                        ))
                    ) : (
                        <li className="no-articles">
                            Currently there are no new articles.
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Home
