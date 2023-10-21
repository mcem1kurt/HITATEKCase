import React from 'react'
import Image from 'next/image'
import moment from 'moment'

function BottomNew(props:any) {
    console.log(props.article)
    return (
        <div className='flex flex-row max-xl:flex-col'>
            <div className='py-8 xl:pr-4 xl:w-3/6 lg:w-full max-xl:flex max-xl:flex-row  h-72 relative justify-center'>
                <Image
                    alt='Mountains'
                    src={props.article?.urlToImage}
                    layout='fill'
                    objectFit='contain'
                    
                    className='cover pt-8 pb-8 pr-8 relative'
                />
                <p className='font-bold py-4 pl-2 uppercase text-gray-400 xl:hidden max-xl:w-2/3 max-xl:text-start'>{moment(props.article?.publishedAt).fromNow()}</p>
            </div>
            <div className='flex flex-col justify-center pr-8 xl:w-3/6 lg:w-full'>
                <p className='font-bold py-4 pl-2 uppercase text-gray-400 max-xl:hidden'>{moment(props.article?.publishedAt).fromNow()}</p>
                <p className='font-bold text-3xl py-4 text-justify'>
                {props.article?.title}
                </p>
                <p className='text-lg text-justify'>
                {props.article?.description}
                </p>
                <div className='author-block'>
                    <div>
                        <Image src={"/avatar.jpeg"} height={10} width={40} alt='avatar' className='avatar' style={{ objectFit: "cover", }} />
                    </div>
                    <p className='font-bold py-4 pl-2 uppercase' >
                    {props.article?.author}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BottomNew