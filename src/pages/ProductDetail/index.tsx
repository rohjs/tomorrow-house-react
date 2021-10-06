import React from 'react'
import camelCase from 'camelcase-keys'

import { useAppDispatch, useFirebase, useMount } from 'src/hooks'
import { setProduct } from 'src/app/product/detail'

import ProductDetailOverview from './Overview'
import ProductDetailSpec from './ProductSpec'
import ProductDetailTab from './ProductTab'

const ProductDetailPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { getData } = useFirebase()

  const fetchProduct = () => {
    getData(`products/0`).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(setProduct(camelCase(snapshot.val(), { deep: true })))
      }
    })
  }

  useMount(fetchProduct)

  return (
    <main>
      <ProductDetailOverview />
      <ProductDetailTab />
      <ProductDetailSpec />
    </main>
  )
}

export default ProductDetailPage
