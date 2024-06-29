import React, { useEffect, useState } from "react";
import "../styles/FontOptions.css";
import TextArea from "./TextArea";

const FontOptions = () => {

    const [data, setData] = useState({})
    const [fontWeight, setFontWeight] = useState({})
    const [selectedFont, setSelectedFont] = useState('')
    const [selectedWeight, setSelecetdWeight] = useState('')
    const [isItalic, setIsItalic] = useState(false)

    useEffect(()=> {
        let response = fetch('https://google-fonts-api.onrender.com/fonts')
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        setData(data[0]);
    })
    }, [])

    function handleFontFamilyChange(e){
      setSelectedFont(e.target.value);

      if(data[e.target.value]){
        console.log(data[e.target.value]);
        setFontWeight(data[e.target.value])
      }
    }

    function handleFontWeight(e){
      setSelecetdWeight(e.target.value)
    }


  return (
    <>
    <div id="fontoption-div">
      <select onChange={handleFontFamilyChange} name="" id="">
        <option value="">Select Font</option>
        {Object.keys(data).map((fontName, index) => (
                    <option key={index} value={fontName}>{fontName}</option>
                ))}
      </select>

      <select onChange={handleFontWeight} name="" id="">
        <option value="">Select Font Weight</option>
        {Object.keys(fontWeight).map((weight, index) => (
                    <option key={index} value={weight}>{weight}</option>
                ))}
      </select>

      <p><b>Switch to Italic</b></p>
      <label class="switch">
        <input onClick={()=> setIsItalic(!isItalic)} type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
    <TextArea isItalic={isItalic} selectedFont={selectedFont} selectedWeight={selectedWeight}/>
    </>
  );
};

export default FontOptions;
