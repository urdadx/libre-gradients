import { HomeStyled } from "../styles/HomeStyled";
import { IndieStyled } from "../styles/IndieStyled";
import AceEditor from "react-ace";
import { Button } from "../styles/ButtonStyled";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast"

import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { copyCode } from "../utils/index.utils";
import { addBookmark } from "../utils/index.utils";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import Spinner from "./Spinner";

const IndieColor = () => {

    const [gradients, setGradients] = useState([]);
    const [loading, setIsLoading] = useState(false)
    const { name } = useParams();

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    
    const comingSoon = () => {
        toast('Feature not available yet', {
            icon: '⏳️',
          });
    }
    useEffect(() => {
        setGradients(colorGradients)
        setIsLoading(false)
        scrollTop()
    }, [])

    return ( 
        <>

        <HomeStyled>
            <IndieStyled>
                {
                    !loading && gradients.length !== 0 ?
                    // eslint-disable-next-line
                    gradients.map((gradient) =>  { 
                        if(gradient.name === name){

                            return <>
                             <div className="wrapper res">  
                            <div 
                            style={{
                                background: `linear-gradient(to left, ${gradient.colors[0]}, ${gradient.colors[1]})`,
                            }}
                            className="gradient">
                                <div className="code_wrapper">
                                    {
                                        gradient.colors.map((color) => {
                                           return <span style={{color:`${color}`, padding:"7px"}}>{color}</span>
                                        })
                                    }
                                    <div className="code">
                                    <AceEditor
                                        mode="css"
                                        theme="solarized_dark"
                                        name="UNIQUE_ID_OF_DIV"
                                        editorProps={{ $blockScrolling: true }}
                                        setOptions={{
                                        enableBasicAutocompletion: false,
                                        enableLiveAutocompletion: false,
                                        enableSnippets: false,
                                        fontSize:"20px",
                                        }}
                                        width="50rem"
                                        height="180px"
                                        value={`background: ${gradient.colors[0]};\nbackground: -webkit-linear-gradient(to left, ${gradient.colors[0]} ${gradient.colors[1]}  ${ gradient.colors[2] ? gradient.colors[2] : ""}); \nbackground: linear-gradient(to left, ${gradient.colors[0]} ${gradient.colors[1]} ${ gradient.colors[2] ? gradient.colors[2] : "" });`}
                                        className="editor"
                                    />
                                    </div>
                                    <div className="actions">
                                        <Button onClick={() => copyCode(gradient.colors)}
                                            width="170px" color="black" background="#DCDEE2">
                                            Copy code <Icon icon="bi:code-slash" inline={true} width="20" height="20" />
                                        </Button>
                                        <Button onClick={() => addBookmark(name, gradient.colors)}
                                             width="170px"  color="black" background="#DCDEE2" >
                                            Bookmark <Icon icon="carbon:bookmark-add" inline={true} width="20" height="20" />
                                        </Button>
                                        <Button width="170px" onClick={comingSoon}
                                                color="black" background="#DCDEE2">
                                            Download <Icon icon="carbon:download" width="20" height="20" inline={true} />
                                        </Button>

                                    </div>
                                </div>
                            </div>
            
                        </div>
                   
                              
                                </>
                        }
                    }) : <div className="loader"> 
                            <Spinner />
                        </div>
                }

                <section className="hidden">
                    <div className="after">
                        <Button color="black" background="#DCDEE2" >
                            <Icon icon="bi:code-slash" inline={true} width="20" height="20" />
                            Copy Color</Button>
                        <Button color="black" background="#DCDEE2">
                            <Icon icon="carbon:bookmark-add" inline={true} width="20" height="20" />
                            Bookmark</Button>
                    </div>
                </section>

        
             
  
            </IndieStyled>

        </HomeStyled>
        </>
     );
}
 
export default IndieColor;