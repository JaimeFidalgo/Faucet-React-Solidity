import React from 'react';
import './Introduction.css';
class Introduction extends React.Component {
    render() {




        return (
            <div className="intro-container">

                <div className="description">
                    <div><h1>Description</h1></div>
                    <div><p>This projects is a Faucet deployed in the Goerli testnet network.
                        It also serves as a great boilerplate to create advanced React + Solidity DApps since it covers important topics such us:<br></br>
                        <br></br><ul>
                            <li>Data Refreshing using React Hooks and functional components</li>
                            <li>Management of users that do not have Metamask installed</li>
                            <li>Management of users connected to the wrong network</li>
                            <li>Management of Loggings (in and out) of Metamask account</li>
                            <li>Contract loading as .json for Front-End integration</li>
                            <li>Management of secret keys through environment variables</li>
                        </ul><br></br>
                        To test the functionalities. The user must have at least a small amount of ETH from Goerli testnet in a wallet.
                        You can get a few using the following link:<br></br> <a href="https://goerlifaucet.com/">Goerli Faucet</a>.<br></br>
                        In case you do not want or cannot get some. You can watch the video down below to check out how the project works.<br></br><br></br>
                        <a href="">GitHub Repository</a>
                    </p>
                </div>
            </div>
                
            </div >

        )
    }
}
export default Introduction;