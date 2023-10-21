import BottomNew from '@/components/bottom/BottomNew'
import ImportantBottomNew from '@/components/bottom/ImportantBottomNew'
import EditorPick from '@/components/bottom/EditorPick'
import React from 'react'
import "./BottomNews.css"
import { getNews } from '@/redux/features/newSlice'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from "react-redux"
import { useRef, useState, useEffect } from 'react';

function BottomNews() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [article, setArticle] = useState([])
    let news: any
    news = useSelector((state: RootState) => state.news)

    useEffect(() => {
        dispatch(getNews())

    }, [])

    useEffect(() => {

        setArticle(news.news.articles)
        console.log()

    }, [news])
    return (
        <div className='px-12 flex flex-1 flex-row max-xl:flex-col justify-center'>
            <hr />

            <div className='max-xl:w-full xl:max-2xl:w-4/5 xl:w-full xl:pr-12'>
                <BottomNew article={...article[10]}/>
                <hr />
                <BottomNew article={...article[11]}/>
                <hr />

                <ImportantBottomNew article={...article[12]}/>
                <hr />

                {
                article.map((articleData,index )=> {
                    console.log(articleData)
                    if(index>12 && articleData?.urlToImage != null && index<22){
                        return <div>  <BottomNew article={articleData} /> <hr /></div>

                    }
                })
                }

                <BottomNew />
                <hr />

                <BottomNew />
            </div>
            <div className='hr-vertical mt-8'></div>

            <div className='max-xl:hidden xl:max-2xl:w-1/5 pt-8'>
                <p className='uppercase text-sm font-bold pl-8 pb-8'>Editor's Pick</p>
                <EditorPick />
            </div>
        </div>
    )
}

export default BottomNews