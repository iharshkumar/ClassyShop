import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../Sidebar/style.css';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from 'react-icons/fa6';
import Button from '@mui/material/Button';
import { FaAngleUp } from 'react-icons/fa6';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const SideBar = () => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
    const [value, setValue] = useState([0, 1000]);

    return (
        <aside className='sidebar !py-3 '>
            <div className='box w-full bg-white !p-3 rounded-lg' >
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Shop By Category
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }


                    </Button>
                </h3>

                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className='scroll relative -left-[10px] !px-4'>
                        <FormGroup className='flex flex-col'>
                            <FormControlLabel control={<Checkbox size='small' />} label="Fashion" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Electronics" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Bags" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Footwear" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Groceries" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Beauty" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Wellness" />
                            <FormControlLabel control={<Checkbox size='small' />} label="Jewellery" />
                        </FormGroup>
                    </div>
                </Collapse>
            </div>



            <div className='box bg-white !p-3 rounded-lg' >
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Availability
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }


                    </Button>
                </h3>

                <Collapse isOpened={isOpenAvailFilter}>
                    <div className='scroll relative -left-[10px] !px-4' >
                        <FormGroup className='flex flex-col'>
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Available (17)"
                            />
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="In Stock (10)"
                            />

                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Not Available (1)"
                            />
                        </FormGroup>
                    </div>
                </Collapse>
            </div>


            <div className='box bg-white !p-3 rounded-lg' >
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Size
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }


                    </Button>
                </h3>

                <Collapse isOpened={isOpenSizeFilter}>
                    <div className='scroll relative -left-[10px] !px-4'>
                        <FormGroup className='flex flex-col'>
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Small"
                            />
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Medium"
                            />
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Large"
                            />
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="XXL"
                            /><FormControlLabel control={<Checkbox
                                size='small' />}
                                label="XL"
                            />
                        </FormGroup>
                    </div>
                </Collapse>
            </div>

            <div className='box !w-[90%] !bg-white !p-3 rounded-lg'>
                <h3 className='!w-full !mb-3 text-[16px] font-[600] flex items-center'>
                    Filter by Price
                </h3>
                <RangeSlider value={value} onInput={setValue}/>
                <div className='flex !pt-3 !pb-2 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong className='text-dark'>Rs: {value[0]}  </strong>
                    </span>
                    <span className='text-[13px]'>
                        To: <strong className='text-dark'>Rs: {value[1]}</strong>
                    </span>
                </div>

            </div>

            <div className='box bg-white !p-3 rounded-lg !px-4'>
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Filter by Rating
                </h3>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div><div className='w-full'>
                    <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div><div className='w-full'>
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div><div className='w-full'>
                    <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>
            </div>

        </aside>

    )
}

export default SideBar;