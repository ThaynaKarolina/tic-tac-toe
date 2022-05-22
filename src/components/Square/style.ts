import styled, {css} from "styled-components";

interface Props {
    item?:string
    bgColor?:  'primary' | 'secundary' |  'grey'
    display?:string
}

export const Container = styled.div`
    display:flex;
`

export const SquareStyle = styled.div<Props>`
    background: #27404d;
    height: 5rem;
    width: 5rem;
    display:flex;
    cursor:pointer;
    font-size: 3rem;
    align-items:center;
    justify-content:center;
    box-shadow: -1px 4px 0px 0px rgba(18, 35, 44, 1);
    border-radius:5px;

    p { 
        font-family: Arial, Helvetica, sans-serif;
        font-weight:900;
        ${({item}) => `
        color:${item === 'X' ? '#f2b238' : '#2aa8a5'};
    `}
    }

`

export const BoardStyle = styled.div`
    display:grid;
    grid-template-columns: repeat(3, auto);
    align-items:center;
    justify-content:center;
    grid-gap:10px;   
`
export const ButtonStyle = styled.button<Props>`
${({bgColor, display}) => `
    width:100%;
    height:fit-content;
    padding: 8px 0;
    align-items:center;
    justify-content:center;
    background-color: ${bgColor === 'primary' ? '#2aa8a5' : bgColor === 'secundary' ? '#f2b238' : '#f2b23'};
    display: ${display};
    border:none;
    font-family: Arial, Helvetica, sans-serif;
    border-radius:5px;
    box-shadow: ${bgColor === 'secundary' ? '-1px 2px 0 0 #8d6926' : '-1px 2px 0px 0px RGB(99, 120, 131)'};
`}`

export const TurnStyle = styled.button`
    height:fit-content;   
    width:100%;
    align-items:center;
    justify-content:center;
    background-color: #27404d;
    color: #a8bec9;
    font-family: Arial, Helvetica, sans-serif;
    border-radius:5px;
    font-size:13px;
    border:none;
    font-weight:bold;
    box-shadow: -1px 2px 0px 0px rgba(18, 35, 44, 1);
`

export const X_O = styled.div<Props>`
    display:flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight:900;
    font-size: 25px;
    color: #2aa8a5;
    ${({item}) => item === 'X' &&` 
        color:#f2b238;
        margin-right:5px;
    `}
`