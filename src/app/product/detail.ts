import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { formatPrice } from 'src/utils/num'
import { getStoreCategoryUrl } from 'src/utils/url'

interface ProductDetail {
  availableDownloadCoupons: null
  point: Product.Point
  brand: Product.Brand
  cards: Product.Card[]
  categories: Product.Category[]
  deliveryFee: Product.DeliveryFee
  deliveryRestrict: Product.DeliveryRestrict
  depthLevel: number
  description: string[]
  extraOptions: Product.ExtraOption[]
  firstDepthName: string
  freeDelivery: boolean
  hasAssemblingOption: boolean
  hasMemoOption: boolean
  information: Product.Informaton[]
  name: string
  options: Product.Option[]
  originalPrice: number
  qaCount: number
  refundExchangeInfo: Product.RefundExchangeInfo
  reviewAvg: number
  reviewCount: number
  scrapCount: number
  secondDepthName: string
  selling: boolean
  sellingCost: number
  sellingPrice: number
  shareCount: number
  sizeWidth: number
  soldOut: boolean
  subImages: string[]
  usedCardCount: number
  viewCount: number
  wishCount: number
}

interface ProductDetailState extends ProductDetail {}

const INITIAL_STATE: ProductDetailState = {
  availableDownloadCoupons: null,
  point: {
    value: 0,
    reason: '',
    percentage: 0,
  },
  brand: {
    exist: false,
    id: 0,
    introduction: null,
    name: '',
    profileImgUrl: null,
  },
  cards: [],
  categories: [],
  deliveryFee: {
    backwoodsFee: 0,
    fee: 0,
    freeThreshold: 0,
    isRegionalDeliveryFee: false,
    nativeType: 0,
    payAt: 0,
    type: 0,
  },
  deliveryRestrict: {
    deliveryEtc: '',
    deliveryOutOfCapital: false,
    deliveryToBackwoods: false,
    deliveryToJeju: false,
  },
  depthLevel: 1,
  description: [],
  extraOptions: [],
  firstDepthName: '',
  freeDelivery: false,
  hasAssemblingOption: false,
  hasMemoOption: false,
  information: [],
  name: '',
  options: [],
  originalPrice: 0,
  qaCount: 0,
  refundExchangeInfo: {
    address: '',
    exchangeFee: 0,
    refundFee: 0,
  },
  reviewAvg: 0,
  reviewCount: 0,
  scrapCount: 0,
  secondDepthName: '',
  selling: false,
  sellingCost: 0,
  sellingPrice: 0,
  shareCount: 0,
  sizeWidth: 0,
  soldOut: false,
  subImages: [],
  usedCardCount: 0,
  viewCount: 0,
  wishCount: 0,
}

const productDetailSlice = createSlice({
  name: 'product/detail',
  initialState: INITIAL_STATE,
  reducers: {
    setProduct: (
      state: ProductDetailState,
      action: PayloadAction<ProductDetail>
    ) => {
      state.availableDownloadCoupons = action.payload.availableDownloadCoupons
      state.point = action.payload.point
      state.brand = action.payload.brand
      state.cards = action.payload.cards
      state.categories = action.payload.categories
      state.deliveryFee = action.payload.deliveryFee
      state.deliveryRestrict = action.payload.deliveryRestrict
      state.depthLevel = action.payload.depthLevel
      state.description = action.payload.description
      state.extraOptions = action.payload.extraOptions
      state.firstDepthName = action.payload.firstDepthName
      state.freeDelivery = action.payload.freeDelivery
      state.hasAssemblingOption = action.payload.hasAssemblingOption
      state.hasMemoOption = action.payload.hasMemoOption
      state.information = action.payload.information
      state.name = action.payload.name
      state.options = action.payload.options
      state.originalPrice = action.payload.originalPrice
      state.qaCount = action.payload.qaCount
      state.refundExchangeInfo = action.payload.refundExchangeInfo
      state.reviewAvg = action.payload.reviewAvg
      state.reviewCount = action.payload.reviewCount
      state.scrapCount = action.payload.scrapCount
      state.secondDepthName = action.payload.secondDepthName
      state.selling = action.payload.selling
      state.sellingCost = action.payload.sellingCost
      state.sellingPrice = action.payload.sellingPrice
      state.shareCount = action.payload.shareCount
      state.sizeWidth = action.payload.sizeWidth
      state.soldOut = action.payload.soldOut
      state.subImages = action.payload.subImages
      state.usedCardCount = action.payload.usedCardCount
      state.viewCount = action.payload.viewCount
      state.wishCount = action.payload.wishCount
    },
  },
})

