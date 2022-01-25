import { sum, map, filter, uniqBy } from 'lodash';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

//----------------------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  products: [],
  product: null,
  sortBy: null,
  filters: {
    gender: [],
    category: 'All',
    colors: [],
    priceRange: '',
    rating: ''
  },
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null
  }
};
