declare namespace Product {
  interface Brand {
    exist: boolean
    id: number
    introduction: string | null
    name: string
    profileImgUrl: string | null
  }

  interface Card {
    id: number
    imgUrl: string
    isCollection: boolean
    isReview: boolean
    nickname: string
    profileImgUrl: string
    thumbnailImgUrl: string
    userId: number
  }

  interface Category {
    id: number
    title: string
    hash: string
  }

  interface DeliveryFee {
    backwoodsFee: number
    fee: number
    freeThreshold: number
    isRegionalDeliveryFee: boolean
    nativeType: number
    payAt: number
    type: number
  }

  interface DeliveryRestrict {
    deliveryEtc: string
    deliveryOutOfCapital: boolean
    deliveryToBackwoods: boolean
    deliveryToJeju: boolean
  }

  interface ExtraOption {
    explain: string
    id: number
    isMain: boolean
    sellingCost: number
    stock: number
    undiscountedCost: number
  }

  interface Informaton {
    displayName: string
    content: string
  }

  interface Option {
    explain: string
    explain2: string
    id: number
    isMain: boolean
    position: number
    reentryAt: number | null
    sellingCost: number
    stock: number
    undiscountedCost: number
  }

  interface Point {
    value: number
    reason: string
    percentage: number
  }

  interface RefundExchangeInfo {
    address: string
    exchangeFee: number
    refundFee: number
  }
}
