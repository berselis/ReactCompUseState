import React from 'react'

const Block = ({phrase, fontColor}) => {
    return (
        <blockquote className="blockquote">
            <i style={{color:fontColor}} className="bi bi-quote"></i>
            <p style={{color:fontColor}}>{phrase}</p>
        </blockquote>
    )
}

export default Block