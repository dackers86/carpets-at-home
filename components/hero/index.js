import React from 'react'
import { Image } from 'semantic-ui-react'

class HeroImage extends React.Component {

    render() {
        return (
            <div>
                <Image style={Styles.FullBackgroundImage}
                       src='https://s-media-cache-ak0.pinimg.com/564x/37/fc/a1/37fca155dc03aa42529f646bb35a9ce9.jpg'
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