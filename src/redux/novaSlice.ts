import { Product } from "@/types/product";
import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NovaState {
  user: User | null;
  cartItems: Product[];
  orderHistory: Product[];
  selectedCategory: string | null;
  selectedPriceRanges: string[];
}

const initialState: NovaState = {
  user: null,
  cartItems: [],
  orderHistory: [],
  selectedCategory: null,
  selectedPriceRanges: [],
};

const novaSlice = createSlice({
  name: "nova",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const payload = action.payload;
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) item.quantity = payload.quantity;
      else state.cartItems.push(payload);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);
      if (product) product.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);
      if (product) product.quantity -= 1;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    addToOrderHistory: (state, action: PayloadAction<Product[]>) => {
      const payload = action.payload;
      state.orderHistory = [...state.orderHistory, ...payload];
    },

    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },

    togglePriceRange: (state, action: PayloadAction<string>) => {
      const priceRange = action.payload;
      if (state.selectedPriceRanges.includes(priceRange)) {
        state.selectedPriceRanges = state.selectedPriceRanges.filter(
          (cat) => cat !== priceRange
        );
      } else state.selectedPriceRanges.push(priceRange);
    },
    removeFromOrderHistory: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.orderHistory = state.orderHistory.filter(
        (item) => item.id !== productId
      );
    },
  },
});

export const {
  setUser,
  clearUser,
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  addToOrderHistory,
  removeFromOrderHistory,
  setSelectedCategory,
  togglePriceRange,
} = novaSlice.actions;

export default novaSlice.reducer;
