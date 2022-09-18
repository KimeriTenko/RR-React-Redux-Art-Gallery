import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

function ContentWrapper() {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="ContentWrapper" style={{'backgroundColor': mode.color2}}>
            <p>I don't prefer Latin for this text, simply because VSCode acts like everything is a misspelling. Quite Irritating.</p>

            <p>I'd rather save debugging for actual bugs.</p>
            
            <Photo />

            <p>What a waste of time to replace it all.</p>

            <p>I don't have to, but I will.</p>

            <p>100 words of Latin text is like a clown car that instantly opens 100 errors into your program. They're not real errors, but just like the clowns they are also not funny.</p>
            <div className="buffer"></div>
        </div>
    )
}

export default ContentWrapper;