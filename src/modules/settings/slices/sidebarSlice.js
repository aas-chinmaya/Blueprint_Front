



// store/sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fullNav } from "@/utils/constants/sidebarNavList";

const initialState = {
  navItems: [],
  userGroup: null, // store user group if needed
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarByRole: (state, action) => {
      const { role, position } = action.payload;

      // Determine the correct group
      const userGroup = role === "cpc" || position === "Team Lead" ? "cpcGroup" : "employeeGroup";

      state.userGroup = userGroup;

      // Filter navigation items based on group
      state.navItems = fullNav
        .filter(item => item.roles.includes(userGroup))
        .map(item => {
          if (item.items) {
            const filteredItems = item.items.filter(sub => sub.roles.includes(userGroup));
            return { ...item, items: filteredItems };
          }
          return item;
        });
    },
    clearSidebar: (state) => {
      state.navItems = [];
      state.userGroup = null;
    },
  },
});

export const { setSidebarByRole, clearSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;




