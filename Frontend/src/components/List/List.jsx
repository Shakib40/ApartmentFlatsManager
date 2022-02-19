import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getproductsLoading,
    getproductsSuccess,
    productsDetailsFail,
} from '../../Features/Product/action'

export const List = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    // console.log("Products", products);

    const {
        loading,
        filteredProductsCount,
        resultPerPage,
        productsCount,
    } = useSelector((state) => state.productsState)

    useEffect(() => {
        getData()
    }, [dispatch])

    const getData = () => {
        dispatch(getproductsLoading())

        let link = 'http://localhost:4500/flat'
        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                dispatch(getproductsSuccess(data))
                setProducts(data.products)

            })
            .catch((err) => {
                dispatch(productsDetailsFail(err))
                console.log(err)
            })
    }

    return (
        <div>List</div>
    )
}
