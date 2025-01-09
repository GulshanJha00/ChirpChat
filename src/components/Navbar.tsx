import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='h-20 w-full bg-'>
      <Image
      src={"/logo.png"}
      height={50}
      width={50}
      alt='chirpchat'
      />
    </div>
  )
}

export default Navbar
