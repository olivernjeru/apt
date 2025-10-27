"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNotes } from "../app/NotesContext";
import { usePathname } from "next/navigation";

export default function RefreshButton() {
    const {
        fetchNotes,
        fetchArchivedNotes,
        fetchDeletedNotes
    } = useNotes();
    const [spinning, setSpinning] = useState(false);
    const pathname = usePathname();

    const handleRefresh = async () => {
        setSpinning(true);
        try {
            if (pathname.startsWith('/archive')) {
                await fetchArchivedNotes();
            } else if (pathname.startsWith('/trash')) {
                await fetchDeletedNotes();
            } else {
                await fetchNotes();
            }
        } finally {
            setSpinning(false);
        }
    };

    return (
        <IconButton
            onClick={handleRefresh}
            color="inherit"  // This makes the icon inherit the AppBar's text color.
            sx={{
                transition: "transform 0.5s",
                transform: spinning ? "rotate(360deg)" : "rotate(0deg)",
            }}
        >
            <RefreshIcon />
        </IconButton>
    );
}
