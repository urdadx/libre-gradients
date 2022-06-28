import styled from "styled-components";


export const Button = styled.button`
    border:1px solid rgb(124, 65, 255);
    outline:none;
    background:${({ background }) => background || 'rgb(124, 65, 255)'}; ;
    width:${({ width }) => width || '140px'};
    text-align: center;
    font-family: "Firacode";
    font-size: 17px;
    font-weight:${({ weight }) => weight || '600'};
    height:${({ height }) => height || '48px'};
    border-radius: 8px;
    color:${({ color }) => color || '#fff'}; 
    font-family:"Inter",sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap:5px;
    align-items: center;

    .btn-img{
        width:20px;
        height:20px;
        border-radius: 100px;
    }
    

`