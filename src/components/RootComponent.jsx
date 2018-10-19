import React from 'react'

import { CustomNavbar, ImageList } from '.'

const RootComponent = () => (
    <div>
        <CustomNavbar/>
        <div className='container'>
            <ImageList/>
        </div>
    </div>
)

export default RootComponent