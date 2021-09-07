import React, { KeyboardEvent, useContext }  from 'react';
import Board from '../../organisms/Board';
import Header from '../../organisms/Header';
import { GameContainer } from './styles';
import GameContext from "../../../context/GameContext/context";
import MoveDirectionType from '../../../helpers/enum/MoveDirectionType';
import GAME_SETTINGS from '../../../gameSettings';
import GameOverDialog from '../../molecules/GameOverDialog';
const { width, height } = GAME_SETTINGS.gameResolution;
const Game = () => {
    const { changeDirection } = useContext(GameContext);
    
    const handleGame = (e: KeyboardEvent) => {
        switch(e.code){
            case 'ArrowDown':{
                changeDirection(MoveDirectionType.BOTTOM);
                break;
            }
            case 'ArrowUp':{
                changeDirection(MoveDirectionType.TOP);
                break;
            }
            case 'ArrowRight':{
                changeDirection(MoveDirectionType.RIGHT);
                break;
            }
            case 'ArrowLeft':{
                changeDirection(MoveDirectionType.LEFT);
                break;
            }    
        }
    };

    return (
        <GameContainer
            className="nes-container with-title"
            role="button"
            tabIndex={0}
            onKeyUp={handleGame}
            onKeyDown={()=>{}}
            style={{width}}
        >
            <Header/>
            <Board/>
            <GameOverDialog/>
        </GameContainer>
    );
};

export default Game;