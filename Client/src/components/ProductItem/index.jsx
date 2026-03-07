import React, { useContext } from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';
import { MyContext } from '../../App';
import { InsertEmoticonSharp } from '@mui/icons-material';

const ProductItem = (props) => {

    const context = useContext(MyContext);

    return (
        <div className='productItem '>
            <div className="productItem__imageWrapper">
                <Link to={`/product/${props?.item?._id}`} className="productItem__imageLink">
                    <div className='productItem__imageContainer'>
                        <img
                            src={props?.item?.images[0]}
                            alt="Product"
                            className='productItem__image productItem__image--primary'
                        />
                        <img
                            src={props?.item?.images[1]}
                            alt="Product alternate view"
                            className='!w-full productItem__image productItem__image--secondary'
                        />
                    </div>
                </Link>
                <span className="productItem__discount">
                    {props?.item?.discount}%
                </span>
                <div className='productItem__actions'>
                    <Button className='productItem__actionBtn' title="Quick View" onClick={() => context.handleOpenProductDetailsModal(true, props?.item)}>
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
                <h6 className='productItem__category !font-[400]'>
                    <span className='productItem__link'>
                        {props?.item?.brand}
                    </span>
                </h6>
                <h3 className='productItem__title'>
                    <Link to={`/product/${props?.item?._id}`} className='productItem__link'>
                        {props?.item?.name}
                    </Link>
                </h3>
                <div className='productItem__rating'>
                    <Rating name="size-small" defaultValue={props?.item?.rating} precision={0.5} size="small" readOnly />
                </div>
                <div className='productItem__priceWrapper'>
                    <span className='productItem__oldPrice'>
                        &#8377; {props?.item?.oldPrice}
                    </span>
                    <span className='productItem__price'>
                        &#8377; {props?.item?.price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;