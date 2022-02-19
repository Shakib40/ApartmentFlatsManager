import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styles from './Flat.module.css'

export const ListCard = ({ product }) => {
    let navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/flat/${product._id}`)
    }

    return (
        <div onClick={navigatePage}>

            <div className={styles.prod}>
                {/* <HoverImage
                    src={product.images[0]}
                    hoverSrc={product.images[1]}
                    className={styles.image}
                /> */}
            </div>

            <div className={styles.nacat}>
                <h5>{product.name.substring(0, 26)}</h5>
                <p>{product.category}</p>
                <p>INR {product.price}</p>
                <p>RATING {product.ratings}</p>
            </div>

        </div>

    )
}
