import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { FaPlus } from 'react-icons/fa6';
import { Button, Checkbox } from '@mui/material'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Badge from '../../components/Badge'
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';
import Progress from '../../Components/ProgressBar';
import { MdOutlineModeEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BiExport } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";


//const label = {inputProps : {"aria-label":"Checkbox demo"}};
const columns = [
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


// function createData(
//   name,
//   code,
//   population,
//   size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }



const Dashboard = () => {

  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);

    } else {
      setIsOpenOrderedProduct(index);
    }
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [categoryFilterVal, setcategoryFilterVal] = React.useState('');

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


      {/*Front View*/}
      <div className='w-full !py-2 !px-5 !bg-white !border !border-[rgba(0,0,0,0.1)] flex items-center gap-8 !mb-5 
      justify-between !rounded-md'>
        <div className='info'>
          <h1 className='text-[35px] !text-[600] !font-bold leading-10 !mb-3'>Good Morning,<br />
            <span className="inline-flex items-center gap-2">
              Admin
              <img
                src="/wave.png"
                className="w-[40px] inline-block animate-wave"
                alt="wave"
              />
            </span>
          </h1>
          <p>Here's What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className='btn-blue !capitalise gap-3 justify-between'><FaPlus />Add Product</Button>
        </div>

        <img src="/shopDashboard.webp" className='w-[250px]' />
      </div>
      <DashboardBoxes />


      {/*Tailwind CSS Table*/}
      <div className='card !mt-5 !my-2 !shadow=md sm:rounded-lg !bg-white'>
        <div className='flex items-center justify-between !px-5 !py-5'>
          <h1 className='text-[18px] font-[600]'>Products</h1>
        </div>

        <div className='flex items-center w-full !pl-5 justify-between'>
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

          <div className='col w-[29%] !ml-auto flex items-center gap-3 !px-5'>
            <Button className='btn !bg-green-600 !text-white btn-sm flex items-center gap-2'><BiExport/>Export</Button>
            <Button className='btn-blue !text-white btn-sm  flex items-center btn gap-2'><IoBagAddOutline/>Add Product</Button>
          </div>
        </div>


        <div className="relative overflow-x-auto !pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
            <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
              <tr>
                <th scope="col" className="!px-6 !pr-0 !py-3 font-medium" width="10%">
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </th>
                <th scope="col" className="!px-2 !py-3 font-medium whitespace-nowrap">
                  PRODUCT
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  CATEGORY
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  SUB CATEGORY
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  PRICE
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  SALES
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_2.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_6.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_4.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_5.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_3.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_2.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

              <tr className='!odd:bg-white !odd:dark:bg-gray-900 !even:bg-gray-50
              !even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='!px-6 !pr-0 !py-3'>
                  <div className='w-[60px]'>
                    <Checkbox size='small' />
                  </div>
                </td>
                <td className='!px-2 !py-3'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img !w-[65px] !h-[65px] !rounded-md !overflow-hidden group'>
                      <Link to="/product/45745">

                        <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_6.jpg"
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
                </td>

                <td className='!px-6 !py-3'>
                  Fashion
                </td>

                <td className='!px-6 !py-3'>
                  Women
                </td>
                <td className='!px-6 !py-3'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>
                      ₹400.00</span>
                    <span className='price text-blue-500 text-[15px] font-[600]'>
                      ₹500.00</span>
                  </div>
                </td>

                <td className='!px-6 !py-3'>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>
                      234
                    </span>
                    sales
                  </p>
                  <Progress value={50} type="warning" />
                </td>

                <td className='!px-6 !py-3'>
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                  </div>
                </td>

              </tr>

            </tbody>

          </table>
        </div>

        <div className='flex items-center !justify-end !pt-2 !pb-5'>
          <Pagination count={10} color='primary' />
        </div>

      </div >


      {/*Material UI Table*/}
      < div className='card !mt-5  !shadow=md sm:rounded-lg !bg-white' >
        <div className='flex items-center justify-between !px-5 !py-4 !mb-2'>
          <h1 className='text-[18px] font-[600]'>Products</h1>
        </div>

        <div className='flex items-center w-full !pl-5 justify-between'>
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

          <div className='col w-[29%] !ml-auto flex items-center gap-3 !px-5'>
            <Button className='btn !bg-green-600 !text-white btn-sm flex items-center gap-2'><BiExport/>Export</Button>
            <Button className='btn-blue !text-white btn-sm  flex items-center btn gap-2'><IoBagAddOutline/>Add Product</Button>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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
                    <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <MdOutlineModeEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <FiEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>


                    <Tooltip title="Delete" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]'>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
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

      </div >

      {/*Order Section*/}
      < div className='card !mt-5 !my-2 !shadow=md sm:rounded-lg !bg-white' >
        <div className='flex items-center justify-between !px-5 !py-5'>
          <h1 className='text-[18px] font-[600]'>Recent Orders</h1>
        </div>


        <div className="relative overflow-x-auto bg-white !shadow-xs rounded-md !border !border-[rgba(0,0,0,0.1)] !pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
            <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
              <tr>
                <th scope="col" className="!px-6 !py-3 font-medium">
                  &nbsp;
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Pin Code
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  User ID
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                  Date
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                <td className="!px-6 !py-4">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'
                    onClick={() => isShowOrderedProduct(0)}>
                    {
                      isOpenOrderedProduct === 0 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>6732kjhfjksah32ggfd</span>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>pay_id63r87265sgf</span>
                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  Harsh Kumar
                </td>

                <td className="!px-6 !py-4">
                  3562372422
                </td>

                <td className="!px-6 !py-4">
                  <span className='block w-[400px]'> Sector 17, Buddha colony, Uttam Nagar, NewDelhi, 100001, India</span>
                </td>

                <td className="!px-6 !py-4">
                  571401
                </td>
                <td className="!px-6 !py-4">
                  5000.00
                </td>

                <td className="!px-6 !py-4">
                  iaefweu@gmail.com
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>763589263hjcgdhs9089</span>
                </td>

                <td className="!px-6 !py-4">
                  <Badge status="pending" />

                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  2024-12-04
                </td>
              </tr>


              {
                isOpenOrderedProduct === 0 && (
                  <tr>
                    <td className='!pl-25 !py-4' colSpan="12">
                      <div className="relative overflow-x-auto bg-white !shadow-xs rounded-md !border !border-[rgba(0,0,0,0.1)]">
                        <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
                          <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
                            <tr>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Id
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Details
                              </th>

                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Image
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Quantity
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Price
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Sub Total
                              </th>


                            </tr>
                          </thead>
                          <tbody>
                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>

                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>


                            <tr>
                              <td className='bg-[#f1f1f1]' colSpan="12">

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}



              <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                <td className="!px-6 !py-4">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'
                    onClick={() => isShowOrderedProduct(1)}>
                    {
                      isOpenOrderedProduct === 1 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>6732kjhfjksah32ggfd</span>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>pay_id63r87265sgf</span>
                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  Harsh Kumar
                </td>

                <td className="!px-6 !py-4">
                  3562372422
                </td>

                <td className="!px-6 !py-4">
                  <span className='block w-[400px]'> Sector 17, Buddha colony, Uttam Nagar, NewDelhi, 100001, India</span>
                </td>

                <td className="!px-6 !py-4">
                  571401
                </td>
                <td className="!px-6 !py-4">
                  5000.00
                </td>

                <td className="!px-6 !py-4">
                  iaefweu@gmail.com
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>763589263hjcgdhs9089</span>
                </td>

                <td className="!px-6 !py-4">
                  <Badge status="pending" />

                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  2024-12-04
                </td>
              </tr>


              {
                isOpenOrderedProduct === 1 && (
                  <tr>
                    <td className='!pl-25 !py-4' colSpan="12">
                      <div className="relative overflow-x-auto bg-white !shadow-xs rounded-md !border !border-[rgba(0,0,0,0.1)]">
                        <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
                          <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
                            <tr>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Id
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Details
                              </th>

                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Image
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Quantity
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Price
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Sub Total
                              </th>


                            </tr>
                          </thead>
                          <tbody>
                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>

                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>


                            <tr>
                              <td className='bg-[#f1f1f1]' colSpan="12">

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}



              <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                <td className="!px-6 !py-4">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'
                    onClick={() => isShowOrderedProduct(2)}>
                    {
                      isOpenOrderedProduct === 2 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>6732kjhfjksah32ggfd</span>
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>pay_id63r87265sgf</span>
                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  Harsh Kumar
                </td>

                <td className="!px-6 !py-4">
                  3562372422
                </td>

                <td className="!px-6 !py-4">
                  <span className='block w-[400px]'> Sector 17, Buddha colony, Uttam Nagar, NewDelhi, 100001, India</span>
                </td>

                <td className="!px-6 !py-4">
                  571401
                </td>
                <td className="!px-6 !py-4">
                  5000.00
                </td>

                <td className="!px-6 !py-4">
                  iaefweu@gmail.com
                </td>

                <td className="!px-6 !py-4">
                  <span className='text-[#3872fa]'>763589263hjcgdhs9089</span>
                </td>

                <td className="!px-6 !py-4">
                  <Badge status="pending" />

                </td>

                <td className="!px-6 !py-4 whitespace-nowrap">
                  2024-12-04
                </td>
              </tr>


              {
                isOpenOrderedProduct === 2 && (
                  <tr>
                    <td className='!pl-25 !py-4' colSpan="12">
                      <div className="relative overflow-x-auto bg-white !shadow-xs rounded-md !border !border-[rgba(0,0,0,0.1)]">
                        <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
                          <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
                            <tr>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Id
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Product Details
                              </th>

                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Image
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Quantity
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Price
                              </th>
                              <th scope="col" className="!px-6 !py-3 font-medium whitespace-nowrap">
                                Sub Total
                              </th>


                            </tr>
                          </thead>
                          <tbody>
                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>

                            <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.1)] hover:!bg-gray-50">
                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>6732kjhfjksah32ggfd</span>
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='text-gray-600'>Cotton Set-Tie & Dye...</span>
                              </td>

                              <td className="!px-6 !py-4 whitespace-nowrap">
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill"
                                  className='w-[40px] h-[40px] object-cover whitespace-nowrap !rounded-md' />                                                                </td>

                              <td className="!px-6 !py-4">
                                2
                              </td>

                              <td className="!px-6 !py-4">
                                <span className='block'> 3000.00</span>
                              </td>

                              <td className="!px-6 !py-4">
                                3000.00
                              </td>
                            </tr>


                            <tr>
                              <td className='bg-[#f1f1f1]' colSpan="12">

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>


      </div >
    </>
  )
}

export default Dashboard