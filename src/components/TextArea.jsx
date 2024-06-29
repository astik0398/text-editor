import React from 'react'
import '../styles/TextArea.css'

const TextArea = ({isItalic, selectedFont, selectedWeight}) => {
  return (
    <div>
        <textarea style={{fontFamily: selectedFont, fontWeight: selectedWeight, fontStyle: isItalic? 'italic':null}} name="" id="" placeholder='Enter your text here...' rows={20} cols={100}></textarea>
    </div>
  )
}

export default TextArea