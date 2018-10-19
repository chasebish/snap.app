/* global fetch */

const CLIENT_ID = '978faa4eb7466c9778b1a498450f90f52a9223fc3ae2cbf4328100450f22f3f2'
const URL = 'https://api.unsplash.com'


export default class ImageService {

    getRandomImages = () =>
        fetch(`${URL}/photos/random?count=25&client_id=${CLIENT_ID}`)
            .then(response => {
                if (response.status !== 200) {
                    console.error(response)
                    return {
                        error: true,
                        status: response.status
                    }
                }
                else {
                    return response.json()
                }
            })
            .catch(error => error)

    getSearchImages = query =>
        fetch(`${URL}/search/photos?query=${query}&per_page=25&client_id=${CLIENT_ID}`)
            .then(response => {
                console.log(response)
                if (response.status !== 200) {
                    console.error(response)
                    return {
                        error: true,
                        status: response.status
                    }
                }
                else {
                    return response.json()
                }
            })
            .catch(error => error)

}