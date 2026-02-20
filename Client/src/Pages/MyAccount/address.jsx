import React, { useContext, useEffect } from 'react'
import AccountSidebar from '../../components/AccountSidebar'
import Radio from '@mui/material/Radio';
import { MyContext } from '../../App';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { BsFillBagFill } from 'react-icons/bs';
import { deleteData, fetchDataFromApi, postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";


const label = { slotProps: { input: { 'aria-label': 'Radio demo' } } };

const Address = () => {

    const context = useContext(MyContext)

    const [address, setAddress] = useState([])

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [phone, setPhone] = useState('');

    const [open, setOpen] = useState(false);

    const [isOpenModel, setIsOpenModel] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [userId, setUserId] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const [status, setStatus] = useState(false);

    const history = useNavigate()

    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {

            fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                setAddress(res.address)
            })
        }
    }, [context?.userData])

    const handleClose = () => {
        setIsOpenModel(false);
    };

    const [formFields, setFormFields] = useState({
        address_line1: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        mobile: '',
        status: '',
        userId: context.userData?._id,
        selected: false
    })

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

    const removeaddress = (id) => {
        deleteData(`/api/address/${id}`).then((res) => {
            fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                setAddress(res.address)

            })
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
            if (res?.error !== true) {
                setIsLoading(false)

                context.alertBox("success", res?.message)


                setIsOpenModel(false)

                fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                    setAddress(res.address)

                })


                history("/address")
            } else {
                context.alertBox("error", res?.message)
                setIsLoading(false)
            }

        })
    }
    return (
        <>
            <section className='!py-10 w-full'>
                <div className='container flex gap-5'>
                    <div className='col1 w-[20%]'>
                        <AccountSidebar />
                    </div>


                    <div className='col2 w-[50%] '>
                        <div className='card bg-white !p-5 !shadow-md !rounded-md !mb-5'>
                            <div className='flex items-center !pb-3'>
                                <h2 className='!pb-0'>Address</h2>
                            </div>
                            <hr />



                            <div className='flex items-center justify-center !mt-4 !p-5 !border !border-dashed !border-[rgba(0,0,0,0.2)] !bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer !rounded-md'
                                onClick={() => setIsOpenModel(true)}
                            >
                                <span className='text-[14px] font-[500]'>Add Address</span>

                            </div>

                            <div className='flex gap-2 flex-col !mt-4'>
                                {
                                    address?.length > 0 && address?.map((address, index) => {
                                        return (
                                            <>
                                                <label className='group addressBox relative !border !border-dashed !border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] flex items-center justify-center !P-3 !rounded-md cursor-pointer !w-full'>
                                                    <div className='!mr-auto'>
                                                        <Radio {...label}
                                                            name='address'
                                                            checked=
                                                            {
                                                                selectedValue ===
                                                                (address?._id)
                                                            }
                                                            value={address?._id}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="text-[12px]">
                                                            {
                                                                address?.address_line1 + " " +
                                                                address?.city + " " +
                                                                address?.country + " " +
                                                                address?.state + " " +
                                                                address?.pincode}
                                                        </span>
                                                    </div>
                                                    <span onClick={() => { removeaddress(address._id) }}
                                                        className='absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center justify-center w-[30px] h-[30px] rounded-full bg-gray-500 text-white'>                                                        <FaRegTrashAlt />
                                                    </span>
                                                </label>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>





                    </div>
                </div>
            </section>

            <Dialog open={isOpenModel}>
                <DialogTitle>Add address</DialogTitle>
                <form className='!p-8 !py-3' onSubmit={handleSubmit}>
                    <div className='flex items-center gap-5 !pb-5'>
                        <div className='col w-[100%]'>
                            <TextField
                                className='w-full'
                                label="Address_line1"
                                variant="outlined"
                                size='small'
                                name="address_line1"
                                onChange={onChangeInput}
                                value={formFields.address_line1}
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-5 !pb-5'>
                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="City"
                                variant="outlined"
                                size='small'
                                name="city"
                                onChange={onChangeInput}
                                value={formFields.city}
                            />
                        </div>

                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="State"
                                variant="outlined"
                                size='small'
                                name="state"
                                onChange={onChangeInput}
                                value={formFields.state}
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-5 !pb-5'>
                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="Pincode"
                                variant="outlined"
                                size='small'
                                name="pincode"
                                onChange={onChangeInput}
                                value={formFields.pincode}
                            />
                        </div>

                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="Country"
                                variant="outlined"
                                size='small'
                                name="country"
                                onChange={onChangeInput}
                                value={formFields.country}
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-5 !pb-5'>
                        <div className='col w-[50%]'>
                            <PhoneInput
                                defaultCountry="in"
                                value={phone}
                                disabled={isLoading === true ? true : false}
                                onChange={(phone) => {
                                    setPhone(phone);
                                    setFormFields((prevState) => ({
                                        ...prevState,
                                        mobile: phone
                                    }))
                                }}
                            />
                        </div>

                        <div className='col w-[50%]'>
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

                    <div className='flex items-center gap-5'>
                        <Button type="submit" className='!mt-4 btn-org btn-lg w-full flex gap-2'>
                            Save
                        </Button>

                        <Button className='!mt-4 btn-org btn-border btn-lg w-full flex gap-2'
                            onClick={handleClose} >
                            Cancel
                        </Button>
                    </div>


                </form>


            </Dialog>



        </>
    )
}

export default Address