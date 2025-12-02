import React from 'react'
import { Link } from 'react-router-dom';
const BannerBox = (props) => {
    return (
        <div className='box bannerBox overflow-hidden rounded-lg group'style={{ paddingTop: '40px' }}>
            <Link to="/">
            <img src={props.img} className='w-full transition-all group-hover:scale-105 rounded-lg
            group-hover:rotate-1' alt='banner' />
        </Link>
        </div>
    )
}
export default BannerBox;