"use client";

import { Box, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import { useSidebar } from "@/app/SidebarContext";

const defaultdrawerWidth = 280;

export default function AppLayout({ children }) {
  const { isOpen } = useSidebar();

  const drawerWidth = isOpen ? defaultdrawerWidth : 0;

  return (
    <Box sx={{ display: "flex", }}>
      <Navbar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s",
          width: `calc(100% - ${drawerWidth}px)`,
          zIndex: 1,
          position: "relative",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
