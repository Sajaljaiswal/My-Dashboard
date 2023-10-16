import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

//create Action

export const createStudent = createAsyncThunk("createStudent", async (data) => {
  const response = await fetch(
    "https://65253ab067cfb1e59ce6ea6c.mockapi.io/divya",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = response.json();
    return result;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const showStudents = createAsyncThunk("showStudents", async () => {
  const response = await fetch(
    "https://65253ab067cfb1e59ce6ea6c.mockapi.io/divya"
  );
  try {
    const result = response.json();
    return result;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const createFeeReceipt = createAsyncThunk(
  "createStudent",
  async (data) => {
    const response = await fetch(
      "https://65253ab067cfb1e59ce6ea6c.mockapi.io/FeeReceipt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = response.json();
      return result;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const userDetails = createSlice({
  name: "divyaUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createStudent.pending]: (state) => {
      state.loading = true;
    },
    [createStudent.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createStudent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showStudents.pending]: (state) => {
      state.loading = true;
    },
    [showStudents.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showStudents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userDetails.reducer;
