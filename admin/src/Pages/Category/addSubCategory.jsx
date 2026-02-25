import React, { useContext, useState } from 'react'

import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


const AddSubCategory = () => {
    const [productCat, setProductCat] = useState('');
    const [productCat2, setProductCat2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [formFields, setFormFields] = useState({
        name: '',
        parentCatName: null,
        parentId: null
    })


    const [formFields2, setFormFields2] = useState({
        name: '',
        parentCatName: null,
        parentId: null
    })
    const context = useContext(MyContext)
    const history = useNavigate()

    const handleChangeProductCat = (event) => {
        const value = event.target.value;
        setProductCat(value);
        setFormFields(prev => ({
            ...prev,
            parentId: value,
        }));
    };

    const selectCatFun = (catName) => {
        setFormFields(prev => ({
            ...prev,
            parentCatName: catName,
        }));
    };


    const handleChangeProductCat2 = (event) => {
        const value = event.target.value;
        setProductCat2(value);
        setFormFields2(prev => ({
            ...prev,
            parentId: value,
        }));
    };
    const selectCatFun2 = (catName) => {
        setFormFields2(prev => ({
            ...prev,
            parentCatName: catName,
        }));
    };

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        const catId = productCat
        setProductCat(catId);

        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        });
    }

    const onChangeInput2 = (e) => {
        const { name, value } = e.target;
        const catId = productCat2
        setProductCat2(catId);

        setFormFields2(() => {
            return {
                ...formFields2,
                [name]: value
            }
        });
    }



    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.name === "") {
            context.alertBox("error", "Please enter Category name");
            setIsLoading(false);
            return false
        }

        if (productCat === '') {
            context.alertBox("error", "Please select parent category");
            setIsLoading(false);
            return false
        }

        postData("/api/category/create", formFields, { withCredentials: true }).then((res) => {
            setTimeout(() => {
                setIsLoading(false);
                context.setIsOpenFullScreenPanel({
                    open: false,
                })
                context?.getCat()
            }, 1500);
        })
    }


    const handleSubmit2 = (e) => {

        e.preventDefault()

        setIsLoading2(true)
        if (formFields2.name === "") {
            context.alertBox("error", "Please enter Category name");
            setIsLoading2(false);
            return false
        }

        if (productCat2 === '') {
            context.alertBox("error", "Please select parent category");
            setIsLoading2(false);
            return false
        }

        postData("/api/category/create", formFields2, { withCredentials: true }).then((res) => {
            setTimeout(() => {
                setIsLoading2(false);
                context.setIsOpenFullScreenPanel({
                    open: false,
                })
                context?.getCat()
                history("/subCategory/list")
            }, 1500);
        })
    }





    return (
        <section className='!p-5 !bg-gray-100 flex grid-cols-2 gap-10'>
            <form className='form !py-3 !p-8' onSubmit={handleSubmit}>
                <h4 className='font-[600]'>Add Sub Category</h4>
                <div className='scroll !min-h-[82vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-2 !mb-3 gap-5'>
                        <div className='col '>
                            <h3 className='text-[14px] font-[500] !mb-1'>Product Category</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size='small'
                                className='w-full !bg-[#fafafa]'
                                value={productCat}
                                label="Category"
                                onChange={handleChangeProductCat}
                            >
                                {
                                    context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={item?._id}
                                                onClick={() => selectCatFun(item?.name)}
                                            >
                                                {item?.name}
                                            </MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] !mb-1 !text-black-500 '>Sub Category Name</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'
                                name='name'
                                value={formFields?.name}
                                onChange={onChangeInput} />
                        </div>
                    </div>
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


            <form className='form !py-3 !p-8' onSubmit={handleSubmit2}>
                <h4 className='font-[600]'>Add Third Level Category</h4>

                <div className='scroll !min-h-[82vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-2 !mb-3 gap-5'>
                        <div className='col '>
                            <h3 className='text-[14px] font-[500] !mb-1'>Product Category</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size='small'
                                className='w-full !bg-[#fafafa]'
                                value={productCat2}
                                label="Category"
                                onChange={handleChangeProductCat2}
                            >
                                {
                                    context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                                        return (
                                            item?.children?.length !== 0 && item?.children?.map((item2, index) => {
                                                return (
                                                    <MenuItem
                                                        key={index}
                                                        value={item2?._id}
                                                        onClick={() => selectCatFun2(item2?.name)}
                                                    >
                                                        {item2?.name}
                                                    </MenuItem>
                                                )
                                            })
                                        )

                                    })
                                }

                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] !mb-1 !text-black-500 '>Sub Category Name</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'
                                name='name'
                                value={formFields2?.name}
                                onChange={onChangeInput2} />
                        </div>
                    </div>
                    <br />
                    <div className='w-[250px]'>
                        <Button type='submit' className='btn-blue btn-lg w-full flex gap-2 '>
                            {
                                isLoading2 === true ? <CircularProgress color="inherit" />
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

export default AddSubCategory