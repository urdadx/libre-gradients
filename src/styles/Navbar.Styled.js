import styled from "styled-components";


export const NavbarStyled = styled.section`

    margin:0px;
    padding:0px;
    width:100vw;
    position: fixed;
    z-index: 1000;

    .navbar{
        display: flex;
        flex-direction: row;
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
        cursor: pointer;
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
        width:400px;
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
        gap:2.5em;

    }

    .user{
        width:30px;
        height: 30px;
        border-radius: 1000px;
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
        margin-right: 20px;
        
    }


    .icon-alert{
        display: none;
        width: 70px;
        max-width: fit-content;
        padding:5px;
        background-color: black;
        color:white;
        position: absolute;
        font-family: "Inter",sans-serif;
        margin:10px auto;
        border-radius: 4px;
        z-index: 9999;
    }
    .icon-alert > small{
        font-size:14px;
        text-align: center;
        
    }

    .fork{
        text-decoration: none;
        color:black
    }


    .bk-parent:hover{
       .icon-alert{
            display: block;
       }
    }

    .hidden-bookmark{
        display: none;
    }

    .hidden-logo-name{
        display: none;
    }

    @media  only screen and (max-width:768px){
        .navbar{
            margin: 0px;
            padding:0;
            width: 100vw;
        }

        .hidden-bookmark{
            display: flex;
            padding:20px;
        }

        .actions{
            gap:30px;
            display: none;
        }

        .search-bar{
            width:160px;
            font-size: 15px;
            padding:5px;
        }

        .auth{
            display: none;
        }

        .logo-name{
            display: none;
        }

        .hidden-logo-name{
          font-size: 27px;
          display: block;
          letter-spacing: 1px;
        }

        .logo{
            width:20px;
            height:20px;
        }

    

        

    }
`