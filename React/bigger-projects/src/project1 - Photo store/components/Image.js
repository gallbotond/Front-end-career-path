import React, { useState } from 'react'

export default function Image({className, img}) {

  const [hovered, setHovered] = useState(false)

  console.log(hovered)

  return (
    <div className={`image-container ${className}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={img.url} className='image-grid' />
    </div>
  )
}
