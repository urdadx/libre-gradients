import styled from "styled-components";


export const CardStyled = styled.div`

    .card-wrapper{
        width:310px;
        height:280px;
        border:1px solid #eee;
        border-radius: 5px;
        box-shadow: 0 10px 40px -10px rgb(0 64 128 / 10%);
        cursor: pointer;
        margin-bottom:15px;

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
        font-weight: 500;
        font-size:20px;
        font-family: "Inter",sans-serif;
        color:white;
        opacity: 0;
        padding-top:30%;
    }

    .gradient:hover{
        .name{
            opacity: 1;
        }
    }



    

`