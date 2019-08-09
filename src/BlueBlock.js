import React from 'react';
import './BlueBlock.css';
import circularParts from './static/circularParts.svg';

function BlueBlock() {
    return (
        <div className="blueBlock">
            <div className="firstPart">
                <img className="circularParts" src={circularParts}></img>
                <h1>Manager for Job</h1>
            </div>
            <div className="secondPart">
                <h2>Choose the category</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in congue orci. see more</p>
            </div>
            <div className="thirdPart">
                <h2>Recommended</h2>
                <p>Ut sollicitudin nibh ex, et mattis arcu vestibulum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed suscipit enim, vel tincidunt lorem. </p>
            </div>
        </div>
    );
}

export default BlueBlock;