




// Addvideo API

import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

export const addVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// getVideoAPI

export const getAllVideo=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}