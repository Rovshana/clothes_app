import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    count: 1,
    card: []
  }

export const CardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProducts: (state, action)=>{
            
            state.products.push(action.payload.product)
            state.total += action.payload.price

        }, 
        addCard: (state, action)=>{
          state.card = [...state.card, action.payload]

        }, 
        addBasket: (state, action)=>{
          state.quantity += 1;
        },
        addProduct: (state, action)=>{
          state.count += 1;

        },
        decreaseProduct: (state, action)=>{
          state.count = state.count <= 0 ? 0 : state.count - 1;
        }
       

    },
  })

  export const { addProducts, addBasket, addProduct, decreaseProduct, addCard } = CardSlice.actions;
  export default CardSlice.reducer
