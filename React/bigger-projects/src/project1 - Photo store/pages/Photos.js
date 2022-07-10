import React, { useContext } from 'react'

import Image from '../components/Image'
import { CustomContext } from '../context/customContext'
import { getClass } from '../utils/getClass'

export default function Photos() {

  const {pictures} = useContext(CustomContext)

  return (
      <main className='photos'>
        {pictures.map((picture, index) => 
          <Image key={picture.id} img={picture} className={getClass(index)} />
        )}
      </main>
  )
}
 