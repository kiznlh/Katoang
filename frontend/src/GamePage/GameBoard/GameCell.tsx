import React from 'react';
import './GameCell.css';

type HexagonProps = {
    imgSrc: string;
    width?: number;
    height?: number;
};

const GameCell: React.FC<HexagonProps> = ({ imgSrc, width = 200, height = 200 }) => {
    return (
        <div className="hexagon" style={{ width, height }}>
            <img className="hexagon-img" src={imgSrc} alt="Hexagon" />
        </div>
    );
};

export default GameCell;