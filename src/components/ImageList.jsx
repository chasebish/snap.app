import React from 'react'
import { connect } from 'react-redux'

import { imageActions } from '../constants'

const ImageListComponent = () => {
    return (
        <div>
            Image Component
        </div>
    )
}



const mapStateToProps = state => {
    return {
        state: state.ImageReducer.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: (images) => dispatch({ type: imageActions.SET_IMAGES, images })
    }
}

const ImageList = connect(mapStateToProps, mapDispatchToProps)(ImageListComponent)

export default ImageList