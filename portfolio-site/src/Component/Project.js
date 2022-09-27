import React from 'react' 
import './Project.css';
import Desktop_App from './img/Desktop_App.jpeg'
import Twitter_1 from './img/Twitter_1.jpg'
import Twitter_2 from './img/Twitter_2.jpg'
const Project = () => {
    return (
        <div>
            <h1>Google News Automation</h1>
    <div className="grid-container">          
        <div className="grid-item"><iframe width="420" height="345" src="https://www.youtube.com/embed/CeTcqYXHVHA" allowfullscreen="">
        </iframe></div>
    </div>
    <h3>It is an application which sends top trending news to user’s Whats-App using automation           
    </h3>
    <h1>Twitter Sentiments Analysis</h1>
    <div className="grid-container">          
        <div className="grid-item"> <img className="responsive"src={Twitter_1} alt="Text"/></div>
        <div className="grid-item"> <img className="responsive"src={Twitter_2} alt="Text"/></div>
    </div>
    <h3>It is a Web-App which grabs the Twitter’s tweets as per the arguments given by the user and provide the sentiments about the given argument           
    </h3>
    <h1>Image Manipulation</h1>
    <div className="grid-container">          
        <div className="grid-item"> <img className="responsive"src={Desktop_App} alt="Text"/></div>
    </div>
    <h3>It is a standalone application having GUI based Image manipulation and Image to pdf converting feature.           
    </h3>
        </div>
    )
}

export default Project
