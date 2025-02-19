import { useState } from 'react'
import axios from 'axios'

const New = () => {
    //state var articles
    const [articles, setArticles] = useState([])

    //handling text input change
    const handleChange = (event) => {
        setArticles(event.target.value)
    }

    //handling form submit
    const handleSubmit = async (event) => {
        //prevent default submit behavior
        event.preventDefault()
        try {
            const url = ''
            const response = await axios.post(url, articles)
            console.log(response)
        } catch (error) {
            console.log('Error during saving article:', error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Create article</h1>
                    <p>
                        Create a new article right using Markdown. You can find
                        a Markdown cheat sheet{' '}
                        <a
                            className="std-link"
                            href="https://www.markdownguide.org/cheat-sheet/"
                        >
                            here
                        </a>
                        .
                    </p>
                    <div className="form-container">
                        <form action={handleSubmit}>
                            <textarea
                                autoFocus="true"
                                rows={16}
                                name=""
                                id=""
                                placeholder="Enter your article"
                                onChange={handleChange}
                            ></textarea>
                            <div>
                                <label htmlFor="image">Select image</label>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    name="image"
                                    id="image"
                                    style={{ display: 'none' }}
                                />
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New
