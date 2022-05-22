import styled from "styled-components";

interface Props {
    player?:boolean
}
export const Container = styled.div`
    background-color: rgb(0,0,0,0.5);
    height:100%;
    width:100%;
    display:flex;
    position:absolute;
    align-items:center;
    justify-content:center;
`
export const WinDivStyle = styled.div`
    height:fit-content;
    padding: 0 0 20px 0;
    background-color:#27404d;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const WinStyle = styled.p<Props>`
    font-weight:800;
    color: white;
    font-size:45px;
    font-family: Roboto, sans-serif;
`
export const RowStyle = styled.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    font-family: Roboto, sans-serif;
    color: white;
    font-weight: bold;
`
