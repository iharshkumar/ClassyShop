import React, { useContext, useEffect, useState } from 'react'
import UploadBox from '../../Components/UploadBox'
import { IoMdClose } from 'react-icons/io'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'
import { deleteImage, editData, fetchDataFromApi } from '../../utils/api'
import { MyContext } from '../../App'
import CircularProgress from '@mui/material/CircularProgress';


const EditHomeSlide = () => {
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(MyContext);
    const [previews, setPreviews] = useState([])

    const [formFields, setFormFields] = useState({
        images: [],
    })

    const setPreviewsFun = (previewsArr) => {
        const imgArr = [...previews];
        for (let i = 0; i < previewsArr.length; i++) {
            imgArr.push(previewsArr[i])
        }

        setPreviews([]);
        setTimeout(() => {
            setPreviews(imgArr);
            formFields.images = imgArr
        }, 10);
    }

    useEffect(() => {
        const id = context.isOpenFullScreenPanel?.id;
        if (id) {
            fetchDataFromApi(`/api/homeSlides/${id}`).then((res) => {
                const data = res?.data || res?.homeSlide;
                if (data) {
                    setPreviews(data.images || []);
                    setFormFields({
                        images: data.images || []
                    })
                }
            })
        }
    }, [context.isOpenFullScreenPanel?.id])

    const removeImg = (image, index) => {
        var imageArr = [...previews];
        deleteImage(`/api/homeSlides/deleteImage?img=${image}`).then((res) => {
            imageArr.splice(index, 1);
            setPreviews([]);

            setTimeout(() => {
                setPreviews(imageArr);
                setFormFields({
                    images: imageArr
                })
            }, 100)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (previews?.length === 0) {
            context.alertBox("error", "Please select Slide image");
            setIsLoading(false);
            return false
        }

        editData(`/api/homeSlides/${context?.isOpenFullScreenPanel?.id}`, formFields, { withCredentials: true }).then((res) => {
            setTimeout(() => {
                setIsLoading(false);
                context.setIsOpenFullScreenPanel({
                    open: false,
                    model: '',
                    id: ''
                })
            }, 1000);
        })
    }

    return (
        <section className='!p-5 !bg-gray-100'>
            <form className='form !py-1 !p-1 md:!p-8 md:!py-1' onSubmit={handleSubmit}>
                <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-2 md:grid-cols-7 gap-4'>

                        {
                            previews.length !== 0 && previews?.map((image, index) => {
                                return (
                                    <div key={index} className='uploadBoxWrapper !mr-3 relative'>
                                        <span className='absolute !w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'
                                            onClick={() => removeImg(image, index)}>
                                            <IoMdClose className='text-white text-[17px]' />
                                        </span>
                                        <div className='uploadBox !p-0 !rounded-md !overflow-hidden !border  !border-dashed !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer hover:!bg-gray-200 flex items-center justify-center flex-col relative'>
                                            <img src={image} className='w-100' />
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <UploadBox multiple={false} url="/api/homeSlides/uploadImages" setPreviewsFun={setPreviewsFun} />

                    </div>

                    <br />
                    <br />
                    <div className='w-[250px]'>
                        <Button type='submit' className='btn-blue btn-lg w-full flex gap-2 '>
                            {
                                isLoading === true ? <CircularProgress color="inherit" />
                                    :
                                    <>
                                        <GrCloudUpload className='text-[25px] text-white' />
                                        Update Slide
                                    </>
                            }

                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EditHomeSlide
