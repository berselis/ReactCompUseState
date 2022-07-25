import React from 'react';
import Block from './QuoteComponent/Block';
import Author from './QuoteComponent/Author';
import Button from './QuoteComponent/Button';
import jsonDB from '../assets/json/quotes.json';
import jsonColorsDB from '../assets/json/colors.json';

import { useState } from 'react';

let  quotePhrase = {
  "Phrase": jsonDB[0].quote,
  "Author": jsonDB[0].author,
  "Color": jsonColorsDB[0].hex
};


const GetItemFromDB = (e) => {
  let xPhrases = Math.floor(Math.random() * jsonDB.length);
  let xColor = Math.floor(Math.random() * jsonColorsDB.length);

  const phrase = jsonDB.at(xPhrases);
  const color = jsonColorsDB.at(xColor);

  quotePhrase = {
    "Phrase": phrase.quote,
    "Author": phrase.author,
    "Color": color.hex
  };

  return quotePhrase;

}


const Box = () => {
  let [quoteInstance, setQuoteInstance] = useState(quotePhrase);

  const ChangePhrases = () => {
    setQuoteInstance(GetItemFromDB());
  }



  return (
    <div className='layout' style={{background:quotePhrase.Color}}>
      <figure className="text-end">
        <Block fontColor={quotePhrase.Color} phrase={quotePhrase.Phrase} />
        <Author fontColor={quotePhrase.Color} objAuthor={quotePhrase.Author} />
        <Button fontColor={quotePhrase.Color} eventClick={ChangePhrases} />
      </figure>
    </div>
  )
}

export default Box;

