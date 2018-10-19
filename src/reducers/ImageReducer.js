import { imageActions } from '../constants'

let initialState = {
    images: []
}

const ImageReducer = (state = initialState, action) => {
    
    switch(action.type) {

    case imageActions.SET_IMAGES:
        return {
            ...state,
            images: action.images
        }
    default:
        return state
    }

}

export default ImageReducer