import React from 'react'
import Button from '../components/Button'
import * as S from './style'

interface Props {
    restartGame: () => void
    draw: boolean
    player: boolean
    clearHistory: () => void
    color?: 'primary' | 'basic'
}
const EndGame = ({ restartGame, draw, player, clearHistory }: Props) => {
    return (
        <S.Container>
            <S.WinDivStyle>
                <S.RowStyle>
                    {!draw && <S.WinStyle player={player}>  {player ? "Vencedor: O!" : "Vencedor: X!"}  </S.WinStyle>}
                    {draw && <S.WinStyle>   Empate!  </S.WinStyle>}
                </S.RowStyle>
                <S.RowStyle>
                    <Button color='primary' onClick={() => restartGame()}>
                        JOGAR NOVAMENTE
                    </Button>
                    <Button color='basic' onClick={() => clearHistory()}>
                        LIMPAR HISTÓRICO
                    </Button>
                </S.RowStyle>
            </S.WinDivStyle>
        </S.Container>
    )
}

export default EndGame