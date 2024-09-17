import React from 'react';

import GameBoard from './GameBoard/GameBoard';
const GamePage: React.FC = () => {
  return (
    <div>
      {/* <div className='relative left-[50px] flex flex-row gap-x-1'>
        <img src={tile_desert} alt="tile_desert" width={100} height={100}/>
        <img src={tile_field} alt="tile_desert" width={100} height={100}/>
        <img src={tile_forest} alt="tile_desert" width={100} height={100}/>
      </div>
      <div className='flex flex-row gap-x-1 mt-[-20px]'>
        <img src={tile_desert} alt="tile_desert" width={100} height={100}/>
        <img src={tile_field} alt="tile_desert" width={100} height={100}/>
        <img src={tile_forest} alt="tile_desert" width={100} height={100}/>
        <img src={tile_forest} alt="tile_desert" width={100} height={100}/>
      </div> */}
      <GameBoard></GameBoard>
    </div> 
  );
}

export default GamePage;
