/* global fetch */

const RANDOM_REQUEST = 'https://api.unsplash.com/photos/random?count=25&client_id=978faa4eb7466c9778b1a498450f90f52a9223fc3ae2cbf4328100450f22f3f2'

export default class ImageService {

    test = () => { console.log('hello world') }
    getRandomImages = () => fetch(RANDOM_REQUEST).then(response => response.json())
}