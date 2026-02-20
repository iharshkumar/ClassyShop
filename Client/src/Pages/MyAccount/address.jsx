import React, { useContext } from 'react'
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

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Address = () => {

    const context = useContext(MyContext)

    const [address, setAddress] = useState([])

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const [isOpenModel, setIsOpenModel]=useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setIsOpenModel(false);
    };

    const [phone, setPhone] = useState('');

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        mobile: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(false);


    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        setFormFields((prevState) => ({
            ...prevState,
            status: event.target.value
        }))
    };

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
                        </div>





                    </div>
                </div>
            </section>

            <Dialog open={isOpenModel}>
                <DialogTitle>Add address</DialogTitle>
                <form className='!p-8 !py-3'>
                    <div className='flex items-center gap-5 !pb-5'>
                        <div className='col w-[100%]'>
                            <TextField
                                className='w-full'
                                label="Address_line1"
                                variant="outlined"
                                size='small'
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
                            />
                        </div>

                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="State"
                                variant="outlined"
                                size='small'
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
                            />
                        </div>

                        <div className='col w-[50%]'>
                            <TextField
                                className='w-full'
                                label="Country"
                                variant="outlined"
                                size='small'
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
                                    setFormFields({
                                        mobile: phone
                                    })
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
                        <Button className='!mt-4 btn-org btn-lg w-full flex gap-2'>
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