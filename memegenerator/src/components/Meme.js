import React, {useState} from 'react';
import memesData from '../data/memesData'

export default function Meme() {
    
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")

    const[meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memesData)
    function getMemeImage(){
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
    <main>
        <form>
            <div className='row'>
                <div className="col-lg-6 form--input">
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Top Text" />
                </div>
                <div className='col-lg-6 form--input'>
                    <input type="text" className="form-control" placeholder="Bottom Text"/>
                </div>
            </div>
        </form>
        <div className='row'>
                <button className="form--btn text-center" onClick={getMemeImage}>Get a new Image <i className='material-icons glyph-top'>face</i></button>
        </div>
        <img src={meme.randomImage} alt="" className='mx-auto d-block meme--image'/>
    </main>
  );
}
