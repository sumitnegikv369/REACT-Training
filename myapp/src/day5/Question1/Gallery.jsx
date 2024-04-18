import { useState } from 'react'
import './styles.css'

const Gallery = () => {
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)

      const data = await res.json()
      setPhotos(data.splice(0, 9))
    } catch (error) {
      console.log(error.message)
    }
  }

  getPhotos()
  return (
    <div className="ques1">
      {photos.map((photo) => (
        <img src={photo.url} alt={photo.title} key={photo.id} />
      ))}
    </div>
  )
}

export default Gallery
