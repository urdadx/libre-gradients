import styled from "styled-components";


export const HomeStyled = styled.div`

    
   display: grid;
   grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr ;     

   .main{
        width:340px;
        margin:0.25rem auto;
        padding:10px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr ;
        gap:25px;

   }

   .wrapper{
     width:100%;
   }

   .sorted-link{
     text-decoration: none;
     color:white;
   }

   .saved{
    
     color:#24306d;
     width:340px;
     margin:3em auto;
     padding:20px;
     display: grid;
     grid-template-rows: 1fr ;
     grid-template-columns: 1fr ;
     gap:25px;
     margin-bottom: 0px;
     font-size: 30px;
}

   .category{
     width:340px;
     margin:6em auto;
     padding:20px;
     display: grid;
     grid-template-rows: 1fr;
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
     gap:25px;
     margin-bottom: 0px;
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