import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { imageActions } from '../constants'
import { ImageService } from '../services'


class NavbarComponent extends React.Component {

    constructor(props) {
        super(props)
        this.ImageService = new ImageService()
    }

    state = {
        query: ''
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <div className='navbar-brand'>snap-app</div>
                    <button type="button" className="btn btn-outline-info" onClick={this.resetImages}>New Images!</button>
                </div>
                <div className="form-inline mt-1">
                    <div className='input-group'>
                        <input value={this.state.query} onChange={this.updateQuery} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button onClick={() => this.search(this.state.query)} className="btn btn-outline-success">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    updateQuery = event => this.setState({ query: event.target.value })

    resetImages = () => {
        this.ImageService.getRandomImages()
            .then(images => this.props.setImages(images))
    }

    search = query => {
        this.ImageService.getSearchImages(query)
            .then(images => {
                this.props.setImages(images.results)
            })
    }

}

NavbarComponent.propTypes = {
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

const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)

export default Navbar