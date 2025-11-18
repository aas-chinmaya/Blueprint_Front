



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

//
// ✅ Initial State
//
const initialState = {
   assignBugLoading: false,
  assignBugError: null,
  assignBugSuccess: null,
  bug: null,
  bugs: [],
  allBugs: [],
  bugsByProjectId: [],
  bugsByEmployeeId: [],
  employeeProjectBugs: [],
  bugDetails: null,
  loading: {
    bugCreation: false,
    bugsFetch: false,
    allBugsFetch: false,
    bugsByProjectId: false,
    bugResolve: false,
    bugsByEmployeeId: false,
    bugDownload: false,
    memberBugDownload: false,
    bugEdit: false,
    bugDetailsFetch: false,
    employeeProjectBugs: false,
  },
  error: {
    bugCreation: null,
    bugsFetch: null,
    allBugsFetch: null,
    bugsByProjectId: null,
    bugResolve: null,
    bugsByEmployeeId: null,
    bugDownload: null,
    memberBugDownload: null,
    bugEdit: null,
    bugDetailsFetch: null,
    employeeProjectBugs: null,
  },
  successMessage: null,
};

// Ensure state is initialized with loading and error
const ensureStateIntegrity = (state) => {
  if (!state.loading) {
    // console.warn("state.loading is null, resetting to initialState.loading");
    state.loading = initialState.loading;
  }
  if (!state.error) {
    // console.warn("state.error is null, resetting to initialState.error");
    state.error = initialState.error;
  }
};

//
// ✅ 1. Create Bug
//
export const createBug = createAsyncThunk(
  "bugs/createBug",
  async (bugData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/bugs/create", bugData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating bug:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create bug"
      );
    }
  }
);

//
// ✅ 2. Fetch All Bugs by Project ID
//
export const fetchAllBugsByProjectId = createAsyncThunk(
  "bugs/fetchAllBugsByProjectId",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/bugs/getallbugByProjectId/${projectId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching bugs:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bugs"
      );
    }
  }
);

//
// ✅ 3. Fetch Bugs by Project ID
//
export const fetchBugByProjectId = createAsyncThunk(
  "bugs/fetchBugByProjectId",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/bugs/getallbugByProjectId/${projectId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching bugs for project:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bugs by project"
      );
    }
  }
);

//
// ✅ 4. Resolve Bug
//
export const resolveBug = createAsyncThunk(
  "bugs/resolveBug",
  async ({ bugId, delayReason, resolutionNote }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/bugs/resolve/${bugId}`, {
        delayReason,
        resolutionNote,
      });
      return response.data;
    } catch (error) {
      console.error("Error resolving bug:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to resolve bug"
      );
    }
  }
);

//
// ✅ 5. Fetch Bugs by Employee ID
//
export const fetchBugByEmployeeId = createAsyncThunk(
  "bugs/fetchBugByEmployeeId",
  async (employeeId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/bugs/assigned/${employeeId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching bugs for employee:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch employee bugs"
      );
    }
  }
);

//
// ✅ New: Fetch All Bugs
//
export const fetchAllBugs = createAsyncThunk(
  "bugs/fetchAllBugs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/bugs/getallbugs`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all bugs:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch all bugs"
      );
    }
  }
);

// Download Bugs by ProjectId
export const downloadBugsByProjectId = createAsyncThunk(
  "bugs/downloadBugsByProjectId",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/bugs/download/${projectId}`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bugs_${projectId}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      return "Download successful";
    } catch (error) {
      console.error("Error downloading bugs:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to download bugs"
      );
    }
  }
);

// Download Bugs by member id
export const downloadBugsByMemberId = createAsyncThunk(
  "bugs/downloadBugsByMemberId",
  async ({ projectId, memberId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/bugs/download-by-assignee/${projectId}/${memberId}`,
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bugs_member_${memberId}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      return "Member bug report downloaded successfully";
    } catch (error) {
      console.error("Error downloading member bugs:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to download member bug report"
      );
    }
  }
);

