import React from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';


const ProductItemListView = () => {
    return (
        <div className='productItem bg-white border border-gray-200 rounded-lg p-4 mb-4 flex gap-4' style={{flexDirection: 'row', height: 'auto'}}>
            <div className="productItem__imageWrapper flex-shrink-0" style={{width: '250px', height: '250px', borderRadius: '12px'}}>
                <Link to="/" className="productItem__imageLink">
                    <div className='productItem__imageContainer'>
                        <img
                            src='https://www.yellowbrick.co/wp-content/uploads/2023/08/fashion_blog_styling_blog_two-models-min-1024x683.jpg'
                            alt="Product"
                            className='productItem__image productItem__image--primary'
                        />
                        <img
                            src='https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2239341361.jpg?c=16x9&q=w_1479,c_fill'
                            alt="Product alternate view"
                            className='productItem__image productItem__image--secondary'
                        />
                    </div>
                </Link>
                <span className="productItem__discount">
                    10%
                </span>
                <div className='productItem__actions'>
                    <Button className='productItem__actionBtn' title="Quick View">
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
                        <Link to="/" className='productItem__link'>
                            Soylent Green
                        </Link>
                    </h6>
                    <h3 className='productItem__title'>
                        <Link to="/" className='productItem__link'>
                            Siril Georgette Pink Color Saree with Blouse piece
                        </Link>
                    </h3>
                    <p className='text-sm text-gray-600 mb-2 mt-2 leading-relaxed'>
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot.
                    </p>
                    <div className='productItem__rating mt-2'>
                        <Rating name="size-small" defaultValue={4} size="small" readOnly />
                    </div>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <div className='productItem__priceWrapper'>
                        <span className='productItem__oldPrice'>
                            $50.00
                        </span>
                        <span className='productItem__price'>
                            $58.00
                        </span>
                    </div>

                    <Button
                        className='!bg-red-500 !text-white !px-6 !py-2 hover:!bg-red-600 rounded-full flex items-center gap-2'
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
