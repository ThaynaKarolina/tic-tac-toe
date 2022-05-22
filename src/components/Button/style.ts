import styled from "styled-components";

interface ButtonProps {
    color?: 'primary' | 'basic'
}

export const ButtonStyle = styled.button<ButtonProps>`
${({color}) => `
width:fit-content;
padding: 0 15px 0 15px;
height:35px;
margin-right:10px;
align-items:center;
justify-content:center;
background-color: ${color === 'basic' ? '#a8bec9' : '#f0b437'};
border:none;
border-radius:5px;
color:#172a33;
font-weight:bold;
font-family:Roboto, sans-serif;
box-shadow: ${color === 'basic' ? '-1px 2px 0px 0px RGB(99, 120, 131)' : '-1px 2px 0px 0px RGB(205, 148, 40)' };
`}`