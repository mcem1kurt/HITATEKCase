import React from 'react'
import Image from 'next/image'

function LittleNew(props: any) {
  return (
    <div className='flex flex-row pb-36 max-md:w-full'>
      <div className='pr-8 pl-8'>
        <div className='flex justify-center w-full h-1/2 relative max-xl:h-full'>
          <Image
            src={props.article?.urlToImage}
            alt={"props.author"}
            layout='fill'
            objectFit='contain'
            style={{ objectFit: "cover", }}
            loading='lazy'
          />
        </div>
        <p className='font-bold details text-justify pt-4'>
          {props.article?.title}
        </p>
        <p className='text-sm details text-justify h-'>
          {props.article?.description}
        </p>
        <div className='author-block'>
          <div>
            <Image src={"/avatar.jpeg"} height={5} width={20} alt='avatar' className='avatar' style={{ objectFit: "cover", }} loading='lazy' />
          </div>
          <p className='font-bold text-sm py-4 pl-2 uppercase' >
            {props.article?.author}
          </p>

        </div>
      </div>
      <hr />
    </div>
  )
}

export default LittleNew