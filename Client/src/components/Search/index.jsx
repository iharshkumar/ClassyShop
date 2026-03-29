import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import { useNavigate, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Search = () => {

    const context = useContext(MyContext)
    const { searchQuery, setSearchQuery } = context;
    const history = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get("q");
        if (q) {
            setSearchQuery(q);
        } else {
            setSearchQuery("");
        }
    }, [location.search]);

    const onChangeInput = (e) => {
        setSearchQuery(e.target.value);

        const obj = {
            query: e.target.value,
            page: 1,
            limit: 3
        }

        if (e.target.value.length !== 0) {
            postData(`/api/product/search/get`, obj).then((res) => {
                context?.setSearchData(res?.products)
            })
        }
    }

    const search = () => {
        setIsLoading(true);
        if (searchQuery.trim() !== "") {
            setTimeout(() => {
                setIsLoading(false);
                history(`/search?q=${searchQuery}`)
            }, 1000);
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    return (
        <div className="searchBox w-full h-12 bg-[#e5e5e5] rounded-full relative">
            <input
                type="text"
                placeholder="Search for products.."
                className="w-full h-full focus:outline-none bg-transparent pl-20 pr-0 translate-x-5 text-[14px] rounded-full"
                value={searchQuery}
                onKeyDown={handleKeyDown}
                onChange={onChangeInput}
            />
            <Button className="!absolute top-[5px] right-[5px] z-50 !w-[37px] !min-[37px] h-[37px] !rounded-full !text-black"
                onClick={search}>
                {
                    isLoading === true ? <CircularProgress /> : <IoSearch className='text-[#2a2a2a] text-[20px]' />
                }
            </Button>
        </div>
    )
}

export default Search;
