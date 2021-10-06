declare interface OrderItem {
  value: string
}

declare interface CheckoutItem extends OrderItem {
  count: number
}
