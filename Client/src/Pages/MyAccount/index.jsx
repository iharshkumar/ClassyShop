import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountSidebar from '../../components/AccountSidebar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { editData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';

const MyAccount = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState("")
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        mobile: ''
    })

    const context = useContext(MyContext)
    const history = useNavigate()

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

        editData(`/api/user/${userId}`, formFields, { withCredentials: true }).then((res) => {
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
            setUserId(context?.userData?._id);
            setFormFields({
                name:context?.userData?.name,
                email:context?.userData?.email,
                mobile:context?.userData?.mobile
            })
        }
    }, [context?.userData])


    return (
        <section className='!py-10 w-full'>
            <div className='container flex gap-5'>
                <div className='col1 w-[20%]'>
                    <AccountSidebar />
                </div>


                <div className='col2 w-[50%] '>
                    <div className='card bg-white !p-5 !shadow-md !rounded-md'>
                        <h2 className='!pb-3'>My Profile</h2>
                        <hr />

                        <form className='!mt-5' onSubmit={handleSubmit}>
                            <div className='flex items-center gap-5'>
                                <div className='w-[50%]'>
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
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        size='small'
                                        name="mobile"
                                        value={formFields.mobile}
                                        disabled={isLoading === true ? true : false}
                                        onChange={onChangeInput}
                                        className='w-full'
                                    />
                                </div>
                            </div>

                            <br />

                            <div className='flex items-center gap-4'>
                                <Button type="submit"
                                    disabled={!validateValue}
                                    className='btn-org btn-lg w-[250px]'>

                                    {
                                        isLoading === true ? <CircularProgress color="inherit" />
                                            :
                                            "Update Profile"
                                    }
                                </Button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount;