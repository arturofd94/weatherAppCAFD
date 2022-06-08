import { useState } from 'react'
import img01d from './01d.png'
import img01n from './01n.png'
import img02d from './02d.png'
import img02n from './02n.png'
import img03d from './03d.png'
import img03n from './03n.png'
import img04d from './04d.png'
import img04n from './04n.png'
import img09d from './09d.png'
import img09n from './09n.png'
import img11d from './11d.png'
import img11n from './11n.png'
import img13d from './13d.png'
import img13n from './13n.png'
import img50d from './50d.png'
import img50n from './50n.png'

const getImage = () => {
    
    const [images, setImages] = useState({
        '01d': img01d, '01n': img01n, '02d': img02d, '02n': img02n, '03d': img03d, '03n': img03n, 
        '04d': img04d, '04n': img04n, '09d': img09d, '09n': img09n, '11d': img11d, '11n': img11n,
        '13d': img13d, '13n': img13n, '50d': img50d, '50n': img50n
})

    return images
}

export default getImage;