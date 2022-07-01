import styled from "styled-components";


export const ModalStyled = styled.section`



 .header{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(215, 220, 225);
        padding:1px;
        align-items: center;
    }

    .header_title{
        font-weight:600;
        font-size: 20px;
        font-family: "Inter", sans-serif;
        text-align: center;
        color: #0a0b0d;
    }

    .header_title_share{
        font-weight:600;
        font-size: 14px;
        font-family: "Inter", sans-serif;
        text-align: center;
        color: #0a0b0d;
    }

    .img{
        width:30px;
        height:30px;
    }

    .social-div {
        display: flex; 
        align-items: center;
        border-bottom:1px solid #eee;
        margin-top:0.735rem;
        width:100%;
        height:55px;
        text-decoration: none;
        color:black;
        cursor: pointer;
        border-radius:3px;
        padding-left:10px;
    }

    .social-div:hover{
        background-color: #F5F6F8;
        border-radius: 4px;
    }

    .header_title_wrapper{
        width:450px;
        margin:auto;
        padding:0px;
    }

    .close-btn{
        text-decoration: none;
        color:grey;
    }

    .image-upload{
        width:100%;
        display: grid; 
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        padding:5px 20px;
        
    }

    .image-upload > div{
        height:100%;
        padding:2px;

    }

    img{
        width:60px;
        height:60px;
        margin:auto;
    }

    p{
        text-align: center;
        padding:2px;    
    }

    .form-container{
        padding:20px;
    }

    .form-container > p{
        text-align: initial;
        font-family: "Inter",sans-serif;
        font-size:16px;
        margin-top:1px;
    }

     input{
        display: block;
        position: relative;
        border: 0px;
        border-radius: 4px;
        outline: 1px solid #616364;
        width: 95%;
        font-family: "Inter",sans-serif;
        font-size: 16px;
        margin-bottom: 1.2rem;
        padding:15px;
    }

    .btn-div{
        margin-top:1.5rem;
        display: flex;
        justify-content: center;
    }

    /* NEW CSS */

    .result{
        border-left: 1px solid grey;
    }

    .upload-field{
        width:400px;
        margin: auto;
    }

    p{
        text-align: center;
        font-size: 20px;
        font-family: "Raleway",sans-serif;
    }

    .loader{
        width:100px;
        margin:4.5rem auto;
    }

    .color{
        width:50px;
        height:50px;
        border-radius: 1000px;
        cursor: pointer;
    }   

    .pallette-div{
        display: flex;
        gap:30px;
        margin-top:1rem;
        
    }

    .colors{
        display: flex;
        justify-content: center;
        gap:20px;
        margin-top:5rem;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
        border-radius: 8px;
        margin-top:1rem;
        margin-left:7rem;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .upload-btn-wrapper input[type=file]{
        background-color:rgb(128, 133, 237);
    }

    .sample-image > img{
        width:400px;
        height:250px;
        border-radius: 8px;
    }

    .editor{
        border-radius: 5px;
        overflow: hidden;
    }


    .sample-image{
        border-radius: 8px;
        
    }

    .login-alert{
        text-align: center;
        font-size:27px;
        font-family: "Inter",sans-serif;
        margin:4rem auto;
        color: #c84e89;
        color: -webkit-linear-gradient(to left, #c84e89 #F15F79  ) ;
        color: linear-gradient(to left, #c84e89 #F15F79 )
    }

    .modal-sign-in{
        margin:3rem auto;
        width:120px;
    }



 


`