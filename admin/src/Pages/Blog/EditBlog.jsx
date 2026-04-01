import React, { useContext, useState } from 'react'
import UploadBox from '../../Components/UploadBox'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'
import { fetchDataFromApi, editData, deleteImage } from '../../utils/api'
import { MyContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Editor from 'react-simple-wysiwyg';
import { useEffect } from 'react'

const EditBlog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(MyContext);
    const history = useNavigate()
    const [previews, setPreviews] = useState([])
    const [html, setHtml] = useState('');
  
    const [formFields, setFormFields] = useState({
        title: '',
        images: [],
        description: '',
    })

    useEffect(() => {
        const id = context.isOpenFullScreenPanel?.id;

        if (!id) return;

        fetchDataFromApi(`/api/blog/${id}`).then((res) => {
            const blog = res?.blog || res?.data?.blog || res?.data;
            if (!blog) return;

            setFormFields({
                title: blog?.title || '',
                images: blog?.images || [],
                description: blog?.description || '',
            });
            setPreviews(blog?.images || []);
            setHtml(blog?.description || '');
        });
    }, [])

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
        setFormFields(prev => ({
            ...prev,
            images: previewsArr
        }));
    }

    const removeImg = (image, index) => {
       deleteImage(`/api/category/deleteImage?img=${encodeURIComponent(image)}`).then(() => {
            const imageArr = previews.filter((_, i) => i !== index);
            setPreviews(imageArr);
            setFormFields(prev => ({
                ...prev,
                images: imageArr
            }));
        }).catch(() => {
            // If backend delete fails, keep UI unchanged
            context?.alertBox?.("error", "Failed to delete image. Please try again.");
        });
    }

    const onChangeDescription = (e) => {
        const value = e.target.value;
        setHtml(value);
        setFormFields(prev => ({
            ...prev,
            description: value
        }));
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.title === "") {
            context.alertBox("error", "Please enter title");
            setIsLoading(false);
            return false
        }

        if (previews?.length === 0) {
            context.alertBox("error", "Please select image");
            setIsLoading(false);
            return false
        }

        if (formFields.description === "") {
            context.alertBox("error", "Please enter description");
            setIsLoading(false);
            return false
        }

        editData(`/api/blog/${context?.isOpenFullScreenPanel?.id}`, formFields, { withCredentials: true }).then((res) => {
            setTimeout(() => {
                setIsLoading(false);
                context.setIsOpenFullScreenPanel({
                    open: false,
                })
                context?.getCat();
                history("/blog/list")
            }, 1500);
        })
    }

    
    return (
        <section className='!p-5 !bg-gray-100'>
            <form className='form !py-1 !p-1 md:!p-8 md:!py-1' onSubmit={handleSubmit}>
                <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-1 !mb-3'>
                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Title</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="title"
                                value={formFields.title}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 !mb-3'>
                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Description</h3>
                            <Editor value={html} onChange={onChangeDescription}
                                containerProps={{ style: { resize: 'vertical' } }}
                            />
                        </div>
                    </div>

                    <br />

                    <h3 className='!text-[18px] !font-[500] !mb-2 text-black-500'>Image</h3>

                    <div className='grid grid-cols-2 md:grid-cols-7 gap-4'>
                        {
                            previews.length !== 0 && previews?.map((image, index) => {
                                return (
                                    <div key={index} className='uploadBoxWrapper !mr-3 relative'>
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
                        <UploadBox multiple={true} url="/api/blog/uploadImages" setPreviewsFun={setPreviewsFun} />
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

export default EditBlog