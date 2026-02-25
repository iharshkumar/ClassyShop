import React, { useContext, useState } from 'react'
import UploadBox from '../../Components/UploadBox'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IoMdClose } from 'react-icons/io'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'
import { deleteImage, postData } from '../../utils/api'
import { MyContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


const AddCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(MyContext);
    const history = useNavigate()
    const [previews, setPreviews] = useState([])

    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        });
    }

    const setPreviewsFun = (previewsArr) => {
        setPreviews(previewsArr);
        formFields.images = previewsArr
    }

    const removeImg = (image, index) => {
        var imageArr = [];
        imageArr = previews
        deleteImage(`/api/category/deleteImage?img=${image}`).then((res) => {
            imageArr.splice(index, 1);
            setPreviews([]);

            setTimeout(() => {
                setPreviews(imageArr);
                formFields.images = previewsArr
            }, 100)
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.name === "") {
            context.alertBox("error", "Please enter Category name");
            setIsLoading(false);
            return false
        }

        if (previews?.length === 0) {
            context.alertBox("error", "Please select category image");
            setIsLoading(false);
            return false
        }

        postData("/api/category/create", formFields, { withCredentials: true }).then((res) => {
            setTimeout(() => {
                setIsLoading(false);
                context.setIsOpenFullScreenPanel({
                    open: false,
                })
                context?.getCat();
                history("/category/list")
            }, 1500);
        })
    }


    return (

        <section className='!p-5 !bg-gray-100'>
            <form className='form !py-0 !p-8' onSubmit={handleSubmit}>
                <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-1 !mb-3'>
                        <div className='col w-[25%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Category Name</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="name"
                                value={formFields.name}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>
                    <br />

                    <h3 className='!text-[18px] !font-[500] !mb-2 text-black-500'>Category Image</h3>


                    <div className='grid grid-cols-7 gap-4'>

                        {
                            previews.length !== 0 && previews?.map((image, index) => {
                                return (
                                    <div key={index} className='uploadBoxWrapper relative'>
                                        <span className='absolute w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'
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



                        <UploadBox multiple={true} url="/api/category/uploadImages" setPreviewsFun={setPreviewsFun} />

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
                                        Publish and View
                                    </>
                            }

                        </Button>
                    </div>
                </div>



            </form>
        </section>
    )
}

export default AddCategory