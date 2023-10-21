import React from 'react'
import Image from 'next/image'
import "./ImportantBottomNew.css"

function ImportantBottomNew() {
    return (
        <div className='py-8'><div className='flex flex-col'>
            <div className='py-8 pr-4 relative important-new-image'>
                <Image
                    alt='Mountains'
                    src='/social3.jpeg'
                    layout='fill'
                    objectFit='contain'
                    style={{ objectFit: "cover", }}
                    loading='lazy'
                />
            </div>
            <div className='flex flex-col justify-center pr-8'>
                <p className='font-bold py-4 pl-2 uppercase text-gray-400'>20 Hours Ago</p>
                <p className='font-bold text-3xl py-4 text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, odio a tempora maiores error sunt?
                </p>
                <p className='text-lg text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, minus quaerat! Voluptas tempore eveniet impedit ullam, consequuntur accusantium fugit numquam?
                </p>
                <div className='author-block'>
                    <div>
                        <Image src={"/avatar.jpeg"} height={10} width={40} alt='avatar' className='avatar' style={{ objectFit: "cover", }} />
                    </div>
                    <p className='font-bold py-4 pl-2 uppercase' >
                        Lorem ipsum
                    </p>
                </div>
            </div>
        </div></div>
    )
}

export default ImportantBottomNew