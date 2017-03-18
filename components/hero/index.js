import React from 'react'
import { Image } from 'semantic-ui-react'

class HeroImage extends React.Component {

    render() {
        return (
            <div>
                <Image style={Styles.FullBackgroundImage}
                       src='https://thumb1.shutterstock.com/display_pic_with_logo/899620/413684080/stock-photo-interior-with-large-window-d-illustration-413684080.jpg'
                />
            </div>
        )
    };
}

const Styles = {
    FullBackgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'cover',
    }
}

export default HeroImage