import { Button, Checkbox } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";

import Progress from '../../Components/ProgressBar';
import { MdOutlineModeEdit } from "react-icons/md";
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
import Badge from '../../components/Badge';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';




const columns =
    [
        { id: 'image', label: 'CATEGORY IMAGE', minWidth: 150 },
        { id: 'catName', label: 'CATEGORY NAME', minWidth: 150 },
        { id: 'subCatName', label: 'SUB CATEGORY NAME', minWidth: 400 },
        { id: 'action', label: 'ACTION', minWidth: 100 },
    ];

const SubCategoryList = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [categoryFilterVal, setcategoryFilterVal] = React.useState('');

    const context = useContext(MyContext)

    const handleChangeCatFilter = (event) => {
        setcategoryFilterVal(event.target.value);
    };


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
                <h1 className='text-[20px] font-[600]'>Sub Category List</h1>
                <div className='col w-[35%] !ml-auto flex items-center !justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !text-white btn-sm flex items-center gap-2'><BiExport />Export</Button>
                    <Button className='btn-blue !text-white btn-sm flex items-center btn gap-2'
                        onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add New Sub Category'
                        })}>
                        <IoBagAddOutline />Add New Sub Category
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


                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/brand.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
                                </TableCell>


                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>




                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/electronics.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
                                </TableCell>

                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>



                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        

                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/beauty-product.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>
                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        

                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/footwear.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
                                </TableCell>

                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>

                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                       

                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/medicine.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
                                </TableCell>
                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>

                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                       

                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[80px]'>
                                        <div className='img !w-full !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="/public/jewelry.png"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
                                </TableCell>
                                <TableCell >
                                    <Chip label="Fashion" />
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Chip label="Men" color='primary' />
                                        <Chip label="Women" color='primary' />
                                        <Chip label="Kids" color='primary' />
                                    </div>
                                </TableCell>

                                <TableCell width={50}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                                            <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
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

export default SubCategoryList