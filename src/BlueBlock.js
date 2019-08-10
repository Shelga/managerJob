import React from 'react';
import './BlueBlock.css';
import circularParts from './static/circularParts.svg';
import plus from './static/plus.svg';

function BlueBlock() {
    return (
        <div className="blueBlock">
            <div className="firstPart">
                <img className="circularParts" src={circularParts}></img>
                <h1>Manager for Job</h1>
            </div>
            <div className="secondPart">
                <h2>Choose the category</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in congue orci.<br />see more</p>
                <div className="threeImg">
                    <div className="creativeImg"></div>
                    <div className="clercImg"></div>
                    <div className="plusImg"></div>
                    <div className="textUnderImg">
                    <p>Creative</p>
                    <p>Clerc</p>
                    </div>
                </div>
            </div>
            <div className="thirdPart">
                <h2>Recommended</h2>
                <p className="borderTop">Ut sollicitudin nibh ex, et mattis arcu vestibulum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed suscipit enim, vel tincidunt lorem. </p>
                <button className="seeJob">See Jobs</button>

            </div>
        </div>
    );
}

export default BlueBlock;