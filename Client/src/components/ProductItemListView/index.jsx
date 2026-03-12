import React, { useContext } from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { MyContext } from '../../App';

const ProductItemListView = (props) => {

    const context = useContext(MyContext);


    return (
        <div className='productItem bg-white border border-gray-200 rounded-lg p-4 mb-4 flex gap-4' style={{ flexDirection: 'row', height: 'auto' }}>
            <div className="productItem__imageWrapper flex-shrink-0" style={{ width: '250px', height: '250px', borderRadius: '12px' }}>
                <Link to={`/product/${props?.item?._id}`} className="productItem__imageLink">
                    <div className='productItem__imageContainer'>
                        <img
                            src={props?.item?.images?.[0] || 'https://via.placeholder.com/300'}
                            alt={props?.item?.name}
                            className='productItem__image productItem__image--primary'
                        />
                        <img
                            src={props?.item?.images?.[1] || props?.item?.images?.[0] || 'https://via.placeholder.com/300'}
                            alt={props?.item?.name}
                            className='productItem__image productItem__image--secondary'
                        />
                    </div>
                </Link>

                <span className="badge badge-primary">{props?.item?.discount}%</span>

                <div className='productItem__actions'>
                    <Button className='productItem__actionBtn' title="Quick View" onClick={() => context.handleOpenProductDetailsModal(true, props.item)}>
                        <MdZoomOutMap />
                    </Button>
                    <Button className='productItem__actionBtn' title="Compare">
                        <IoGitCompareOutline />
                    </Button>
                    <Button className='productItem__actionBtn' title="Add to Wishlist">
                        <FaRegHeart />
                    </Button>
                </div>
            </div>

            <div className='productItem__info flex-1 flex flex-col justify-between py-2'>
                <div>
                    <h6 className='productItem__category'>
                        <Link to={`/products?catId=${props?.item?.catId}`} className='productItem__link'>
                            {props?.item?.brand || 'Brand'}
                        </Link>
                    </h6>
                    <h3 className='productItem__title'>
                        <Link to={`/product/${props?.item?._id}`} className='productItem__link'>
                            {props?.item?.name}
                        </Link>
                    </h3>

                    <p className='text-sm text-gray-600 mb-2 mt-2 leading-relaxed'>
                        {props?.item?.description?.slice(0, 500)}{props?.item?.description?.length > 150 ? '...' : ''}
                    </p>
                    <div className='productItem__rating mt-2'>
                        <Rating name="size-small" defaultValue={props?.item?.rating || 0} size="small" readOnly />
                    </div>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <div className='productItem__priceWrapper'>
                        <span className='productItem__oldPrice'>
                            &#8377; {props?.item?.oldPrice}
                        </span>
                        <span className='productItem__price'>
                            &#8377; {props?.item?.price}
                        </span>
                    </div>

                    <Button
                        className='btn-org btn-border text-red !px-6 !py-2 hover:!text-white rounded-full flex items-center gap-2'
                        title="Add to Cart"
                    >
                        <FaShoppingCart />
                        <span className='text-sm'>Add to Cart</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItemListView;
