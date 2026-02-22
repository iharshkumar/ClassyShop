import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;


export const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
                "Content-type": "application/json"
            },

            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            const errorData = await response.json()
            return errorData
        }
    } catch (error) {
        console.log("Error:", error)
    }
}


export const fetchDataFromApi = async (url) => {
    try {
        const params = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
                "Content-type": "application/json"
            }
        }

        const { data } = await axios.get(apiUrl + url, params);

        // console.log("======== data", data)
        return data
    } catch (error) {
        // console.log("======== error", error)
        return error
    }
}

export const uploadImage = async (url, updatedData) => {

    const params = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
            "Content-type": "multipart/form-data"
        }
    }


    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res) => {
        response = res
    })
    return response;


}


export const uploadImages = async (url, formData) => {
    try {
        const params = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`
                // Don't set Content-type manually - axios will set it automatically with boundary for FormData
            }
        }

        const response = await axios.post(apiUrl + url, formData, params);
        return response;
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
}

export const editData = async (url, updatedData) => {

    const params = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
            "Content-type": "application/json"
        }
    }

    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res) => {
        response = res
    })
    return response;


}

export const deleteImage = async (url) => {
    try {
        const params = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
                "Content-type": "application/json"
            }
        }
        const response = await axios.delete(apiUrl + url, params);
        return response;
    } catch (error) {
        console.error("Delete image error:", error);
        throw error;
    }
}



export const deleteData = async (url) => {
    try {
        const params = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
                "Content-type": "application/json"
            }
        }
        const response = await axios.delete(apiUrl + url, params);
        return response;
    } catch (error) {
        console.error("Delete image error:", error);
        throw error;
    }
}