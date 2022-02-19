import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListCard } from './ListCard.jsx'
import styles from './Flat.module.css'

import {
    getproductsLoading,
    getproductsSuccess,
    productsDetailsFail,
} from '../Features/Product/action'

export const List = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const {
        loading,
        filteredflatsCount,
        resultPerPage,
        flatsCount,
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
                setProducts(data.flats)
                console.log("data", data)
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err))
            })
    }

    return (
        <section className={styles.bigcontainer}>

            <div className={styles.leftw}></div>

            <div className={styles.righty}>
                <div className={styles.rightw}>
                    {products &&
                        products.map((product) => (
                            <ListCard key={product._id} product={product} />
                        ))}
                </div>
            </div>
        </section>
    )
}
