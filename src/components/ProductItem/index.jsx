import React from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';


const ProductItem = () => {
    return (
        <div className='productItem'>
            <div className="productItem__imageWrapper">
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
            <div className='productItem__info'>
                <h6 className='productItem__category'>
                    <Link to="/" className='productItem__link'>
                        Soylent Green
                    </Link>
                </h6>
                <h3 className='productItem__title'>
                    <Link to="/" className='productItem__link'>
                        Women's Fashionable Clothes
                    </Link>
                </h3>
                <div className='productItem__rating'>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>
                <div className='productItem__priceWrapper'>
                    <span className='productItem__oldPrice'>
                        $45.00
                    </span>
                    <span className='productItem__price'>
                        $34.00
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;