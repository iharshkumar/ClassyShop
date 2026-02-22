import React, { useContext, useState } from 'react'
import { FaImages } from "react-icons/fa";
import { MyContext } from '../../App';
import { uploadImages } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';

const UploadBox = (props) => {
    const [uploading, setUploading] = useState(false)
    const context = useContext(MyContext)
    let selectedImages = [];

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            const files = e.target.files
            setUploading(true)
            if (!files || files.length === 0) {
                return;
            }

            const formdata = new FormData(); // Create new FormData for each upload

            // First, validate all files
            for (var i = 0; i < files.length; i++) {
                if (files[i] && (files[i].type === "image/jpeg" ||
                    files[i].type === "image/jpg" ||
                    files[i].type === "image/png" ||
                    files[i].type === "image/webp")
                ) {
                    const file = files[i];
                    selectedImages.push(file);
                    formdata.append('images', file);
                }
                else {
                    context.alertBox("error", "Please select a valid JPG , JPEG or PNG image file")
                    setUploading(false)
                    return false
                }
            }

            // Upload all files at once after validation
            try {
                const res = await uploadImages(apiEndPoint, formdata);
                if (res?.data?.images) {
                    //props.setPreviews(res.data.images);
                    setUploading(false)
                    props.setPreviewsFun(res.data.images);

                } else {
                    context.alertBox("error", "Upload failed. Please try again.");
                }
            } catch (error) {
                context.alertBox("error", "Failed to upload images. Please try again.");
                console.error("Upload error:", error);
            }
        } catch (error) {
            console.log(error);
            context.alertBox("error", "An error occurred while processing files.");
        }

    }

    return (
        <div className='uploadBox !p-3 !rounded-md !overflow-hidden !border  !border-dashed !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer hover:!bg-gray-200 flex items-center justify-center flex-col relative'>

            {
                uploading === true ? <CircularProgress /> :
                    <>
                        <FaImages className='text-[40px] opacity-35 pointer-events-none' />
                        <h4 className='text-[14px] pointer-events-none'>Image Upload</h4>
                        <input type="file"
                            accept='image/*'
                            multiple=
                            {
                                props.multiple !== undefined ? props.multiple : false
                            }
                            className='absolute top-0 left-0 w-full h-full !z-50 !opacity-0'
                            onChange={(e) => onChangeFile(e, props?.url)}
                            name="images" />
                    </>
            }
        </div>
    )
}

export default UploadBox