export const { setProduct } = productDetailSlice.actions
export default productDetailSlice.reducer

const getCategories = (state: RootState) => state.productDetail.categories
const getOriginalPrice = (state: RootState) => state.productDetail.originalPrice
const getSellingPrice = (state: RootState) => state.productDetail.sellingPrice
const getFirstDepthName = (state: RootState) =>
  state.productDetail.firstDepthName
const getSecondDepthName = (state: RootState) =>
  state.productDetail.secondDepthName
const getReviewCount = (state: RootState) => state.productDetail.reviewCount
const getQaCount = (state: RootState) => state.productDetail.qaCount
const getViewCount = (state: RootState) => state.productDetail.viewCount

export const getBrand = (state: RootState) => state.productDetail.brand
export const getCarouselImages = (state: RootState) =>
  state.productDetail.subImages
export const getDeliveryFee = (state: RootState) =>
  state.productDetail.deliveryFee
export const getDeliveryRestrict = (state: RootState) =>
  state.productDetail.deliveryRestrict
export const getDepthLevel = (state: RootState) =>
  state.productDetail.depthLevel
export const getExtraOptionsRaw = (state: RootState) =>
  state.productDetail.extraOptions

export const getOptions = (state: RootState) => state.productDetail.options
export const getPoint = (state: RootState) => state.productDetail.point
export const getProductCards = (state: RootState) => state.productDetail.cards
export const getProductImages = (state: RootState) =>
  state.productDetail.description
export const getProductInformation = (state: RootState) =>
  state.productDetail.information
export const getProductName = (state: RootState) => state.productDetail.name
export const getReviewAvg = (state: RootState) => state.productDetail.reviewAvg
export const getScrapCount = (state: RootState) =>
  state.productDetail.scrapCount
export const getUsedCardCount = (state: RootState) =>
  state.productDetail.usedCardCount

export const getBreadcrumbLinks = createSelector(
  [getCategories],
  (categories) => {
    return categories.map(({ title, hash }) => ({
      label: title,
      url: getStoreCategoryUrl(hash),
    }))
  }
)

export const getCounts = createSelector(
  [getReviewCount, getQaCount, getViewCount],
  (reviewCount, qaCount, viewCount) => {
    return {
      reviewCount,
      qaCount,
      viewCount,
    }
  }
)

export const getPrice = createSelector(
  [getOriginalPrice, getSellingPrice],
  (originalPrice, sellingPrice) => {
    const isOnDiscount = originalPrice > sellingPrice
    const percentage = Math.floor((1 - sellingPrice / originalPrice) * 100)
    return {
      isOnDiscount,
      originalPrice,
      percentage,
      sellingPrice,
    }
  }
)

export const getFirstOptions = createSelector(
  [getDepthLevel, getOptions, getFirstDepthName],
  (depthLevel, options, firstDepthName) => {
    const firstOptions = options.reduce((acc, option) => {
      const { explain, sellingCost, stock } = option
      if (acc.find((item) => item.label.includes(explain))) return acc

      const label =
        depthLevel === 1
          ? `${explain} (${formatPrice(sellingCost)}원)`
          : explain

      acc.push({
        label,
        value: explain,
        disabled: stock < 0,
      })

      return acc
    }, [] as SelectOption[])

    return {
      placeholder: firstDepthName,
      options: firstOptions,
    }
  }
)

export const getSecondOptions = createSelector(
  [getOptions, getSecondDepthName],
  (options, secondDepthName) => {
    const secondOptions = options.reduce((acc, option) => {
      const { explain2, sellingCost, stock } = option
      if (acc.find((item) => item.label.includes(explain2))) return acc

      acc.push({
        label: `${explain2} (${formatPrice(sellingCost)}원)`,
        value: explain2,
        disabled: stock < 0,
      })
      return acc
    }, [] as SelectOption[])

    return {
      placeholder: secondDepthName,
      options: secondOptions,
    }
  }
)

export const getExtraOptions = createSelector(
  [getExtraOptionsRaw],
  (extraOptions) =>
    extraOptions.map((option) => {
      const { explain, id, sellingCost, stock } = option
      return {
        label: `${explain} (${formatPrice(sellingCost)}원)`,
        value: id,
        disabled: stock < 0,
      }
    })
)

export const getRequiredOptionIds = createSelector([getOptions], (options) =>
  options.map((option) => option.id)
)
