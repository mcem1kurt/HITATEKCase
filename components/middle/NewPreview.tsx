import React from 'react'

function NewPreview( props: any) {
  return (
    <div className='flex flex-row'>
      <div className='flex items-center'>
        <p className='text-7xl font-extrabold text-gray-400 w-10 mx-4'>{props.queueNumber}</p>
      </div>
      <div>
        <p className='text-sm py-1 text-justify'>
          {props.article?.description}
        </p>
        <p className='font-bold text-xs py-4 uppercase' >
          {props.article?.author}
        </p>
      </div>
    </div>
  )
}

export default NewPreview