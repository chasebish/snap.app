/* global alert */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { imageActions } from '../constants'
import { ImageService } from '../services'

class ImageListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.ImageService = new ImageService()
    }

    componentDidMount() {
        this.ImageService.getRandomImages()
            .then(images => {
                if (images.error === true) {
                    alert('Error retrieving images.  Rate limit likely hit.')
                }
                else {
                    this.props.setImages(images)
                }
            })
            .catch(() => console.error('rate limit'))
    }

    render() {
        return (
            <div>
                <h4 className='mt-2'>Images</h4>
                <div className='row'>
                    {this.renderImages(this.props.images)}
                </div>
            </div>
        )
    }

    renderImages = images => {
        let result = []
        for (let image of images) {
            const imgObj = (
                <div key={image.id} className='m-2 card'>
                    <img alt={image.description} src={image.urls.thumb}></img>
                    <div className='card-body'>
                        <a style={{display: 'table-cell'}} href={`https://unsplash.com/@${image.user.username}`}>
                            <h5>{image.user.username}</h5>
                        </a>
                    </div>
                </div>
            )
            result.push(imgObj)
        }
        return result
    }

}

ImageListComponent.propTypes = {
    images: PropTypes.array,
    setImages: PropTypes.func
}


const mapStateToProps = state => {
    return {
        images: state.ImageReducer.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: (images) => dispatch({ type: imageActions.SET_IMAGES, images })
    }
}

const ImageList = connect(mapStateToProps, mapDispatchToProps)(ImageListComponent)

export default ImageList