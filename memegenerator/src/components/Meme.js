import React from 'react';
import memesData from '../data/memesData'

export default function Meme() {
  
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
    <main>
        <form>
            <div className='row'>
                <div className="col-lg-6 form--input">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Top Text" />
                </div>
                <div className='col-lg-6 form--input'>
                    <input type="password" className="form-control" placeholder="Bottom Text"/>
                </div>
            </div>
        </form>
        <div className='row'>
                <button className="form--btn text-center" onClick={getMemeImage}>Get a new Image <i className='material-icons glyph-top'>face</i></button>
        </div>
    </main>
  );
}
