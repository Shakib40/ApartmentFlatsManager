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

        fetch('http://localhost:4500/flat')
            .then((response) => response.json())
            .then((data) => {
                dispatch(getproductsSuccess(data))
                setProducts(data.products)
                console.log("data", data)
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err))
            })
    }

    return (
        <div>List</div>
    )
}
