import React from 'react';
import './Video.css';
import  MyVideo from './Faucet Goerli Demo.mp4'

class Video extends React.Component {
    render() {

        return (
            <div className="video-box">
                <video width="500" height="300" controls autoplay >
                    <source src={MyVideo} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Video;