import { Button, Checkbox } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";

import Progress from '../../Components/ProgressBar';
import { MdOutlineModeEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BiExport } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';




const columns =
    [
        { id: 'image', label: 'IMAGE', minWidth: 150 },
        { id: 'action', label: 'ACTION', minWidth: 100 },
    ];

const HomeSliderBanners = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    // const [categoryFilterVal, setcategoryFilterVal] = React.useState('');

    const context = useContext(MyContext)

    // const handleChangeCatFilter = (event) => {
    //     setcategoryFilterVal(event.target.value);
    // };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <div className='flex items-center justify-between !px-2 !py-0 !mt-3'>
                <h1 className='text-[20px] font-[600]'>Home Slider Banners</h1>
                <div className='col w-[35%] !ml-auto flex items-center !justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !text-white btn-sm flex items-center gap-2'><BiExport />Export</Button>
                    <Button className='btn-blue !text-white btn-sm flex items-center btn gap-2'
                        onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add Home Slide'
                        })}>
                        <IoBagAddOutline />Add Home Slides
                    </Button>
                </div>
            </div>


            <div className='card !my-4 !pt-5 !shadow=md sm:rounded-lg !bg-white' >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >

                            <TableRow>
                                <TableCell width={50}>
                                    <Checkbox size='small' />
                                </TableCell>

                                {columns.map((column) => (
                                    <TableCell
                                    width={300}
                                        key={column.minWidth}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={300}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1768425276_Grand_republic_Sale_KV.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        

                                    </div>
                                </TableCell>

                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>

                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </div>
        </>
    )
}

export default HomeSliderBanners