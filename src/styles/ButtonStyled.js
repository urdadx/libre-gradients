import styled from "styled-components";


export const Button = styled.button`
    outline:none;
    border:none;
    background:${({ background }) => background || 'rgb(124, 65, 255)'}; ;
    width:${({ width }) => width || '140px'};
    text-align: center;
    font-family: "Inter",sans-serif;
    font-size: 17px;
    font-weight: 600;
    height:${({ height }) => height || '48px'};
    border-radius: 8px;
    color:${({ color }) => color || '#fff'}; 
    font-family:"Inter",sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    cursor: pointer;
    align-items: center;

`