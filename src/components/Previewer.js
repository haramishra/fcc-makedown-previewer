import React from 'react'
const marked = require('marked');

function Previewer(props) {
    marked.setOptions({breaks: true})
    return (
        <div
            id='preview'
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown)
            }}

        />

    )
}

export default Previewer
