import React from 'react'
import LittleBigNew from '@/components/middle/LittleBigNew'
import LittleNew from '@/components/middle/LittleNew'
import NewPreview from '@/components/middle/NewPreview'
import "./MiddleNews.css"
import { getNews } from '@/redux/features/newSlice'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from "react-redux"
import { useRef, useState, useEffect } from 'react';


function MiddleNews() {
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
    <div className='px-12 flex-1'>
      <hr />
      <div className="flex flex-row py-9 max-xl:flex-col ">
        <div className="max-xl:w-full xl:w-3/5  max-xl:flex max-xl:items-center"> <LittleBigNew article={...article[1]} /> </div>
        <hr className='xl:max-2xl:hidden' />
        <div className='hr-vertical'></div>
        <div className='flex flex-row  md:max-lg:pt-8 max-sm:flex-col xl:w-2/5 max-xl:w-full'>
          <div className='flex flex-col items-center  md:w-1/2 max-md:w-full'>
            <div className=" "> <LittleNew article={...article[2]} /> </div>
            <div className=" "> <LittleNew article={...article[3]} /> </div>
          </div>
          <div className='hr-vertical'></div>
          <div className='pl-6 max-xl:w-full md:w-1/2 max-h-min max-sm:pt-24'>
            <div className='sm:2xl:hidden mb-8'>
              <hr className='sm:2xl:hidden mb-8' />
            </div>
            <p className='font-bold'>POPULAR</p>
            <div className=""> <NewPreview queueNumber={1} article={...article[4]} /> </div>
            <hr />
            <div className=""> <NewPreview queueNumber={2} article={...article[6]} /> </div>
            <hr />
            <div className=""> <NewPreview queueNumber={3} article={...article[7]} /> </div>
            <hr />
            <div className=""> <NewPreview queueNumber={4} article={...article[8]} /> </div>
            <hr />
            <div className=""> <NewPreview queueNumber={5} article={...article[9]} /> </div>
          </div>
        </div>
      </div>
      <hr />

    </div>
  )
}

export default MiddleNews