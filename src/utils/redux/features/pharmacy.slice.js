import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    pharmacyList: [],
    status: "",
    error: null
};

export const addPharmacyThunk = createAsyncThunk(
    "pharmacy/addPharmacyThunk", (data, thunkAPI) => {

    
    })

const pharmacySlice = createSlice({
    initialState,
    name: "pharmacy",
    reducers: {
        addPharmacy: (state, action) => {
            state.pharmacyList.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addPharmacyThunk.pending)
        .addCase(addPharmacyThunk.fulfilled, (state, action) => {
            state.pharmacyList = action.payload
        })
        .addCase(addPharmacyThunk.rejected, (state, action) => {
            state.status = "succeeded"
            state.error = action.payload
        })
    }
})

export const {addPharmacy} = pharmacySlice.actions;
export default pharmacySlice.reducer;