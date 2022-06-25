import styled from "styled-components";

export const IndieStyled = styled.section`

    position: relative;
    height:100vh;
    margin:7rem  ;
    padding:20px;
    display: flex;
    justify-content: center;

    .wrapper{
        width:100%;
    }

    .gradient{
        position: absolute;
        height:455px;
        width: calc(100vw - 70%);
        margin:auto;
        display: block;
        z-index: 999;
        border-radius: 8px;

    }

    .editor{
        border-radius: 5px;
    }

    .actions{
        display: flex;
        width:500px;
        margin:1rem auto;
        gap:30px;
    }

    .code_wrapper{
        padding:30px;
        width:50rem;
        margin:3.5rem auto;
        height:285px;
        border-radius: 8px;
        background-color: #fff;
    }

    .code_wrapper > span{
        font-size:2.5rem;
    }






    

`