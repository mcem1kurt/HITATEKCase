"use client"
import Image from 'next/image'
import React from 'react'
import { useRef, useState, useEffect } from 'react';
import "./HeadNews.css"
import { getNews } from '@/redux/features/newSlice'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { RootState } from '@/redux/store'
import { useDispatch,useSelector } from "react-redux"


function HeadNews() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [article,setArticle] = useState({})
    let news
    news = useSelector((state: RootState) => state.news)
    
    useEffect(()=>{
        dispatch(getNews())

    },[])


    useEffect(()=>{
        setArticle(news.news.articles[0])
        console.log(article)
    },[news])

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);



    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    //const articleImage = props.urlToImage

    return (
        <div className='pb-8'>
            <p className='text-lg text-blue-700 font-bold p-8  mt-14'>
                OPINION
            </p>
            <div style={{ width: windowSize[0], height: '500px', position: "relative" }}>

                <Image
                    src={article.urlToImage}
                    alt={"props.author"}
                    layout='fill'
                    objectFit='contain'
                    className='image'
                    style={{ objectFit: "cover", }}
                    loading='lazy'
                />
                <div className=''>
                    <div className='blue-background'>

                    </div>
                    <div className='title-background'>
                        <p className='font-bold text-2xl text-color-white p-4'>
                            {article.title}
                        </p>
                        <div className='author'>
                            <div>
                                <Image src={"/avatar.jpeg"} height={10} width={40} alt='avatar' className='avatar' style={{ objectFit: "cover", }} loading='lazy'/>
                            </div>
                            <p className='font-bold text-lg text-color-white p-4'>
                               {article.author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadNews