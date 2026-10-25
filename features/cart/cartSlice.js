import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    const saved = localStorage.getItem('forma-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCart(),
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existing = state.find((item) => item.id === product.id)
      if (existing) existing.quantity += 1
      else state.push({ ...product, quantity: 1 })
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.find((product) => product.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const item = state.find((product) => product.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity <= 0) {
          return state.filter((product) => product.id !== action.payload)
        }
      }
    },
    clearCart() {
      return []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
