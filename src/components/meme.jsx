import React, { useState } from 'React'
import img from "../assets/Troll Face.png"
import '../App.css'
import memeData from '../memesData'

export default function Meme(props) {
    let index =  Math.floor(Math.random() * 100)

    // const [meme, setMeme] = useState({
    //     topTxt: 'hi',
    //     btmTxt: 'bye',
    //     url: memeData.data.memes[index].url
    // }) 
    const[imgUrl, setImgUrl] = useState(memeData.data.memes[index].url)
    const [allMemeImgs, setAllMemeImgs] = useState(memeData)

    return (    
        <div className="meme flex">
            <div className="form flex">
                <div className="input flex">
                    <input type="text" placeholder='input1'/>
                    <input type="text" placeholder='input2'/>
                </div>
                <button 
                    onClick={() => {
                        index =  Math.floor(Math.random() * 100)
                        // setMeme((prevState) => {
                        //     return {
                        //     ...prevState,
                        //     url: memeData.data.memes[index].url
                        //     }
                        // })
                        setImgUrl(memeData.data.memes[index].url)
                    }} 
                    className="flex btn">
                    Get a new meme image 
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="img">
                <img src={imgUrl} alt="" className="disp" />
            </div>
        </div>
    )
}