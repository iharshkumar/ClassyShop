import { Button, Checkbox } from '@mui/material'
import React, { useState } from 'react'
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
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";





const columns =
    [
        { id: 'userImg', label: 'USER IMAGE', minWidth: 80 },
        { id: 'userName', label: 'USER NAME', minWidth: 80 },
        { id: 'userEmail', label: 'USER EMAIL', minWidth: 100 },
        {
            id: 'userPh',
            label: 'USER PHONE NO',
            minWidth: 130
        }
    ];

const Users = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    // const context = useContext(MyContext)




    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>



            <div className='card my-4 !pt-5 !shadow=md sm:rounded-lg !bg-white' >

                <div className='flex items-center w-full !px-5 justify-between'>
                    <div className='col !w-[40%] '>
                        <h1 className='text-[18px] font-[600]'>User List</h1>
                    </div>

                    <div className='col w-[40%] !mb-2 !ml-auto'>
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
                                    <div className='flex items-center gap-4 w-[100px]'>
                                        <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                                            <Link to="/product/45745">

                                                <img src="https://mui.com/static/images/avatar/1.jpg"
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Harsh Kumar
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2 '>
                                        <MdOutlineMail />harsh@gmail.com
                                    </span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2 '>
                                        <FaPhone />5484881667
                                    </span>
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

export default Users