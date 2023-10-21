"use client"

import Image from 'next/image'
import { Navbar } from '../../containers/Navbar'
import HeadNews from '@/containers/HeadNews'
import MiddleNews from '@/containers/MiddleNews'
import BottomNews from '@/containers/BottomNews'
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getNews } from '@/redux/features/newSlice'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { RootState } from '@/redux/store'


export default function Home() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const {news} = useSelector((state: RootState) => state.news)

  useEffect(()=>{
    dispatch(getNews())
  },[])


  return (
    <main>
      <Navbar></Navbar>
      <HeadNews ></HeadNews>
      <MiddleNews></MiddleNews>
      <BottomNews/>
    </main>
  )
}
