import styled from "styled-components";


export const HomeStyled = styled.div`

    
   display: grid;
   grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr ;

   .main{
        width:340px;
        margin:8rem auto;
        padding:20px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap:25px;

   }

   .sort{
         width:500px;
        margin: 7rem auto;
        display: flex;
        gap:20px;
    
   }

   .loader{
        display: flex;
        width:calc(100vw - 25vw);
        margin:3rem auto;
        justify-content: center;
   }

   @media only screen and (max-width:768px){
        .main{
            display: flex;
            justify-content: center;
            flex-direction: column;
            
        }   
    }



`