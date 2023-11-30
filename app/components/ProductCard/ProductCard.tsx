'use client'; // if need interactivity
import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <button onClick={() => console.log('click')}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
