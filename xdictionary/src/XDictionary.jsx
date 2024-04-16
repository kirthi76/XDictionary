import React, { useState } from 'react';

const customdictionary = [
   

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]
const XDictionary = () => {
    const [inputText, setInputText] = useState("");
    const [definition, setDefinition] = useState()
const handleChange = e=> setInputText(e.target.value);

    const handleInputClick = ()=> {
        let item = customdictionary.find(i=> i.word.toLocaleLowerCase() === inputText.toLocaleLowerCase());
        setDefinition(item ? item.meaning : "Word not found in the dictionary.");
    }

    return (
    <div>
         <h1>Dictionary App</h1>
         <input onChange={handleChange} type='text' placeholder='Search for a word...' />
    <button onClick={handleInputClick}>Search</button>
        <h4>Definition:</h4>
        <p>{definition}</p>
        </div>
    );
};

export default XDictionary;