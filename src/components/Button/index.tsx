import React from "react";
import * as S from './style'

interface Props {
    children: React.ReactNode
    onClick: (e:any) => void
    color?: 'primary' | 'basic'
}
const Button = ({ children, onClick, color }: Props) => {

    return (
        <S.ButtonStyle color={color} onClick={onClick}>
            {children}
        </S.ButtonStyle>
    )

}

export default Button