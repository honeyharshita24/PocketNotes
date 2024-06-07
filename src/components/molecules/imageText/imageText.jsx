import React, { Component } from 'react';
import Typography1 from '../../atoms/Text/Text';
import HomePageImage from '../../atoms/HomePageImg/HomePageImg';

class ImageText extends Component {
    state = {  } 
    render() { 
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style ={{display: 'flex', justifyContent : 'center' , alignItems : 'center'}}>
                        <HomePageImage/>
                    </div>
                    <Typography1 styles ={{fontSize :'50px' , fontWeight :700 }}>Pocket Notes</Typography1>
                    <Typography1 styles ={{fontSize :'22px' , fontWeight :500 }}>Send and receive messages without keeping your phone online.{"\n"}
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</Typography1>
                </div>
            );
    }
}
 
export default ImageText;