// Fetch Bugs by project ID and employee ID
export const fetchEmployeeProjectBugs = createAsyncThunk(
  "bugs/fetchEmployeeProjectBugs",
  async ({ projectId, employeeId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/bugs/getbugbyprojectandbmemberid/${projectId}/${employeeId}`
        
      );

      if (!response.data) {
        throw new Error("No Bugs found");
      }

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Fetch failed"
      );
    }
  }
);

//
// ✅ 6. Edit Bug
//
export const editBug = createAsyncThunk(
  "bugs/editBug",
  async ({ bugId, bugData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      Object.keys(bugData).forEach((key) => {
        if (key === "attachment" && bugData[key]) {
          formData.append("bugImage", bugData[key]);
        } else if (bugData[key] !== undefined && bugData[key] !== null) {
          formData.append(key, bugData[key]);
        }
      });

      const response = await axiosInstance.put(`/bugs/editbug/${bugId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    } catch (error) {
      console.error("Error editing bug:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to edit bug");
    }
  }
);

//
// ✅ 7. Get Bug Details by Bug ID
//
export const getBugById = createAsyncThunk(
  "bugs/getBugById",
  async (bugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/bugs/getbugBybug_id/${bugId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching bug details:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch bug details");
    }
  }
);
export const assignBug = createAsyncThunk(
  "bugs/assignBug",
  async ({ bug_id, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/bugs/assign/${bug_id}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("Error assigning bug:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to assign bug"
      );
    }
  }
);

//
// ✅ Slice
//
const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    resetBugCreation: (state) => {
      ensureStateIntegrity(state);
      state.loading.bugCreation = false;
      state.error.bugCreation = null;
      state.successMessage = null;
      state.bug = null;
    },
    clearErrors: (state) => {
      ensureStateIntegrity(state);
      state.error.bugCreation = null;
      state.error.bugsFetch = null;
      state.error.bugResolve = null;
      state.error.bugsByProjectId = null;
      state.error.bugEdit = null;
      state.error.bugDetailsFetch = null;
    },
    clearProjectBugs: (state) => {
      ensureStateIntegrity(state);
      state.bugsByProjectId = [];
    },
    clearAllBugs: (state) => {
      ensureStateIntegrity(state);
      state.allBugs = [];
    },
  },
  extraReducers: (builder) => {
    // Create Bug
    builder
      .addCase(createBug.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugCreation = true;
        state.error.bugCreation = null;
        state.successMessage = null;
      })
      .addCase(createBug.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugCreation = false;
        state.bug = action.payload;
        state.bugs.push(action.payload);
        state.successMessage = "Bug created successfully";
      })
      .addCase(createBug.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugCreation = false;
        state.error.bugCreation = action.payload;
      });

    // Fetch All Bugs
    builder
      .addCase(fetchAllBugsByProjectId.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugsFetch = true;
        state.error.bugsFetch = null;
      })
      .addCase(fetchAllBugsByProjectId.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsFetch = false;
        state.bugs = action.payload;
      })
      .addCase(fetchAllBugsByProjectId.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsFetch = false;
        state.error.bugsFetch = action.payload;
      });

    // Fetch All Bugs (New)
    builder
      .addCase(fetchAllBugs.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.allBugsFetch = true;
        state.error.allBugsFetch = null;
      })
      .addCase(fetchAllBugs.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.allBugsFetch = false;
        state.allBugs = action.payload;
      })
      .addCase(fetchAllBugs.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.allBugsFetch = false;
        state.error.allBugsFetch = action.payload;
      });

    // Fetch Bugs for One Project
    builder
      .addCase(fetchBugByProjectId.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugsByProjectId = true;
        state.error.bugsByProjectId = null;
      })
      .addCase(fetchBugByProjectId.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsByProjectId = false;
        state.bugsByProjectId = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchBugByProjectId.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsByProjectId = false;
        state.error.bugsByProjectId = action.payload;
      });

    // Resolve Bug
    builder
      .addCase(resolveBug.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugResolve = true;
        state.error.bugResolve = null;
        state.successMessage = null;
      })
      .addCase(resolveBug.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugResolve = false;
        state.successMessage = action.payload.message;
        const updatedBug = action.payload.bug;
        state.bugs = state.bugs.map((bug) =>
          bug.bug_id === updatedBug.bug_id ? updatedBug : bug
        );
        state.bugsByProjectId = state.bugsByProjectId.map((bug) =>
          bug.bug_id === updatedBug.bug_id ? updatedBug : bug
        );
      })
      .addCase(resolveBug.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugResolve = false;
        state.error.bugResolve = action.payload;
      });

    // Fetch Bugs for Employee
    builder
      .addCase(fetchBugByEmployeeId.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugsByEmployeeId = true;
        state.error.bugsByEmployeeId = null;
      })
      .addCase(fetchBugByEmployeeId.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsByEmployeeId = false;
        state.bugsByEmployeeId = action.payload;
      })
      .addCase(fetchBugByEmployeeId.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugsByEmployeeId = false;
        state.error.bugsByEmployeeId = action.payload;
      });

    // Download Bugs
    builder
      .addCase(downloadBugsByProjectId.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugDownload = true;
        state.error.bugDownload = null;
        state.successMessage = null;
      })
      .addCase(downloadBugsByProjectId.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugDownload = false;
        state.successMessage = action.payload;
      })
      .addCase(downloadBugsByProjectId.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugDownload = false;
        state.error.bugDownload = action.payload;
      });

    // Download Member Bugs
    builder
      .addCase(downloadBugsByMemberId.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.memberBugDownload = true;
        state.error.memberBugDownload = null;
        state.successMessage = null;
      })
      .addCase(downloadBugsByMemberId.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.memberBugDownload = false;
        state.successMessage = action.payload;
      })
      .addCase(downloadBugsByMemberId.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.memberBugDownload = false;
        state.error.memberBugDownload = action.payload;
      });

    // Fetch Bugs by Project + Employee
    builder
      .addCase(fetchEmployeeProjectBugs.pending, (state) => {
        ensureStateIntegrity(state);
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeeProjectBugs.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.status = "succeeded";
       state.employeeProjectBugs = action.payload;
      })
    
      .addCase(fetchEmployeeProjectBugs.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.status = "failed";
        state.error = action.payload;
      });

    // Edit Bug
    builder
      .addCase(editBug.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugEdit = true;
        state.error.bugEdit = null;
        state.successMessage = null;
      })
      .addCase(editBug.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugEdit = false;
        state.bug = action.payload;
        state.successMessage = "Bug updated successfully";
        state.bugs = state.bugs.map((bug) =>
          bug.bug_id === action.payload.bug_id ? action.payload : bug
        );
        state.bugsByProjectId = state.bugsByProjectId.map((bug) =>
          bug.bug_id === action.payload.bug_id ? action.payload : bug
        );
      })
      .addCase(editBug.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugEdit = false;
        state.error.bugEdit = action.payload;
      });

    // Get Bug Details by ID
    builder
      .addCase(getBugById.pending, (state) => {
        ensureStateIntegrity(state);
        state.loading.bugDetailsFetch = true;
        state.error.bugDetailsFetch = null;
        state.bugDetails = null;
      })
      .addCase(getBugById.fulfilled, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugDetailsFetch = false;
        state.bugDetails = action.payload;
      })
      .addCase(getBugById.rejected, (state, action) => {
        ensureStateIntegrity(state);
        state.loading.bugDetailsFetch = false;
        state.error.bugDetailsFetch = action.payload;
      })
      builder
      .addCase(assignBug.pending, (state) => {
        state.assignBugLoading = true;
        state.assignBugError = null;
        state.assignBugSuccess = null;
      })
      .addCase(assignBug.fulfilled, (state, action) => {
        state.assignBugLoading = false;
        state.assignBugSuccess =
          action.payload?.message || "Bug assigned successfully";
      })
      .addCase(assignBug.rejected, (state, action) => {
        state.assignBugLoading = false;
        state.assignBugError = action.payload;
      });
  },
});

//
// ✅ Exports
//
export const { resetBugCreation, clearErrors, clearProjectBugs, clearAllBugs } = bugSlice.actions;

export const selectEmployeeProjectBugs = (state, projectId, employeeId) => {
  return state.bugs.employeeProjectBugs[projectId]?.[employeeId] || [];
};

export default bugSlice.reducer;