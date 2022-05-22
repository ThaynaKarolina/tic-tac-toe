import React, { useEffect } from "react";
import * as S from "./style";
import restart from '../../assets/restart.svg'

interface Props {
    clickedArray: any
    handleClick: (value: any) => void
    player: boolean
    restartGame: () => void
    winCount: { X: number, O: number, draw:number }
}

const Square = ({ clickedArray, handleClick, player, restartGame, winCount }: Props) => {
    console.log(clickedArray)

    return (
        <S.Container>
            <S.BoardStyle>
                <S.X_O>
                    <S.X_O item='X'> X </S.X_O>
                    <S.X_O> O </S.X_O>
                </S.X_O>
                <S.TurnStyle> <p> Vez de:  <b> {player ? 'X' : 'O'}</b>  </p>   </S.TurnStyle>
                <S.ButtonStyle onClick={() => restartGame()}> <img src={restart} /> </S.ButtonStyle>
                {clickedArray.map((item: any, index: number) => {
                    if (item === "") {
                        return (
                            <S.SquareStyle item={item} key={index} onClick={() => handleClick(index)}>
                                <p> {item} </p>
                            </S.SquareStyle>
                        )
                    } else {
                        return (
                            <S.SquareStyle item={item} key={index}>
                                <p> {item} </p>
                            </S.SquareStyle>
                        )
                    }
                })}
                <>
                    <S.ButtonStyle bgColor="primary" display="block">
                        <div> <b> X: </b> {winCount.X} </div>
                    </S.ButtonStyle>
                    <S.ButtonStyle bgColor="secundary" display="block">
                        <div> <b> Empates: </b> {winCount.draw} </div> 
                    </S.ButtonStyle>
                    <S.ButtonStyle bgColor="grey" display="block">
                        <div> <b> O: </b> {winCount.O} </div>
                    </S.ButtonStyle>
                </>
            </S.BoardStyle>
        </S.Container>
    )
}

export default Square