import { useState } from 'react'
import axios from 'axios'
import MarkdownRenderer from '../MarkdownRenderer'

const New = () => {
    //state var articles
    const [article, setArticle] = useState('')

    //handling text input change
    const handleChange = (event) => {
        setArticle(event.target.value)
    }

    //handling form submit
    const handleSubmit = async (event) => {
        //prevent default submit behavior
        console.log(article)
        event.preventDefault()
        try {
            const url = 'http://localhost:5000/api/v1/articles/new'
            const response = await axios.post(url, { content: article })
            console.log(response)
        } catch (error) {
            console.log('Error during saving article:', error)
        }
    }

    return (
        <>
            <div className="form-container">
                <div className="container">
                    <div className="content">
                        <div className="form-container-inner">
                            <form onSubmit={handleSubmit}>
                                <textarea
                                    className="markdown-input"
                                    autoFocus="true"
                                    rows={6}
                                    name=""
                                    id=""
                                    placeholder="Enter your article using Markdown here. Your H1 heading (#) will be used as the articles title."
                                    onChange={handleChange}
                                ></textarea>
                                <div>
                                    <label htmlFor="image">Add image</label>
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        name="image"
                                        id="image"
                                        style={{ display: 'none' }}
                                    />
                                    <input
                                        type="submit"
                                        value="Save Article"
                                        className="submit-btn "
                                    />
                                    <p>
                                        You can find a Markdown cheat sheet{' '}
                                        <a
                                            className="std-link"
                                            href="https://www.markdownguide.org/cheat-sheet/"
                                        >
                                            here
                                        </a>
                                        .
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="markdown-output-container">
                <div className="container">
                    <div className="content markdown-output">
                        {<MarkdownRenderer markdownText={article} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default New
