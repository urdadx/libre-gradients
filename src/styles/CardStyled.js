import styled from "styled-components";


export const CardStyled = styled.div`

    .card-wrapper{
        width:310px;
        height:280px;
        border:1px solid #eee;
        border-radius: 5px;
        box-shadow: 0 10px 40px -10px rgb(0 64 128 / 10%);
        cursor: pointer;

    }

    .actions{
        display: flex;
        gap:20px;
    }

    .gradient{
        border-radius: 5px;
        width:280px;
        margin:17px auto;
        height:200px;
        background: #6CD4FF;  
        background: -webkit-linear-gradient(to left, #6CD4FF, #8B80F9);
        background: linear-gradient(to left, #6CD4FF, #8B80F9); 
    }

    .colors{
        width:220px;
        display: flex;
        gap:10px;
        padding-left:10px;
    }

    ion-icon{
        font-size: 25px;
        color:grey;
        font-weight: bold;
    }

    .indie-colors{
        border-radius: 1000px;
        width:25px;
        height:25px;
    }

    .icons{
        display: flex;
        gap:15px;
        width:85px;
    }

    .name{
        text-align: center;
        margin-top:10px;
        font-weight: 400;
        font-size:17px;
        font-family: "Inter",sans-serif;
        color:white;
        opacity: 0;
    }

    /* .gradient:hover{
        .name{
            opacity: 1;
        }
    } */



    

`