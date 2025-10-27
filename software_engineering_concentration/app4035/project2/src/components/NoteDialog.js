'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    AppBar,
    Toolbar,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Chip,
    Box,
    Button,
    Tooltip,
    Snackbar,
    Menu,
    MenuItem,
    Popover,
    InputAdornment,
    Checkbox
} from '@mui/material';
import {
    Check,
    Close,
    Delete,
    Palette,
    InsertPhoto,
    Add,
    Archive,
    Unarchive,
    MoreVert,
    Undo,
    Redo,
    RestoreFromTrash,
    DeleteForever,
    Search
} from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';
import { useNotes } from '@/app/NotesContext';
import { getBase64FileSize } from '@/app/utils/file';
import { formatEditedAt } from '@/app/utils/time';

const DARK_COLORS = [
    "#77172E", "#692B17", "#7C4A03", "#264D3B",
    "#0C625D", "#256377", "#284255", "#472E5B",
    "#6C394F", "#4B443A"
];

const LIGHT_COLORS = [
    "#FAAFA8", "#F39F76", "#FFF8B8", "#E2F6D3",
    "#B4DDD3", "#D4E4ED", "#AECCDC", "#D3BFDB",
    "#F6E2DD", "#E9E3D4"
];

export default function NoteDialog({ note, open, onClose }) {
    const { updateNote, deleteNote, restoreDeletedNote, permanentlyDeleteNote, archiveNote, restoreArchivedNote, categories, createCategory } = useNotes();
    const [localNote, setLocalNote] = useState(note);
    const [history, setHistory] = useState([{ ...note }]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [showDeleteImage, setShowDeleteImage] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const isDeleted = note.isDeleted;
    const [selectedNote, setSelectedNote] = useState(null);
    const isArchived = note.archived;
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const [colorAnchorEl, setColorAnchorEl] = useState(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [categorySearch, setCategorySearch] = useState('');
    const isDarkMode = theme.palette.mode === 'dark';
    const [versionDialogOpen, setVersionDialogOpen] = useState(false);
    const [selectedVersionNote, setSelectedVersionNote] = useState(null);

    const handleVersionDialogOpen = (note) => {
        setVersionDialogOpen(true);
        setSelectedVersionNote(note);
    };

    const handleVersionDialogClose = () => {
        setVersionDialogOpen(false);
        setSelectedVersionNote(null);
    };

    const renderVersionHistoryDialog = () => {
        return (
            <Dialog
                open={versionDialogOpen}
                onClose={() => { }}
                fullWidth
                maxWidth="md"
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 2,
                            height: '60vh',
                            overflow: 'hidden'
                        }
                    }
                }}
            >
                {/* Fixed Header Section */}
                <AppBar position="static" sx={{
                    borderRadius: '8px 8px 0 0',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    boxShadow: 1
                }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Version History
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleVersionDialogClose}
                            sx={{ color: 'text.primary' }}
                        >
                            <Close />
                        </IconButton>
                    </Toolbar>
                    {/* Non-scrollable header content */}
                    <Box sx={{ px: 3, pb: 1 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Download a previous version of your note in text format.
                        </Typography>
                        <Divider />
                    </Box>
                </AppBar>

                {/* Scrollable Versions List */}
                <Box sx={{
                    overflow: 'auto',
                    height: 'calc(100% - 160px)',
                    px: 3,
                    pt: 1
                }}>
                    {/* Current Version */}
                    {selectedVersionNote && (
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 0,
                                backgroundColor: 'action.hover',
                                borderRadius: 1,
                                p: 1
                            }}>
                                <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />
                                <Typography variant="subtitle1">
                                    {formatVersionDate(selectedVersionNote.updatedAt)}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => downloadVersion(selectedVersionNote, selectedVersionNote.updatedAt)}
                                    sx={{ ml: 'auto' }}
                                >
                                    Download
                                </Button>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                Current version
                            </Typography>
                        </Box>
                    )}

                    {/* Previous Versions */}
                    {selectedVersionNote?.versions?.slice().reverse().map((version, index) => (
                        <Box key={version.timestamp} sx={{ mb: 0 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 0,
                                p: 1,
                                '&:hover': { backgroundColor: 'action.hover' }
                            }}>
                                <DescriptionIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                <Typography variant="subtitle1">
                                    {formatVersionDate(version.timestamp)}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => downloadVersion(version.note, version.timestamp)}
                                    sx={{ ml: 'auto' }}
                                >
                                    Download
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* Fixed Footer Section */}
                <Box sx={{
                    position: 'sticky',
                    bottom: 0,
                    bgcolor: 'background.paper',
                    zIndex: 1,
                    boxShadow: 3,
                    px: 3,
                    py: 2
                }}>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            onClick={handleVersionDialogClose}
                            sx={{ borderRadius: 2 }}
                        >
                            Dismiss
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        );
    };

    const downloadVersion = (noteData, timestamp) => {
        const date = new Date(timestamp);

        // Format date as YYYY-MM-DD_HH-MM for filename
        const filenameDate = [
            date.getFullYear(),
            (date.getMonth() + 1).toString().padStart(2, '0'),
            date.getDate().toString().padStart(2, '0')
        ].join('-') + '_' + [
            date.getHours().toString().padStart(2, '0'),
            date.getMinutes().toString().padStart(2, '0')
        ].join('-');

        // Format date/time for HTML content (24-hour format)
        const formattedDate = date.toLocaleDateString('en-US'); // Keeps original date format
        const formattedTime = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>${noteData.title || 'Untitled Note'}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #333; }
                    p { color: #666; line-height: 1.6; }
                    .meta { color: #999; font-size: 0.9em; }
                </style>
            </head>
            <body>
                <h1>${noteData.title || 'Untitled Note'}</h1>
                <div class="content">${noteData.content?.replace(/\n/g, '<br>') || ''}</div>
                ${noteData.categories?.length > 0 ?
                `<p class="categories">Categories: ${noteData.categories.join(', ')}</p>` : ''}
                <p class="meta">Last edited: ${formattedDate}, ${formattedTime}</p>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Sanitize title and create filename
        const sanitizedTitle = (noteData.title || 'Untitled Note')
            .replace(/[^a-z0-9\s]/gi, '')
            .trim()
            .replace(/\s+/g, ' ');

        a.download = `${sanitizedTitle}_${filenameDate}.html`;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const formatVersionDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();

        const dateOptions = {
            day: 'numeric',
            month: 'short',
            ...(date.getFullYear() !== now.getFullYear() && { year: 'numeric' })
        };

        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);

        return `${formattedDate}, ${formattedTime}`;
    };

    const handleColorSelect = (selectedColor) => {
        // Get corresponding color for the opposite theme
        const oppositeMode = isDarkMode ? 'light' : 'dark';
        const correspondingColor = getCorrespondingColor(
            selectedColor,
            theme.palette.mode,
            oppositeMode
        );

        // Create a color object that contains both modes
        const colorObject = {
            dark: isDarkMode ? selectedColor : correspondingColor,
            light: isDarkMode ? correspondingColor : selectedColor
        };

        const newBackgroundColor = selectedColor === 'default' ? null : colorObject;

        // Update global state
        updateNote({
            id: localNote.id,
            backgroundColor: newBackgroundColor
        });

        // Update local state immediately for instant UI update
        setLocalNote(prev => ({
            ...prev,
            backgroundColor: newBackgroundColor
        }));

        handleColorClose();
    };

    const COLOR_MAPPING = {
        dark: DARK_COLORS,
        light: LIGHT_COLORS
    };

    const getCorrespondingColor = (color, fromMode, toMode) => {
        const fromIndex = COLOR_MAPPING[fromMode].indexOf(color);
        return fromIndex !== -1 ? COLOR_MAPPING[toMode][fromIndex] : color;
    };

    // Sync dialog state with incoming note
    useEffect(() => {
        setLocalNote(note);
        setHistory([{ ...note }]);
        setHistoryIndex(0);
    }, [note]);

    // Category management
    const handleCategoryToggle = (category) => {
        const currentCategories = localNote.categories || [];
        const newCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];

        const updatedNote = { ...localNote, categories: newCategories };
        setLocalNote(updatedNote);
        pushHistory(updatedNote);
        updateNote(updatedNote);
    };

    const handleCreateCategory = () => {
        if (categorySearch.trim() && !categories.includes(categorySearch)) {
            createCategory(categorySearch);
            // Update both local and global state
            const newCategories = [...(localNote.categories || []), categorySearch];
            const updatedNote = { ...localNote, categories: newCategories };
            setLocalNote(updatedNote);
            updateNote(updatedNote);
            setCategorySearch('');
        }
    };

    const filteredCategories = categories
        .filter(cat => cat.toLowerCase().includes(categorySearch.toLowerCase()))
        .filter(cat => cat !== 'Uncategorized');

    const showCreateOption = categorySearch.trim() &&
        !categories.includes(categorySearch) &&
        categorySearch !== 'Uncategorized';

    // Category menu component
    const renderCategoryMenu = () => (
        <Popover
            anchorEl={categoryAnchorEl}
            open={Boolean(categoryAnchorEl)}
            onClose={() => setCategoryAnchorEl(null)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
            <Box sx={{ p: 1, width: 200 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Categorize Note
                </Typography>

                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter new category"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 2 }}
                />

                <List dense sx={{ maxHeight: 150, overflow: 'auto' }}>
                    {filteredCategories.map((category) => (
                        <ListItem
                            key={category}
                            onClick={() => handleCategoryToggle(category)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={localNote.categories?.includes(category) ?? false}
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                            <ListItemText primary={category} />
                        </ListItem>
                    ))}

                    {showCreateOption && (
                        <ListItem
                            onClick={handleCreateCategory}
                            sx={{ cursor: 'pointer' }}
                        >
                            <ListItemIcon>
                                <Add fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={`Create "${categorySearch}"`}
                                sx={{ color: 'primary.main' }}
                            />
                        </ListItem>
                    )}
                </List>
            </Box>
        </Popover>
    );

    const renderColorPicker = () => {
        const currentColors = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

        return (
            <Popover
                open={Boolean(colorAnchorEl)}
                anchorEl={colorAnchorEl}
                onClose={() => setColorAnchorEl(null)}
            >
                <Box sx={{ p: 2, display: 'flex', gap: 1, flexWrap: 'wrap', width: 200 }}>
                    <IconButton
                        onClick={() => handleColorSelect('default')}
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            width: 40,
                            height: 40
                        }}
                    >
                        {!localNote.backgroundColor && <Check fontSize="small" />}
                    </IconButton>
                    {currentColors.map((color) => (
                        <IconButton
                            key={color}
                            onClick={() => handleColorSelect(color)}
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: color,
                                border: localNote.backgroundColor?.[theme.palette.mode] === color
                                    ? '2px solid'
                                    : 'none',
                                borderColor: theme.palette.mode === 'dark' ? 'white' : 'black'
                            }}
                        >
                            {localNote.backgroundColor?.[theme.palette.mode] === color &&
                                <Check fontSize="small" />}
                        </IconButton>
                    ))}
                </Box>
            </Popover>
        );
    };

    // Color picker handlers (same as NoteListLayout)
    const handleColorOpen = (e) => {
        e.stopPropagation();
        setColorAnchorEl(e.currentTarget);
    };

    const handleColorClose = () => {
        setColorAnchorEl(null);
        setSelectedNote(null);
    };

    const handleArchive = (e) => {
        e.stopPropagation();
        if (localNote.archived) {
            restoreArchivedNote(localNote.id);
        } else {
            archiveNote(localNote.id);
        }
        onClose();
    };

    // Menu handlers
    const handleMenuOpen = (e) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };

    // Track changes for undo/redo
    const pushHistory = (newState) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newState);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };

    // Handle field changes
    const handleChange = (field, value) => {
        if (isDeleted) {
            setSnackbarOpen(true);
            return;
        }

        const newNote = { ...localNote, [field]: value };
        setLocalNote(newNote);
        pushHistory(newNote);
    };

    // Auto-save changes
    useEffect(() => {
        if (historyIndex > 0 && !isDeleted) {
            const timeout = setTimeout(() => {
                updateNote(history[historyIndex]);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [historyIndex]);

    // Image handlers
    const handleImageDelete = () => {
        const newNote = { ...localNote, image: null };
        setLocalNote(newNote);
        pushHistory(newNote);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result;
            const newNote = { ...localNote, image: base64String };
            setLocalNote(newNote);
            pushHistory(newNote);
        };
        reader.readAsDataURL(file);
    };

    // Undo/redo handlers
    const canUndo = historyIndex > 0;
    const canRedo = historyIndex < history.length - 1;

    const handleUndo = () => {
        setHistoryIndex(Math.max(0, historyIndex - 1));
        setLocalNote(history[historyIndex - 1]);
    };

    const handleRedo = () => {
        setHistoryIndex(Math.min(history.length - 1, historyIndex + 1));
        setLocalNote(history[historyIndex + 1]);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" sx={{
            '& .MuiPaper-root': {
                backgroundColor: localNote.backgroundColor?.[theme.palette.mode] || 'background.paper'
            }
        }}>
            {/* Image Section */}
            {localNote.image && (
                <Box
                    sx={{
                        position: 'relative',
                        '&:hover .delete-image-btn': {
                            opacity: 1
                        }
                    }}
                    onMouseEnter={() => setShowDeleteImage(true)}
                    onMouseLeave={() => setShowDeleteImage(false)}
                >
                    <img
                        src={localNote.image}
                        alt="Note"
                        style={{
                            width: '100%',
                            maxHeight: '400px',
                            objectFit: 'contain',
                            borderRadius: '4px'
                        }}
                    />
                    {!isDeleted && (
                        <IconButton
                            className="delete-image-btn"
                            onClick={handleImageDelete}
                            sx={{
                                position: 'absolute',
                                bottom: 8,
                                right: 8,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                opacity: showDeleteImage ? 1 : 0,
                                transition: 'opacity 0.2s'
                            }}
                        >
                            <Delete />
                        </IconButton>
                    )}
                </Box>
            )}

            <DialogTitle>
                {isDeleted ? (
                    localNote.title
                ) : (
                    <TextField
                        fullWidth
                        value={localNote.title || ''}
                        onChange={(e) => handleChange('title', e.target.value)}
                        variant="standard"
                        disabled={isDeleted}
                    />
                )}
            </DialogTitle>

            <DialogContent>
                {/* Content Section */}
                {isDeleted ? (
                    <Typography paragraph sx={{ whiteSpace: 'pre-line' }}>
                        {localNote.content}
                    </Typography>
                ) : (
                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        value={localNote.content || ''}
                        onChange={(e) => handleChange('content', e.target.value)}
                        variant="outlined"
                        disabled={isDeleted}
                    />
                )}

                {/* Categories and Metadata Section */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2
                }}>
                    {/* Update categories display in DialogContent */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {(localNote.categories || [])
                            .filter(cat => cat !== 'Uncategorized')
                            .map(category => (
                                <Chip
                                    key={category}
                                    label={category}
                                    onDelete={!isDeleted ? () => handleCategoryToggle(category) : undefined}
                                />
                            ))}
                    </Box>

                    <Typography variant="caption" color="text.secondary">
                        {isDeleted ? 'Note in bin' : `Edited ${formatEditedAt(localNote.updatedAt)}`}
                    </Typography>
                </Box>
            </DialogContent>

            {/* Action Section */}
            <DialogActions sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2
            }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {!isDeleted ? (
                        <>
                            <Tooltip title="Background color">
                                <IconButton onClick={handleColorOpen}>
                                    <Palette />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Add image">
                                <IconButton component="label">
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                    <InsertPhoto />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={localNote.archived ? "Unarchive" : "Archive"}>
                                <IconButton onClick={handleArchive}>
                                    {localNote.archived ? <Unarchive /> : <Archive />}
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="More options">
                                <IconButton onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuAnchorEl(e.currentTarget);
                                }}>
                                    <MoreVert />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl)}
                                onClose={() => setMenuAnchorEl(null)}
                            >
                                <MenuItem onClick={() => {
                                    deleteNote(localNote.id);
                                    onClose();
                                }}>
                                    Delete Note
                                </MenuItem>
                                <MenuItem onClick={(e) => {
                                    e.stopPropagation();
                                    setCategoryAnchorEl(menuAnchorEl);
                                    setMenuAnchorEl(null);
                                }}>
                                    Change Categories
                                </MenuItem>
                                <MenuItem onClick={() => handleVersionDialogOpen(localNote)}>
                                    Version History
                                </MenuItem>
                            </Menu>

                            {renderCategoryMenu()}
                            {renderColorPicker()}
                            {renderVersionHistoryDialog()}

                            <Tooltip title="Undo">
                                <span>
                                    <IconButton
                                        onClick={handleUndo}
                                        disabled={!canUndo}
                                    >
                                        <Undo />
                                    </IconButton>
                                </span>
                            </Tooltip>

                            <Tooltip title="Redo">
                                <span>
                                    <IconButton
                                        onClick={handleRedo}
                                        disabled={!canRedo}
                                    >
                                        <Redo />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title="Delete permanently">
                                <IconButton onClick={() => {
                                    permanentlyDeleteNote(note.id);
                                    onClose();
                                }} color="error">
                                    <DeleteForever />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Restore note">
                                <IconButton onClick={() => { restoreDeletedNote(note.id); onClose(); }} color="primary">
                                    <RestoreFromTrash />
                                </IconButton>
                            </Tooltip>
                        </>
                    )}
                </Box>
                {renderColorPicker()}

                <Button onClick={onClose} variant="outlined">
                    Close
                </Button>
            </DialogActions>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message="Can't edit in bin"
                action={
                    <Button
                        color="primary"
                        size="small"
                        onClick={() => {
                            restoreDeletedNote(note.id);
                            onClose();
                        }}
                    >
                        Restore
                    </Button>
                }
            />
        </Dialog>
    );
}
