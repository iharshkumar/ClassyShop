import React, { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { MyContext } from '../../App'
import { useContext } from 'react'
import {  fetchDataFromApi, postData } from '../../utils/api'


const AddAddress = () => {
    const context = useContext(MyContext)
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(false);

    const [formFields, setFormFields] = useState({
        address_line1: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        mobile: '',
        status: '',
        userId: context.userData?._id,
        selected:false
    })

    useEffect(() => {
        setFormFields((prevState) => ({
            ...prevState,
            userId: formFields.userId
        }))

        
    }, [context?.userData])

   

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        setFormFields((prevState) => ({
            ...prevState,
            status: event.target.value
        }))
    };

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.address_line1 === "") {
            context.alertBox("error", "Please enter Full Address")
            return false
        }

        if (formFields.city === "") {
            context.alertBox("error", "Please enter your City")
            return false
        }

        if (formFields.state === "") {
            context.alertBox("error", "Please enter State")
            return false
        }

        if (formFields.pincode === "") {
            context.alertBox("error", "Please enter Pincode")
            return false
        }

        if (formFields.country === "") {
            context.alertBox("error", "Please enter Country")
            return false
        }

        if (phone === "") {
            context.alertBox("error", "Please enter your 10-digit Mobile Number")
            return false
        }



        postData(`/api/address/add`, formFields, { withCredentials: true }).then((res) => {
            //console.log(res)
            if (res?.data?.error === false) {
                setIsLoading(false)
                
                context.alertBox("success", res?.data?.message)
                
                context?.setIsOpenFullScreenPanel({
                    open: false
                })
                fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                    context?.setAddress(res.address)
    
                })

                
                history("/")
            } else {
                context.alertBox("error", res?.data?.message)
                setIsLoading(false)
            }

        })
    }

    return (
        <section className='!p-5 !bg-gray-100'>
            <form className='form !py-0 !p-8' onSubmit={handleSubmit}>
                <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-2 !mb-3 gap-4'>
                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Address Line 1</h3>
                            <input

                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="address_line1"
                                onChange={onChangeInput}
                                value={formFields.address_line1} />
                        </div>


                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>City</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="city"
                                onChange={onChangeInput}
                                value={formFields.city} />
                        </div>
                    </div>


                    <div className='grid grid-cols-3 !mb-3 gap-4'>
                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>State</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="state"
                                onChange={onChangeInput}
                                value={formFields.state} />
                        </div>


                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Pincode</h3>
                            <input
                                text="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="pincode"
                                onChange={onChangeInput}
                                value={formFields.pincode} />
                        </div>

                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Country</h3>
                            <input
                                text="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'
                                name="country"
                                onChange={onChangeInput}
                                value={formFields.country} />
                        </div>

                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Mobile</h3>
                            <PhoneInput
                                defaultCountry="in"
                                value={phone}
                                disabled={isLoading === true ? true : false}
                                onChange={(phone) => {
                                    setPhone(phone); {
                                        setFormFields((prevState) => ({
                                            ...prevState,
                                            mobile: phone
                                        }))

                                    }


                                }}
                            />
                        </div>


                        <div className='col w-[100%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Status</h3>
                            <Select
                                value={status}
                                onChange={handleChangeStatus}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size='small'
                                className='w-full'
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <br />



                    <br />
                    <br />
                    <div className='w-[250px]'>
                        <Button type='submit' className='btn-blue btn-lg w-full flex gap-2 '>
                            <GrCloudUpload className='text-[25px] text-white' />
                            Publish and View
                        </Button>
                    </div>
                </div>



            </form>
        </section>
    )
}

export default AddAddress