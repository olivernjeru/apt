"use client";

import { useState, useEffect, useRef } from "react";
import { useNotes } from "../NotesContext";
import { usePathname } from 'next/navigation';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SearchBar() {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery, searchActiveNotes, searchArchivedNotes, searchDeletedNotes, fetchNotes, fetchArchivedNotes, fetchDeletedNotes } = useNotes();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [active, setActive] = useState(false);
  const searchRef = useRef(null);

  // Determine which search function to use based on current route
  const getSearchFunction = () => {
    if (pathname.startsWith('/archive')) return searchArchivedNotes;
    if (pathname.startsWith('/trash')) return searchDeletedNotes;
    return searchActiveNotes;
  };

  // Debounce the search function.
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        if (!searchQuery.trim()) {
          // Only reset if the search was previously active
          if (active) {
            // Handle empty query case (restore original notes)
            if (pathname.startsWith('/archive')) {
              fetchArchivedNotes();
            } else if (pathname.startsWith('/trash')) {
              fetchDeletedNotes();
            } else {
              fetchNotes();
            }
          }
          return;
        }

        const searchFunction = getSearchFunction();
        await searchFunction(searchQuery);
      } catch (error) {
        console.error("Search error:", error);
      }
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [searchQuery, pathname]);

  // Detect clicks outside the search component.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (active && searchRef.current && !searchRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  // Activate when the input gains focus.
  const handleFocus = () => {
    setActive(true);
  };

  // Clear the input and deactivate on "X" click.
  const handleClose = () => {
    setSearchQuery("");
    setActive(false);
  };

  // On small screens, clicking the icon expands the search input.
  const handleIconClick = () => {
    setActive(true);
  };

  // Define background colors based on theme mode and active state.
  const backgroundColor = active
    ? (theme.palette.mode === "dark" ? "#424242" : "#ffffff")
    : (theme.palette.mode === "dark" ? "#616161" : "#F1F3F4");

  // Conditionally set the color of the search icon based on theme and screen size
  const searchIconColor = isSmallScreen && theme.palette.mode === "light" ? "#ffffff" : undefined;

  return (
    <>
      {(!active && isSmallScreen) ? (
        // Collapsed state for small screens.
        <IconButton onClick={handleIconClick}>
          <SearchIcon sx={{ color: searchIconColor }} />
        </IconButton>
      ) : (
        // Expanded search input using TextField wrapped in a container for outside click detection.
        <div ref={searchRef}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            sx={{
              borderRadius: 1,
              width: { xs: "100%", sm: "100%", md: "500px" },
              backgroundColor, // Use computed background color
              // Override text color if needed:
              "& .MuiOutlinedInput-root": {
                color: theme.palette.text.primary,
              },
            }}
            // Use the new slotProps.input API to pass adornments.
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: active ? (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
            }}
          />
        </div>
      )}
    </>
  );
}
