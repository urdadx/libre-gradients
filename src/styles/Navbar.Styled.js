import styled from "styled-components";


export const NavbarStyled = styled.section`

    margin:0px;
    padding:0px;
    width:100vw;
    position: fixed;

    .navbar{
        display: flex;
        flex-direction: row;
        z-index: 0;
        background-color: #fff;
        position: fixed;
        box-shadow: 2px 0 15px rgb(35 38 38 / 13%);
        height:70px;
        width:100vw;
    }

    .navbar > div{
        width:100%;
    }

    .header{
        display: flex;
        padding:10px;
        align-items: center;
        gap:6px;
    }

    .header > .logo-name{
        font-family: 'Raleway',sans-serif;
        font-weight:bolder;
        font-size:25px;
        color:#7161E7;
    }

    .search-wrapper{
        padding:10px;
    }

    .search-bar{
        border:1px solid #7161E7;
        outline:none;
        padding:7px;
        border-radius: 8px;
        width:450px;
        height:50px;
        font-size: 18px;
        font-family: "Raleway",sans-serif;
    }

    .search-bar:focus{
        border:2px solid rgb(124, 65, 255);
    }

    .bookmark{
        width:40px;
        height:40px;
    }

    .actions{
        display: flex;
        padding:20px;
        gap:35px;

    }

    ion-icon{
        font-size:30px;
        color:grey;
        cursor: pointer;
    }

    .header > img{
        width:43px;
        height:43px;
        
    }

    .auth{
        display: flex;
        gap:10px;
        padding:10px;
    }

    @media  only screen and (max-width:768px){
        .navbar{
        
        }

        .actions{
            gap:30px;
        }

        .search-wrapper{
            display: none;
        }

        .auth{
            display: none;
        }

    }
`