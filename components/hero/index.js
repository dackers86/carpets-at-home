import React from 'react'
import { Image } from 'semantic-ui-react'

class HeroImage extends React.Component {

    render() {
        return (
            <div>
                <Image style={Styles.FullBackgroundImage}
                       src='http://www.baileyandtaylor.com/popups/pop4.jpg'
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
        zIndex: -1,
    }
}

export default HeroImage