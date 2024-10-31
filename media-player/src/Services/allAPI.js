
import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"





// Addvideo API
export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/AllVideos`,video)
}

// getVideoAPI

export const getAllVideo=async()=>{
    return await commonAPI("GET",`${server_url}/AllVideos`,"")
}

// get a video api
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/AllVideos/${id}`,"video")
}

// delete video
export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/AllVideos/${id}`,{})
}

// add historyapi
export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}
// get  History api
export const getHistoryAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/history/${id}`,"")
}
// delete History
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

