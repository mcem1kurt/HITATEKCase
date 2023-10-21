import React from 'react'
import Image from 'next/image'

function EditorPick() {
  return (
    <div className='flex flex-row pb-8 max-w-xs'>
      <div className=' pl-8'>
        <div className=''>
          <Image
            alt='Mountains'
            src='/social2.png'
            height={600}
            width={1000}
            loading='lazy'
          />
        </div>
        <p className='font-bold text-xl py-4 truncate'>
          Lorem ipsum, dolor sit
        </p>
        <p className='text-sm details text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, minus quaerat! Voluptas tempore eveniet impedit ullam, consequuntur accusantium fugit numquam?
        </p>
        <div className='author-block'>
          <div>
            <Image src={"/avatar.jpeg"} height={5} width={20} alt='avatar' className='avatar' style={{ objectFit: "cover", }} />
          </div>
          <p className='font-bold text-sm py-4 pl-2 uppercase' >
            Lorem ipsum
          </p>

        </div>
      </div>
    </div>
  )
}

export default EditorPick