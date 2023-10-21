import React from 'react'
import Image from 'next/image'
import "./LittleBigNew.css"

function LittleBigNew(props: any) {
    return (
        <div className='flex flex-row pr-8 md:max-lg:pr-0 md:max-lg:border-b'>
            <div className='flex-1'>
                <div className='flex flex-1 justify-center w-full h-96 relative ' >
                    <Image
                        alt='Mountains'
                        src={props.article?.urlToImage}
                        layout='fill'
                        style={{ objectFit: "cover" }}
                        loading='lazy'
                    />
                </div>
                <div className='h-1/2'>

                    <p className='font-bold text-3xl py-4 text-justify'>
                        L{props.article?.title}
                    </p>
                    <p className='text-lg text-justify'>
                        {props.article?.description}
                    </p>
                    <div className='author-block'>
                        <div>
                            <Image src={"/avatar.jpeg"} height={10} width={40} alt='avatar' className='avatar' style={{ objectFit: "cover", }} loading='lazy' />
                        </div>
                        <p className='font-bold py-4 pl-2 uppercase' >
                            {props.article?.author}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LittleBigNew