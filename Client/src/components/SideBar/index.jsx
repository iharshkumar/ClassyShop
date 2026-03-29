import React, { useContext, useEffect, useState, useMemo } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../Sidebar/style.css';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from 'react-icons/fa6';
import Button from '@mui/material/Button';
import { FaAngleUp } from 'react-icons/fa6';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import { MyContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchDataFromApi, postData } from '../../utils/api';


const SideBar = (props) => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
    const context = useContext(MyContext);
    const [price, setPrice] = useState([0, 60000]);
    const [selectedCatIds, setSelectedCatIds] = useState([]);
    const [sizeData, setSizeData] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [rating, setRating] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const getUrlCategoryIds = () => {
        const queryParameters = new URLSearchParams(location.search);

        const ids = {
            catId: [],
            subCatId: [],
            thirdLevelCatId: [],
            size: [],
        };

        // support multi-select via repeated query params: ?catId=a&catId=b
        ids.catId = queryParameters.getAll("catId").filter(Boolean);
        ids.size = queryParameters.getAll("size").filter(Boolean);

        const subCategoryId = queryParameters.get("subCatId");
        if (subCategoryId) ids.subCatId = [subCategoryId];

        const thirdCategoryId = queryParameters.get("thirdLevelCatId");
        if (thirdCategoryId) ids.thirdLevelCatId = [thirdCategoryId];

        ids.minPrice = queryParameters.get("minPrice") ? Number(queryParameters.get("minPrice")) : 0;
        ids.maxPrice = queryParameters.get("maxPrice") ? Number(queryParameters.get("maxPrice")) : 60000;
        ids.rating = queryParameters.get("rating") ? Number(queryParameters.get("rating")) : null;
        ids.page = queryParameters.get("page") ? Number(queryParameters.get("page")) : 1;

        const q = queryParameters.get("q");
        if (q) ids.q = q;

        return ids;
    };

    const updateUrl = (updatedParams) => {
        const params = new URLSearchParams(window.location.search);

        // Always clear search on filter change
        params.delete("q");
        context?.setSearchQuery("");

        // Reset page to 1 and scroll to top on ANY filter change EXCEPT for page itself
        if (!updatedParams.hasOwnProperty("page")) {
            params.delete("page");
            props?.setPage?.(1); // sync with parent local state if any
        }

        Object.keys(updatedParams).forEach(key => {
            params.delete(key);
            const value = updatedParams[key];
            if (Array.isArray(value)) {
                value.forEach(v => params.append(key, v));
            } else if (value !== null && value !== undefined && value !== "") {
                params.set(key, value);
            }
        });

        const nextSearch = params.toString();
        navigate(`${location.pathname}${nextSearch ? `?${nextSearch}` : ""}`, { replace: true });
    };

    const setCatIdsInUrl = (catIds) => {
        updateUrl({ catId: catIds, subCatId: "", thirdLevelCatId: "" });
    };

    const setSizeInUrl = (sizes) => {
        updateUrl({ size: sizes });
    };

    const setPriceInUrl = (priceObj) => {
        updateUrl({ minPrice: priceObj[0], maxPrice: priceObj[1] });
    };

    const setRatingInUrl = (ratingVal) => {
        updateUrl({ rating: ratingVal });
    };

    const setPageInUrl = (pageVal) => {
        updateUrl({ page: pageVal });
    };

    const filter = useMemo(() => {
        const urlIds = getUrlCategoryIds();

        // Sync local states with URL for UI components
        if (JSON.stringify(urlIds.catId) !== JSON.stringify(selectedCatIds)) setSelectedCatIds(urlIds.catId);
        if (JSON.stringify(urlIds.size) !== JSON.stringify(selectedSizes)) setSelectedSizes(urlIds.size);
        if (urlIds.minPrice !== price[0] || urlIds.maxPrice !== price[1]) setPrice([urlIds.minPrice, urlIds.maxPrice]);
        if (urlIds.rating !== rating) setRating(urlIds.rating);

        return {
            catId: urlIds.catId,
            subCatId: urlIds.subCatId,
            thirdLevelCatId: urlIds.thirdLevelCatId,
            size: urlIds.size,
            minPrice: urlIds.minPrice,
            maxPrice: urlIds.maxPrice,
            rating: urlIds.rating || '',
            availability: '',
            page: urlIds.page || 1,
            limit: 10,
            q: urlIds.q || ''
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search, props.page]);


    const filtersData = async () => {
        props?.setIsLoading(true);

        postData(`/api/product/filter`, filter).then((res) => {
            props?.setProductsData(res?.products || []);
            props?.setIsLoading(false);
            props?.setTotalPages(res?.totalPages || 1);
            window.scrollTo(0, 0);
        })

    };


    useEffect(() => {
        filtersData();
    }, [filter]);

    useEffect(() => {
        fetchDataFromApi(`/api/product/productSIZE/get`).then((res) => {
            if (res?.error === false) {
                setSizeData(res?.data || []);
            }
        });
    }, []);

    return (
        <aside className='sidebar !py-3 sticky top-[40px] z-[40]'>
            <div className='box w-full bg-white !p-3 rounded-lg' >
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Shop By Category
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }
                    </Button>
                </h3>

                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className='scroll relative -left-[10px] !px-4'>
                        {
                            context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                                return (
                                    <FormGroup key={index} className='flex flex-col'>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    key={index}
                                                    name='catId'
                                                    value={item?._id}
                                                    onChange={() => {
                                                        context?.setSearchData([]);
                                                        setSelectedCatIds((prev) => {
                                                            const next = prev.includes(item?._id)
                                                                ? prev.filter((id) => id !== item?._id)
                                                                : [item?._id, ...prev];
                                                            setCatIdsInUrl(next);
                                                            return next;
                                                        });
                                                    }}
                                                    checked={filter.catId?.includes(item?._id)}
                                                />
                                            }
                                            label={item?.name}
                                        />
                                    </FormGroup>
                                )
                            })
                        }
                    </div>
                </Collapse>
            </div>
            <div className='box bg-white !p-3 rounded-lg' >
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Availability
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }


                    </Button>
                </h3>

                <Collapse isOpened={isOpenAvailFilter}>
                    <div className='scroll relative -left-[10px] !px-4' >
                        <FormGroup className='flex flex-col'>
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Available (17)"
                            />
                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="In Stock (10)"
                            />

                            <FormControlLabel control={<Checkbox
                                size='small' />}
                                label="Not Available (1)"
                            />
                        </FormGroup>
                    </div>
                </Collapse>
            </div>


            <div className='box bg-white !p-3 rounded-lg' >
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Size
                    <Button className='!w-[30%] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
                        onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />

                        }


                    </Button>
                </h3>

                <Collapse isOpened={isOpenSizeFilter}>
                    <div className='scroll relative -left-[10px] !px-4'>
                        <FormGroup style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px' }}>
                            {
                                sizeData?.length !== 0 && sizeData?.map((item, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    size='small'
                                                    name='size'
                                                    value={item?.name}
                                                    onChange={() => {
                                                        context?.setSearchData([]);
                                                        setSelectedSizes((prev) => {
                                                            const next = prev.includes(item?.name)
                                                                ? prev.filter((s) => s !== item?.name)
                                                                : [...prev, item?.name];
                                                            setSizeInUrl(next);
                                                            return next;
                                                        });
                                                    }}
                                                    checked={filter.size?.includes(item?.name)}
                                                />
                                            }
                                            label={item?.name}
                                            style={{ margin: 0 }}
                                        />
                                    )
                                })
                            }
                        </FormGroup>
                    </div>
                </Collapse>
            </div>

            <div className='box !w-[90%] !bg-white !p-3 rounded-lg'>
                <h3 className='!w-full !mb-3 text-[16px] font-[600] flex items-center'>
                    Filter by Price
                </h3>

                <RangeSlider value={price} onInput={setPrice} onAfterChange={() => setPriceInUrl(price)} min={100} max={60000} step={5} />
                <div className='flex !pt-3 !pb-2 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong className='text-dark'>Rs: {price[0]}  </strong>
                    </span>
                    <span className='text-[13px]'>
                        To: <strong className='text-dark'>Rs: {price[1]}</strong>
                    </span>
                </div>

            </div>

            <div className='box bg-white !p-3 rounded-lg !px-4'>
                <h3 className='!w-full mb-3 text-[16px] font-[600] flex items-center'>
                    Filter by Rating
                </h3>
                <div className='w-full'>
                    <Rating
                        name="product-rating-filter"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRatingInUrl(newValue);
                        }}
                        size="small"
                    />
                </div>
            </div>

        </aside>

    )
}

export default SideBar;