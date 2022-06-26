import styled from "styled-components";

export const NotFoundStyled = styled.body`
    margin:0px;
    padding:0px;
    width: 100vw;
    height: 100vh;
    color:white;
    overflow: hidden;

    /* ff 3.6+ */
    background:-moz-linear-gradient(90deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%); 

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(90deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%);

    /* opera 11.10+ */
    background:-o-linear-gradient(90deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000ff', endColorstr='#EE82EE', GradientType=0 );

    /* ie 10+ */
    background:-ms-linear-gradient(90deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%);

    /* global 94%+ browsers support */
    background:linear-gradient(90deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%);

    h2{
        font-size: 90px;
        text-align: center;
        font-family: "Inter",sans-serif;
        letter-spacing: 3px;
    }

    .wrapper{
        width:170px;
        margin: auto;
    }

    .btn{
        outline: 2px solid white;
        font-size: 20px;
        font-family: "Inter",sans-serif;
    }

    .home{
        text-decoration: none;
    }

    h3{
        text-align: center;
        color:white;
        font-size:30px;
    }

    .login-msg{
        display: none;
    }


    @media only screen and (max-width: 180px){

        .error-msg{
            margin-top:65%;
        }

        .login-msg{
            display: flex;
            font-size:15px;
        }

        
        h2{
            font-size: 20px;
        }

        .wrapper{
           display: none;
        }

        h3{
            font-size:10px;
        }
    }

   

`