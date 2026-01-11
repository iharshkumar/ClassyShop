import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { FaPlus } from 'react-icons/fa6';
import { Button } from '@mui/material'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Badge from '../../components/Badge'
import { Collapse } from 'react-collapse';

const Dashboard = () => {

  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);

    } else {
      setIsOpenOrderedProduct(index);
    }
  }
  return (
    <>
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


      <div className='card !mt-5 !my-2 !shadow=md sm:rounded-lg !bg-white'>
        <div className='flex items-center justify-between !px-5 !py-5'>
          <h1 className='text-[18px] font-[600]'>Recent Orders</h1>
        </div>


        <div className="relative overflow-x-auto bg-white !shadow-xs rounded-md !border !border-[rgba(0,0,0,0.1)] !pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
            <thead className="text-sm text-body bg-[#f1f1f1] !border-b !border-[rgba(0,0,0,0.1)]">
              <tr>
                <th scope="col" class="!px-6 !py-3 font-medium">
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
      </div>
    </>
  )
}

export default Dashboard