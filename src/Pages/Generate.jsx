import { ModalStyled } from "../styles/ModalStyled";
import { Link } from "react-router-dom";
import { Button } from "../styles/ButtonStyled";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Palette } from "color-thief-react";
import { Icon } from "@iconify/react";
import { copyCode, SAMPLE_IMG } from "../utils/index.utils";
import { sample } from "../utils/index.utils";
import { Fade } from "react-reveal";

const Generate = ({ close }) => {

    const [image, setImage] = useState(SAMPLE_IMG)
    const [filename, setFileName] = useState("")
    const [isLoading, setLoading] = useState(false)

    const onLoad = (fileString) => {
        setImage(fileString);
        setLoading(false)
    };
    
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
    };

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        setFileName(files[0].name);
        getBase64(file);
    };

    const imgSrc = image;
    


    return ( 
        <>
            <ModalStyled>
            <div className="header">
                    <div className="header_title_wrapper">
                        <h3 className="header_title">Generate Color From Image⚡</h3>
                    </div>
                    <Link className="close-btn" to="#" onClick={close}>
                        <ion-icon size="large" name="close-outline"></ion-icon>
                    </Link>
            </div>

            <div className="image-upload">
                <Fade left>
                <div className="upload-field">
                    <p>Upload an image to generate color🔥 </p>
                    <div className="sample-image">
                        { 
                            !isLoading ? <img src={imgSrc} alt="sample" /> : 
                            <div className="loader"><TailSpin color="blue" /></div>
                        }   
                        
                    </div>
                    <div className="upload-btn-wrapper">
                        <Button>
                           Select Image
                        </Button>
                        <input onChange={onChange} type="file" name="myfile" accept="image/*" />
                    </div>
              
                </div>
                </Fade>
                <Fade right>
                <div className="result">
                    <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
                    {({ data, loading }) => {
                        if(loading) <div className="loader"><TailSpin color="blue" /></div>
                        return (
                        <>
                        <p>Color Pallettes Generated🎉</p>
                        
                        <div className="colors">
                            {
                                !loading  && data &&  data.map((color) => {
                                    return  <>
                                    
                                    <div className="color" style={{background:`${color}`}}></div>
                                    
                                    </>
                                }) 
                            }

                            {
                                !data && sample.map((color) => {
                                    return  <>
                                    
                                    <div className="color" style={{background:`${color}`}}></div>
                                    
                                    </>
                                })
                            }
                        </div>
                       
                        <div className="colors">
                            <Button 
                                onClick={() => copyCode(data)}
                                width="140px" color="black" background="#DCDEE2">
                                Copy code <Icon icon="bi:code-slash" inline={true} width="20" height="20" />
                            </Button>
                            <Button 
                                width="140px" color="black" background="#DCDEE2">
                                Bookmark <Icon icon="carbon:bookmark-add" inline={true} width="20" height="20" />
                            </Button>
                        </div>
                            <p style={{fontSize:"17px", marginTop:"30px"}}> {!filename ? "No file choosen" : filename}</p>
                        </>
                        )
                    }
                    }
                    </Palette>
                </div>
                </Fade>
            </div>
            </ModalStyled>
        </>
    );
}
 
export default Generate;