import Showdown from 'showdown'
import DOMPurify from 'dompurify'

const MarkdownRenderer = ({ markdownText }) => {
    const converter = new Showdown.Converter()
    const htmlContent = markdownText ? converter.makeHtml(markdownText) : ''

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(htmlContent),
            }}
        />
    )
}

export default MarkdownRenderer
