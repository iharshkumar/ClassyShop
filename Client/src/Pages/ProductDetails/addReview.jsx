import React from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../App';
import { fetchDataFromApi, postData } from '../../utils/api';

const Reviews = (props) => {
    const [reviewsData, setReviewsData] = useState([]);
    const context = useContext(MyContext);
    const [reviews, setReviews] = useState({
        image: '',
        userName: '',
        rating: 1,
        review: '',
        userId: '',
        productId: ''
    });

    useEffect(() => {
        setReviews(() => ({
            ...reviews,
            image: context?.userData?.avatar,
            userName: context?.userData?.name,
            userId: context?.userData?._id,
            productId: props?.productId
        }));
    }, [context?.userData, props]);

    const onChangeInput = (e) => {
        setReviews(() => ({
            ...reviews,
            review: e.target.value
        }));
    };

    const addReview = (e) => {
        e.preventDefault();

        if (reviews?.review !== '') {
            postData('/api/user/addReview', reviews).then((res) => {
                if (res?.error === false) {
                    context.alertBox("success", res?.message);
                    setReviews(() => ({
                        ...reviews,
                        review: '',
                        rating: 1
                    }));

                    getReviews();
                } else {
                    context.alertBox("error", res?.message);
                }
            })
        } else {
            context.alertBox("error", "Please enter a review");
        }

    }

    const getReviews = () => {
        fetchDataFromApi(`/api/user/getReview?productId=${props?.productId}`).then((res) => {
            if (res?.error === false) {
                setReviewsData(res?.reviews);
                props?.setReviewCount(res?.reviews?.length);
            }
        })
    }

    useEffect(() => {
        getReviews();
    }, [props?.productId]);
    return (
        <div className='w-full productReviewContainer'>
            <h2 className='text-[18px]'>Customer question & Answers</h2>
            {
                reviewsData?.length !== 0 &&
                <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5 !pr-5'>
                    {
                        reviewsData?.map((review, index) => {
                            return (
                                <div key={index} className='review !pt-5 w-full flex items-center justify-between !pb-5 !border-b !border-[rgba(0,0,0,0.1)]'>
                                    <div className='info w-[60%] flex items-center gap-3'>
                                        <div className='img w-[90px] h-[90px] overflow-hidden !rounded-full '>
                                            <img src={review?.image}
                                                className='w-full' />
                                        </div>
                                        <div className='w-[80%]'>
                                            <h4 className='text-[16px]'>{review?.userName}</h4>
                                            <h5 className='text-[13px] !mb-0'>{review?.createdAt.split('T')[0]}</h5>
                                            <p className='!mt-0 !mb-0'>{review?.review}</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small"
                                        value={review?.rating}
                                        readOnly />
                                </div>
                            )
                        })
                    }
                </div>
            }



            <br />

            <div className='reviewForm !bg-[#f1f1f1] !p-4 !rounded-md'>
                <h2 className='text-[18px]'>Add a Review </h2>
                <form className='w-full !mt-5' onSubmit={addReview}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write a Review.."
                        className='w-full !mb-6'
                        onChange={onChangeInput}
                        name="review"
                        multiline
                        rows={6}
                        value={reviews?.review}
                    />
                    <br />
                    <Rating name="size-small"
                        value={reviews?.rating}
                        onChange={(event, newValue) => {
                            setReviews(() => ({
                                ...reviews,
                                rating: newValue
                            }));
                        }} />
                    <div className='flex items-center !mt-5'>
                        <Button type='submit' className='btn-org !rounded-lg'>Submit Review</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reviews