import React, { useEffect, useState } from 'react';
import './imgApiStyle.css'
import { AiFillCaretDown } from 'react-icons/ai'

const ImageComponent = () => {
    const [imageData, setImageData] = useState(null);
  
    useEffect(() => {
      fetchImage();
    }, []);
  
    const fetchImage = async () => {
        try {
          const response = await fetch('https://picsum.photos/v2/list');
          const data = await response.json();
      
          if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setImageData(data[randomIndex]);
          }
        } catch (error) {
          console.error('Error al obtener la imagen:', error);
        }
      };
  
    return (
      <div className='photoAutorNav'>
        {imageData && (
          <div className='containerPhotoAutor'>
            <img
              src={imageData.download_url}
              alt={`Imagen de ${imageData.author}`}
              className='imgPerfil'
            />
            <p className='autorPerfil'>{imageData.author}</p>
            <AiFillCaretDown className='iconoFill'/>
          </div>
        )}
      </div>
    );
  };
  
  export default ImageComponent;