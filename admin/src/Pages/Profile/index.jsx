import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import { editData, fetchDataFromApi, postData, uploadImage } from '../../../../admin/src/utils/api.js';
import { IoCloudUpload } from 'react-icons/io5';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Collapse } from 'react-collapse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Radio from '@mui/material/Radio';


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };


const Profile = () => {
    const [previews, setPreviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)
    const [uploading, setUploading] = useState(false)
    const context = useContext(MyContext)
    const formdata = new FormData();
    const [isChangePasswordFormShow, setIsChangePasswordFormShow] = useState(false)
    const [userId, setUserId] = useState("")
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState([])

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        mobile: ''
    })

    const [changePassword, setChangePassword] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    useEffect(() => {
        const userAvtar = []
        if (context?.userData?.avatar !== "" && context?.userData?.avatar !== undefined) {
            userAvtar.push(context?.userData?.avatar)
            setPreviews(userAvtar)
        }
    }, [context?.userData])

    const history = useNavigate()

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    useEffect(() => {
        const token = localStorage.getItem('accesstoken')
        if (token === null) {
            history("/")
        }



    }, [context?.isLogin])

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })

    }

    const onChangePasswordInput = (e) => {
        const { name, value } = e.target
        setChangePassword(() => {
            return {
                ...changePassword,
                [name]: value
            }
        })
    }



    let selectedImages = [];

    const onChangeFile = async (e) => {
        try {
            setPreviews([])
            const files = e.target.files
            setUploading(true);

            for (var i = 0; i < files.length; i++) {
                if (files[i] && (files[i].type === "image/jpeg" ||
                    files[i].type === "image/jpg" ||
                    files[i].type === "image/png" ||
                    files[i].type === "image/webp")
                ) {
                    const file = files[i];
                    selectedImages.push(file);
                    formdata.append(`avatar`, file)

                }
                else {
                    context.alertBox("error", "Please select a valid JPG , JPEG or PNG image file")
                    setUploading(false)
                    return false
                }
                uploadImage("/api/user/user-avatar", formdata).then((res) => {
                    // console.log(res)
                    setUploading(false)
                    let avatar = [];
                    // console.log(res?.data?.avtar)
                    avatar?.push(res?.data?.avtar)
                    setPreviews(avatar);
                })
            }
        } catch (error) {
            console.log(error)
        }

    }




    const validateValue = Object.values(formFields).every(el => el)
    // console.log(formFields)
    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.name === "") {
            context.alertBox("error", "Please enter Full name")
            return false
        }

        if (formFields.email === "") {
            context.alertBox("error", "Please enter emailid")
            return false
        }

        if (formFields.mobile === "") {
            context.alertBox("error", "Please enter Mobile Number")
            return false
        }

        // Exclude email from update since it's disabled and shouldn't be changed
        const updateData = {
            name: formFields.name,
            mobile: formFields.mobile
        }

        editData(`/api/user/${userId}`, updateData, { withCredentials: true }).then((res) => {
            //console.log(res)
            if (res?.data?.error === false) {
                setIsLoading(false)
                context.alertBox("success", res?.data?.message)

                history("/")
            } else {
                context.alertBox("error", res?.data?.message)
                setIsLoading(false)
            }

        })
    }


    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {

            fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                setAddress(res.address)
                context?.setAddress(res.address)
            })

            setUserId(context?.userData?._id);
            setFormFields({
                name: context?.userData?.name,
                email: context?.userData?.email,
                mobile: context?.userData?.mobile
            })

            setChangePassword({
                email: context?.userData?.email
            })
        }
    }, [context?.userData])

    const validateValue2 = Object.values(formFields).every(el => el)
    const handleSubmitChangePassword = (e) => {

        e.preventDefault()

        setIsLoading2(true)
        if (changePassword.oldPassword === "") {
            context.alertBox("error", "Please enter Old Password")
            return false
        }

        if (changePassword.newPassword === "") {
            context.alertBox("error", "Please enter New Password ")
            return false
        }

        if (changePassword.confirmPassword === "") {
            context.alertBox("error", "Please enter confirm password")
            return false
        }

        if (changePassword.confirmPassword !== changePassword.newPassword) {
            context.alertBox("error", "Password and Confirm Password doesn't match")
            return false
        }

        postData(`/api/user/reset-password`, changePassword, { withCredentials: true }).then((res) => {
            //console.log(res)
            if (res?.error === false) {
                setIsLoading2(false)
                context.alertBox("success", res?.message)
            } else {
                context.alertBox("error", res?.message)
                setIsLoading2(false)
            }

        })
    }

    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
            setUserId(context?.userData?._id);
            setFormFields({
                name: context?.userData?.name,
                email: context?.userData?.email,
                mobile: context?.userData?.mobile
            })
            const ph = `"${context?.userData?.mobile}"`
            setPhone(ph)

            setChangePassword({
                email: context?.userData?.email
            })
        }
    }, [context?.userData])

    return (
        <>

            <div className='card !my-4 !pt-5 !w-[75%] !shadow=md sm:rounded-lg !bg-white !py-5 !px-5' >
                <div className='flex items-center justify-between'>
                    <h1 className='text-[18px] font-[600]'>User Profile</h1>


                    <Button className='!ml-auto' onClick={() => setIsChangePasswordFormShow(!isChangePasswordFormShow)}>Change Password</Button>

                </div>

                <br />

                <div className='w-[110px] h-[110px] rounded-full !overflow-hidden !relative
                            group flex items-center justify-center bg-gray-200 '>



                    {
                        uploading === true ? <CircularProgress color='inherit' /> :
                            <>
                                {
                                    previews?.length !== 0 ? previews?.map((img, index) => {
                                        return (
                                            <img
                                                src={img}
                                                key={index}
                                                className='w-full h-full object-cover'
                                            />
                                        )
                                    })
                                        :
                                        <img
                                            src={"/user.png"}
                                            className='w-full h-full object-cover'
                                        />
                                }

                            </>

                    }
                    <div className='overlay w-[100%] h-[100%] !absolute top-0 left-0 z-50 !bg-[rgba(0,0,0,0.7)] 
                                flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100'>
                        <IoCloudUpload className='text-[#fff] text-[25px]' />
                        <input type="file"
                            className='absolute top-0 left-0 h-full w-full opacity-0'
                            accept='image/*'
                            onChange={(e) => onChangeFile(e)}
                            name="avatar"
                        />
                    </div>


                </div>


                <form className='form !mt-8' onSubmit={handleSubmit}>
                    <div className='flex items-center gap-5'>
                        <div className='w-[100%]'>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                size='small'
                                name="name"
                                value={formFields.name}
                                disabled={isLoading === true ? true : false}
                                onChange={onChangeInput}
                                className='w-full'
                            />
                        </div>
                    </div>

                    <div className='flex items-center !mt-4 gap-5'>
                        <div className='w-[100%]'>
                            <TextField
                                type='email'
                                label="Email"
                                variant="outlined"
                                size='small'
                                name="email"
                                value={formFields.email}
                                disabled={true}
                                onChange={onChangeInput}
                                className='w-full'
                            />
                        </div>
                    </div>

                    <div className='flex items-center !mt-4 gap-5'>
                        <div className='w-[100%]'>
                            <PhoneInput
                                defaultCountry="in"
                                value={phone}
                                disabled={isLoading === true ? true : false}
                                onChange={(phone) => {
                                    setPhone(phone);
                                    setFormFields({
                                        mobile: phone
                                    })
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-center !mt-4 !p-5 !border !border-dashed !border-[rgba(0,0,0,0.2)] !bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer !rounded-md'
                        onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add New Address'
                        })}
                    >
                        <span className='text-[14px] font-[500]'>Add Address</span>

                    </div>

                    <div className='flex gap-2 flex-col !mt-4'>
                        {
                            address?.length > 0 && address?.map((address, index) => {
                                return (
                                    <>
                                        <label className='addressBox !border !border-dashed !border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] flex items-center justify-center !P-3 !rounded-md cursor-pointer !w-full'>
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
                                        </label>
                                    </>
                                )
                            })
                        }
                    </div>




                    <div className='flex items-center gap-4'>
                        <Button type="submit"
                            disabled={!validateValue}
                            className='btn-blue btn-lg w-[250px]'>

                            {
                                isLoading === true ? <CircularProgress color="inherit" />
                                    :
                                    "Update Profile"
                            }
                        </Button>

                    </div>
                </form>


            </div >

            <Collapse isOpened={isChangePasswordFormShow} >

                <div className='card bg-white !mt-5 !w-[75%] !p-5 !shadow-md !rounded-md'>
                    <div className='flex items-center !pb-3'>
                        <h2 className='!pb-0'>Change Password</h2>
                    </div>
                    <hr />

                    <form className='!mt-8' onSubmit={handleSubmitChangePassword}>
                        <div className='flex items-center gap-5'>
                            <div className='w-[100%]'>
                                <TextField
                                    label="Old Password"
                                    variant="outlined"
                                    size='small'
                                    name="oldPassword"
                                    type="password"
                                    value={changePassword.oldPassword}
                                    disabled={isLoading2 === true ? true : false}
                                    onChange={onChangePasswordInput}
                                    className='w-full'
                                />
                            </div>
                        </div>

                        <div className='flex items-center !mt-4 gap-5'>
                            <div className='w-[100%]'>
                                <TextField
                                    type='password'
                                    label="New Password"
                                    variant="outlined"
                                    size='small'
                                    name="newPassword"
                                    value={changePassword.newPassword}
                                    onChange={onChangePasswordInput}
                                    className='w-full'
                                />
                            </div>
                        </div>

                        <div className='flex items-center !mt-4 gap-5'>
                            <div className='w-[100%]'>
                                <TextField
                                    type='password'
                                    label="Confirm Password"
                                    variant="outlined"
                                    size='small'
                                    name="confirmPassword"
                                    value={changePassword.confirmPassword}
                                    onChange={onChangePasswordInput}
                                    className='w-full'
                                />
                            </div>
                        </div>

                        <br />

                        <div className='flex items-center gap-4'>
                            <Button type="submit"
                                disabled={!validateValue2}
                                className='btn-blue btn-lg w-[250px]'>

                                {
                                    isLoading2 === true ? <CircularProgress color="inherit" />
                                        :
                                        "Change Password"
                                }
                            </Button>

                        </div>
                    </form>
                </div>
            </Collapse>
        </>
    )
}

export default Profile