"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  TextField,
  Button,
  Divider,
  Tooltip,
  useTheme,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import {
  Menu as MenuIcon,
  LightbulbOutlined,
  NoteOutlined,
  ArchiveOutlined,
  DeleteOutlined,
  CategoryOutlined,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
  Label as LabelIcon,
  ChevronLeft,
  ChevronRight,
  Delete as DeleteIcon
} from "@mui/icons-material";
import SearchBar from "../app/notes/Search";
import Link from "next/link";
import RefreshButton from "./RefreshButton";
import ThemeToggle from "./ThemeToggle";
import { useSidebar } from "@/app/SidebarContext";
import { useNotes } from "@/app/NotesContext";
import { usePathname } from "next/navigation";
import { useTheme as useMuiTheme } from '@mui/material/styles';

const DRAWER_FULL_WIDTH = 280;
const DRAWER_MINI_WIDTH = 65;

export default function Navbar({ children }) {
  const [open, setOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [newCategory, setNewCategory] = useState("");
  const [localCategories, setLocalCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [recentlyAddedCategory, setRecentlyAddedCategory] = useState(null);
  const pathname = usePathname();
  const { categories, createCategory, fetchCategories, deleteCategory } = useNotes();
  const { isOpen, toggleSidebar } = useSidebar();
  const theme = useMuiTheme();
  const drawerRef = useRef(null);

  const isDrawerEffectivelyOpen = open || hoverOpen || isOpen;

  // Filter out "Uncategorized" from categories
  const displayCategories = localCategories.filter(cat => cat.toLowerCase() !== "uncategorized");

  // Initialization effect
  useEffect(() => {
    setHydrated(true);
    fetchCategories();
  }, [fetchCategories]);

  // Categories sync effect
  useEffect(() => {
    setLocalCategories(categories);
  }, [categories]);

  // Navigation effect - collapse sidebar on route change
  useEffect(() => {
    if (pathname) {  // Only run if pathname exists
      setOpen(false);
    }
  }, [pathname]);

  // Sync with SidebarContext
  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  if (!hydrated) return null;

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
    setHoverOpen(false);
  };

  const handleMouseEnter = () => {
    if (!open) {
      setHoverOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setHoverOpen(false);
  };

  const handleAddCategory = async () => {
    const categoryName = newCategory.trim();
    if (categoryName) {
      const created = await createCategory(categoryName);
      if (created) {
        setNewCategory("");
        setRecentlyAddedCategory(categoryName);
        setTimeout(() => {
          setRecentlyAddedCategory(null);
        }, 1500);
      } else {
        console.error("Failed to add category via Navbar") // Consider user feedback here
      }
    }
  };

  const handleClickAway = (event) => {
    // Don't collapse if clicking the burger menu itself
    if (event.target.closest('[data-burger-menu="true"]')) {
      return;
    }

    // If the click is outside the drawer
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      // If the drawer was opened by the burger icon (context state is true)
      if (isOpen) {
        toggleSidebar(); // Call the context function to close it
      }
      // Always reset hover state on click away
      setHoverOpen(false);
      // No need to set local 'open' state directly, useEffect handles sync
    }
  };

  const isCurrentPath = (path) => pathname === path;
  const isCurrentCategory = (category) => pathname === `/category/${category.toLowerCase()}`;

  const handleDeleteCategoryClick = (e, category) => {
    e.preventDefault();
    e.stopPropagation();
    setCategoryToDelete(category);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCategoryToDelete(null);
  };

  const confirmDeleteCategory = () => {
    if (categoryToDelete) {
      deleteCategory(categoryToDelete);
    }
    handleCloseDialog();
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', p: isDrawerEffectivelyOpen ? 1 : 0.5 }}>
        {[
          { text: "Notes", icon: <LightbulbOutlined />, path: "/notes" },
          { text: "Archive", icon: <ArchiveOutlined />, path: "/archive" },
          { text: "Trash", icon: <DeleteOutlined />, path: "/trash" },
        ].map(({ text, icon, path }) => (
          <ListItem
            key={text}
            component={Link}
            href={path}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              justifyContent: isDrawerEffectivelyOpen ? 'initial' : 'center',
              px: isDrawerEffectivelyOpen ? 2.5 : 1,
              bgcolor: isCurrentPath(path) ?
                (theme.palette.mode === 'dark' ? 'action.selected' : 'primary.light')
                : 'transparent',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'action.hover' : 'primary.light',
                opacity: 0.8
              },
              color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isDrawerEffectivelyOpen ? 3 : 0,
                justifyContent: 'center',
                width: isDrawerEffectivelyOpen ? 'auto' : '100%',
                color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{ opacity: isDrawerEffectivelyOpen ? 1 : 0, color: theme.palette.mode === 'dark' ? '#fff' : 'inherit' }}
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />

        <ListItem
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          sx={{
            borderRadius: 1,
            mb: 0.5,
            justifyContent: isDrawerEffectivelyOpen ? 'initial' : 'center',
            px: isDrawerEffectivelyOpen ? 2.5 : 1,
            '&:hover': {
              bgcolor: theme.palette.mode === 'dark' ? 'action.hover' : 'action.hover',
              opacity: 0.8,
              cursor: 'pointer'
            },
            color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
          }}
        >
          <ListItemIcon sx={{
            minWidth: 0,
            mr: isDrawerEffectivelyOpen ? 3 : 0,
            justifyContent: 'center',
            width: isDrawerEffectivelyOpen ? 'auto' : '100%',
            color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
          }}>
            <CategoryOutlined />
          </ListItemIcon>
          <ListItemText
            primary="Categories"
            sx={{ opacity: isDrawerEffectivelyOpen ? 1 : 0, color: theme.palette.mode === 'dark' ? '#fff' : 'inherit' }}
            primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 'medium' }}
          />
          {isDrawerEffectivelyOpen && (categoriesOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>

        {isDrawerEffectivelyOpen && (
          <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 1 }}>
              {displayCategories.map((category) => {
                const isRecent = category === recentlyAddedCategory;
                return (
                  <ListItem
                    key={category}
                    component={Link}
                    href={`/category/${category.toLowerCase()}`}
                    secondaryAction={
                      <Tooltip title={`Delete category "${category}"`}>
                        <IconButton
                          edge="end"
                          aria-label="delete category"
                          onClick={(e) => handleDeleteCategoryClick(e, category)}
                          sx={{
                            opacity: 0.7,
                            '&:hover': {
                              opacity: 1,
                              color: 'error.main'
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    }
                    sx={{
                      pl: 4,
                      pr: 9,
                      borderRadius: 1,
                      mb: 0.5,
                      bgcolor: isCurrentCategory(category) ?
                        (theme.palette.mode === 'dark' ? 'action.selected' : 'primary.light')
                        : 'transparent',
                      '&:hover': {
                        bgcolor: theme.palette.mode === 'dark' ? 'action.hover' : 'primary.light',
                        opacity: 0.8
                      },
                      color: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
                      height: 40,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 30, color: theme.palette.mode === 'dark' ? '#fff' : 'inherit' }}>
                      <LabelIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={category}
                      sx={{ opacity: isDrawerEffectivelyOpen ? 1 : 0, color: theme.palette.mode === 'dark' ? '#fff' : 'inherit' }}
                      primaryTypographyProps={{
                        fontSize: "0.85rem",
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        )}
      </List>

      {/* Persistent New Category Input Area */}
      {isDrawerEffectivelyOpen && (
        <Box sx={{
          p: 2,
          pb: 10,
          borderTop: `1px solid ${theme.palette.divider}`
        }}>
          <ListItem sx={{ pl: 1, pr: 1 }}> {/* Adjusted padding */}
            <TextField
              fullWidth
              variant="standard"
              size="small"
              placeholder="New category..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddCategory();
                }
              }}
              InputProps={{
                endAdornment: (
                  <IconButton size="small" onClick={handleAddCategory} disabled={!newCategory.trim()}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                ),
                sx: { fontSize: '0.85rem' }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  color: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                  opacity: 1,
                },
              }}
            />
          </ListItem>
        </Box>
      )}

    </Box>
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: "background.paper",
            color: "text.primary",
            boxShadow: 'none',
            bgcolor: theme.palette.mode === "light" ? "primary.light" : "black",
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        >
          <Toolbar>
            <IconButton
              data-burger-menu="true"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: { xs: 1, sm: 1 }, mr: { sm: 2 } }}>
              Ideate
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', width: '40%' }}>
              <SearchBar />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <RefreshButton />
              <ThemeToggle />
            </Box>
          </Toolbar>
          <Box sx={{ display: { xs: 'block', sm: 'none' }, p: 1 }}>
            <SearchBar />
          </Box>
        </AppBar>
        <Drawer
          ref={drawerRef}
          variant="permanent"
          sx={{
            width: isDrawerEffectivelyOpen ? DRAWER_FULL_WIDTH : DRAWER_MINI_WIDTH,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: isDrawerEffectivelyOpen ? DRAWER_FULL_WIDTH : DRAWER_MINI_WIDTH,
              boxSizing: 'border-box',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: 'hidden',
              borderRight: `1px solid ${theme.palette.divider}`,
              bgcolor: 'background.default',
              top: '64px',
              height: 'calc(100vh - 64px)',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
              },
              scrollbarWidth: 'thin',
              scrollbarColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) transparent' : 'rgba(0, 0, 0, 0.1) transparent',
              ...(isDrawerEffectivelyOpen ? {} : {
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              }),
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {drawerContent}
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `${DRAWER_MINI_WIDTH - 200}px`,
            width: `calc(100% - ${DRAWER_MINI_WIDTH}px)`,
            overflowX: 'hidden',

            [`&.drawer-open`]: {
              transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginLeft: `${DRAWER_FULL_WIDTH - 400}px`,
              width: `calc(100% - ${DRAWER_FULL_WIDTH}px)`,
            },
            pb: 3,
            pl: 3,
            pr: 3,
            pt: 2,
            '@media (max-width: 600px)': {
              marginLeft: `${DRAWER_MINI_WIDTH}px`,
              width: `calc(100% - ${DRAWER_MINI_WIDTH}px)`,
              pl: 2,
              pr: 2,
              '&.drawer-open': {
                marginLeft: `${DRAWER_MINI_WIDTH}px`,
                width: `calc(100% - ${DRAWER_MINI_WIDTH}px)`,
              }
            }
          }}
          className={isDrawerEffectivelyOpen ? 'drawer-open' : ''}
        >
          <Toolbar />
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            {children}
          </Box>
        </Box>

        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm Deletion"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`Are you sure you want to delete the category "${categoryToDelete}"? Notes associated with this category will not be deleted but will lose this category tag.`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={confirmDeleteCategory} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

      </Box>
    </ClickAwayListener>
  );
}
