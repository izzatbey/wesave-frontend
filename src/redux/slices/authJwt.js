import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false
};
