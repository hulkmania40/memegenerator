import React, {useState} from 'react';
import memesData from '../data/memesData'
import '../Meme.css'

export default function Meme() {
    
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")

    const[meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memesData)

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]: value
        }))
    }

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
        <div className='form'>
            <div className='row'>
                <div className="col-lg-6 form--input">
                    <input type="text" className="form-control" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange} />
                </div>
                <div className='col-lg-6 form--input'>
                    <input type="text" className="form-control" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                </div>
            </div>
        </div>
        <div className='row'>
                <button className="form--btn text-center" onClick={getMemeImage}>Get a new Image <i className='material-icons glyph-top'>face</i></button>
        </div>
            {/* <img src={meme.randomImage} alt="" className='mx-auto d-block meme--image'/> */}
            <div className="meme">
                <img src={meme.randomImage} className="mx-auto d-block meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
}
