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
        { id: 'product', label: 'PRODUCT', minWidth: 150 },
        { id: 'category', label: 'CATEGORY', minWidth: 100 },
        { id: 'subcategory', label: 'SUB CATEGORY', minWidth: 100 },
        {
            id: 'price',
            label: 'PRICE',
            minWidth: 100
        },
        {
            id: 'rating',
            label: 'RATING',
            minWidth: 80,
        },
        {
            id: 'action',
            label: 'ACTION',
            minWidth: 120,
        },
    ];

const Products = () => {
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
                <h1 className='text-[20px] font-[600]'>Products</h1>
                <div className='col w-[29%] !ml-auto flex items-center !justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !text-white btn-sm flex items-center gap-2'><BiExport />Export</Button>
                    <Button className='btn-blue !text-white btn-sm flex items-center btn gap-2'
                        onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add Product'
                        })}>
                        <IoBagAddOutline />Add Product
                    </Button>
                </div>
            </div>


            <div className='card !my-4 !pt-5 !shadow=md sm:rounded-lg !bg-white' >

                <div className='flex items-center w-full !px-5 justify-between'>
                    <div className='col w-[20%] '>
                        <h4 className='font-[600] text-[12px] !mb-2'>Category by</h4>
                        <Select
                            className='w-full !mb-2'
                            size='small'
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kids</MenuItem>
                        </Select>
                    </div>

                    <div className='col w-[20%] !ml-auto'>
                        <SearchBox />
                    </div>


                </div>


                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >

                            <TableRow>
                                <TableCell >
                                    <Checkbox size='small' />
                                </TableCell>

                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
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
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox size='small' />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>

                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[14px] leading-4 hover:text-blue-500 '>
                                                <Link to="/product/45745">
                                                    Teal Printed Crepe Co-Ord Set Diwalicious
                                                </Link>
                                            </h3>
                                            <span className='text-[12px]'>
                                                Gajra Gang
                                            </span>
                                        </div>

                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    FASHION
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    WOMEN
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex gap-1 flex-col'>
                                        <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                                            ₹400.00</span>
                                        <span className='price text-blue-500 text-[15px] font-[600]'>
                                            ₹500.00</span>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className='text-[14px] w-[100px]'>
                                        <span className='font-[600]'>
                                            234
                                        </span>
                                        sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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

export default Products