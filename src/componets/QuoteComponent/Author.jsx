import React from 'react'

const Author = ({ objAuthor, fontColor }) => {

    return (
        <figcaption className="blockquote-footer">
            <cite title="Source Title" style={{ color: fontColor }}>{objAuthor}</cite>
        </figcaption>
    )
}

export default Author