import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    news: {
        articles: [
            
            {
                title: "",
                urlToImage:"",
                publishedAt:Date,
                author:"",
                content:"",
                description:"",
            },
        ]
    }
}

export const getNews = createAsyncThunk("getNews", async()=>{
    const {data} = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5a5cd4203cbc42bd8b2ac349ba3fec78")
    return data
})

export const newSlice = createSlice({
    name: "new",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action)=>{ 
            state.news = action.payload
        })
    }
})

export default newSlice.reducer