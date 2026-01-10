import React, { useContext } from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';
import { MyContext } from '../../App';

const ProductItem = () => {

    const context = useContext(MyContext);

    return (
        <div className='productItem'>
            <div className="productItem__imageWrapper">
                <Link to="/product/84758" className="productItem__imageLink">
                    <div className='productItem__imageContainer'>
                        <img
                            src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/4/444700450699SS131913_3.jpg'
                            alt="Product"
                            className='productItem__image productItem__image--primary'
                        />
                        <img
                            src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/4/444700450699SS131913_2.jpg'
                            alt="Product alternate view"
                            className='!w-full productItem__image productItem__image--secondary'
                        />
                    </div>
                </Link>
                <span className="productItem__discount">
                    10%
                </span>
                <div className='productItem__actions'>
                    <Button className='productItem__actionBtn' title="Quick View" onClick={() => context.setOpenProductDetailsModal(true)}>
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
                    <Link to="/product/84758" className='productItem__link'>
                        Soylent Green
                    </Link>
                </h6>
                <h3 className='productItem__title'>
                    <Link to="/product/84758" className='productItem__link'>
                        Women Multi-Color Floral Pure Cotton Midi Dress
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