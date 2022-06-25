import styled from "styled-components";


export const HomeStyled = styled.div`
   display: grid;
   grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr;

   .main{
        width:350px;
        margin:auto;
        margin-top: 10rem;
        padding:20px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap:25px;

   }

   @media only screen and (max-width:768px){
        .main{
     
            display: flex;
            justify-content: center;
            flex-direction: column;
            
        }   
    }



`