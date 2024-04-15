import React from 'react'
import backgroudVideo from './../videos/city.mp4';
import "./StartQuiz.css";

function StartQuiz() {
    return (
        <div className="video-background">
            <video autoPlay muted className='video'>
                <source src={backgroudVideo} type='video/mp4'/>            
            </video>
            <div className="content">
                <div className='gameName'>
                    <h1>modern city</h1>
                    <h2>welcome to the quiz</h2>
                </div>                
                {/* Add other content here */}
            </div>
        </div>
    )
}

export default StartQuiz
