import React from "react";
import "./GameBoard.css";
import tile_desert from "../../assets/tiles/tile_desert.svg";
import tile_forest from "../../assets/tiles/tile_forest.svg";
import tile_hill from "../../assets/tiles/tile_hill.svg";
import tile_mountain from "../../assets/tiles/tile_mountain.svg";
import tile_pasture from "../../assets/tiles/tile_pasture.svg";
import tile_field from "../../assets/tiles/tile_field.svg";

import GameCell from "./GameCell";
const GameBoard: React.FC = () => {
  return (
    <div>
        <div className="flex">
            <GameCell imgSrc={tile_forest}></GameCell>
            <GameCell imgSrc={tile_forest}></GameCell>
            <GameCell imgSrc={tile_field}></GameCell>
        </div>
        <div className="flex">
            <GameCell imgSrc={tile_forest}></GameCell>
            <GameCell imgSrc={tile_forest}></GameCell>
            <GameCell imgSrc={tile_field}></GameCell>
        </div>
    </div>
  );
};

export default GameBoard;
