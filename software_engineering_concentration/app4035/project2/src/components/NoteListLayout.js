import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Alert,
    ImageList,
    ImageListItem,
    Card,
    CardContent,
    Typography,
    Chip,
    IconButton,
    Tooltip,
    CardActions,
    Menu,
    MenuItem,
    Popover,
    TextField,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    Dialog,
    AppBar,
    Toolbar,
    Divider,
    Button,
    CardMedia,
    Snackbar
} from '@mui/material';
import {
    Archive,
    Unarchive,
    RestoreFromTrash,
    DeleteForever,
    MoreVert,
    Palette,
    InsertPhoto,
    Check,
    Search,
    Add,
    Close as CloseIcon,
    Description as DescriptionIcon,
} from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert';
import { useNotes } from '@/app/NotesContext';
import { getBase64FileSize } from '@/app/utils/file';
import { highlightText } from '@/app/utils/highlight';
import { useTheme } from '@mui/material/styles';
import NoteDialog from './NoteDialog';

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

const NoteListLayout = ({ loading, error, notes }) => {
    const { categoriesLoading, updateNote, archiveNote, restoreArchivedNote, deleteNote, restoreDeletedNote, permanentlyDeleteNote, categories, fetchCategories, createCategory } = useNotes();
    const [categorySearch, setCategorySearch] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [colorAnchorEl, setColorAnchorEl] = useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const { searchQuery, setSearchQuery } = useNotes();
    const [versionDialogOpen, setVersionDialogOpen] = useState(false);
    const [selectedVersionNote, setSelectedVersionNote] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleNoteClick = (note) => {
        setSelectedNote(note);
        setDialogOpen(true);
    };

    const COLOR_MAPPING = {
        dark: DARK_COLORS,
        light: LIGHT_COLORS
    };

    const getCorrespondingColor = (color, fromMode, toMode) => {
        const fromIndex = COLOR_MAPPING[fromMode].indexOf(color);
        return fromIndex !== -1 ? COLOR_MAPPING[toMode][fromIndex] : color;
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // Image upload handler
    const handleImageUpload = (event, note) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setSnackbarMessage('Please select a valid image file (JPEG, PNG, GIF, etc.)');
            setSnackbarOpen(true);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result;
            const size = getBase64FileSize(base64String);

            if (size > 5 * 1024 * 1024) {
                setSnackbarMessage('Image size exceeds 5MB limit');
                setSnackbarOpen(true);
                return;
            }

            updateNote({
                id: note.id,
                image: base64String,
                updatedAt: new Date().toISOString()
            });
        };
        reader.readAsDataURL(file);
    };

    // Version dialog state handlers
    const handleVersionDialogOpen = (note) => {
        setSelectedVersionNote(note);
        setVersionDialogOpen(true);
    };

    const handleVersionDialogClose = () => {
        setVersionDialogOpen(false);
        setSelectedVersionNote(null);
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
                    `<p class="categories">Categories: ${noteData.categories.filter(cat => cat !== 'Uncategorized' ||
                     noteData.categories.length === 1).join(', ')}</p>` : ''}
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

    useEffect(() => {
        // Only fetch categories if they're not already loaded
        if (categories.length === 0 && !categoriesLoading) {
            fetchCategories();
        }
    }, [fetchCategories, categories.length, categoriesLoading]);

    const handleCategoryMenuClose = () => {
        setCategoryAnchorEl(null);
        setSelectedNote(null);
        setCategorySearch('');
        handleMenuClose();
    };

    // Category management functions
    const handleCategoryToggle = (category) => {
        const currentCategories = selectedNote.categories || [];
        const newCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];

        // Update both global and local state
        updateNote({
            id: selectedNote.id,
            categories: newCategories
        });
        setSelectedNote(prev => ({
            ...prev,
            categories: newCategories
        }));
    };

    const handleCreateCategory = () => {
        if (categorySearch.trim() && !categories.includes(categorySearch)) {
            createCategory(categorySearch);
            handleCategoryToggle(categorySearch);
            setCategorySearch('');
            // Update both global state and local selected note
            updateNote({
                id: selectedNote.id,
                categories: [...(selectedNote.categories || []), categorySearch]
            });
            setSelectedNote(prev => ({
                ...prev,
                categories: [...(prev.categories || []), categorySearch]
            }));
        }
    };

    const filteredCategories = categories
        .filter(cat => cat.toLowerCase().includes(categorySearch.toLowerCase()))
        .filter(cat => cat !== 'Uncategorized');

    const showCreateOption = categorySearch.trim() &&
        !categories.includes(categorySearch) &&
        categorySearch !== 'Uncategorized';

    // Add Category menu component
    const renderCategoryMenu = () => (
        <Menu
            anchorEl={categoryAnchorEl}
            open={Boolean(categoryAnchorEl)}
            onClose={handleCategoryMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            disableAutoFocusItem
            sx={{
                '& .MuiPaper-root': {
                    marginLeft: '28px',
                    boxShadow: 3,
                    transform: 'translateY(-8px) !important'
                }
            }}
        >
            <Box sx={{ p: 1, width: 200 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Categorize Note
                </Typography>

                {categoriesLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                        <CircularProgress size={24} />
                    </Box>
                ) : (
                    <>

                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter new category"
                            value={categorySearch}
                            onChange={(e) => setCategorySearch(e.target.value)}
                            onKeyDown={(e) => {
                                // Prevent menu closure on 'C/c' key press
                                if (e.key.toLowerCase() === 'c') e.stopPropagation();
                            }}
                            onClick={(e) => e.stopPropagation()}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search fontSize="small" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{ mb: 2 }}
                        />

                        <List dense sx={{ maxHeight: 200, overflow: 'auto' }}>
                            {filteredCategories.map((category) => (
                                <ListItem
                                    key={category}
                                    component="div"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCategoryToggle(category);
                                    }}
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: 'action.hover'
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={selectedNote?.categories?.includes(category) ?? false}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={category} />
                                </ListItem>
                            ))}

                            {showCreateOption && (
                                <ListItem
                                    component="div"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCreateCategory();
                                    }}
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: 'action.hover'
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        <Add fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`Create "${categorySearch}"`}
                                        slotProps={{
                                            primary: {
                                                sx: { color: 'primary.main' }
                                            }
                                        }}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </>
                )}
            </Box>
        </Menu>
    );

    // Menu handlers
    const handleMenuOpen = (event, note) => {
        setAnchorEl(event.currentTarget);
        setSelectedNote(note);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedNote(null);
    };

    // Color picker handlers
    const handleColorOpen = (event, note) => {
        setColorAnchorEl(event.currentTarget);
        setSelectedNote(note);
    };

    const handleColorClose = () => {
        setColorAnchorEl(null);
        setSelectedNote(null);
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

        updateNote({
            id: selectedNote.id,
            // Use null instead of undefined for clearer state management
            backgroundColor: selectedColor === 'default' ? null : colorObject
        });
        handleColorClose();
    };

    // Category handlers
    const handleRemoveCategory = (note, categoryToRemove) => {
        const updatedCategories = note.categories.filter(cat => cat !== categoryToRemove);
        updateNote({
            id: note.id,
            categories: updatedCategories
        });
    };

    const renderCategories = (note) => {
        const validCategories = note.categories?.filter(cat =>
            cat !== 'Uncategorized'
        ) || [];

        return (
            <Box sx={{ mt: 1, mb: 1 }}>
                {validCategories.map((category) => (
                    <Chip
                        key={category}
                        label={highlightText(category, searchQuery, theme)}
                        size="small"
                        onDelete={!note.isDeleted ? () => handleRemoveCategory(note, category) : undefined}
                        sx={{
                            mr: 0.5,
                            mb: 0.5,
                            '& .MuiChip-label': { display: 'inline-block' },
                            '& .MuiChip-deleteIcon': {
                                fontSize: 14,
                                visibility: 'hidden'
                            },
                            '&:hover .MuiChip-deleteIcon': {
                                visibility: 'visible'
                            }
                        }}
                    />
                ))}
            </Box>
        );
    };

    // Action handlers
    const handleArchive = (note) => {
        note.archived ? restoreArchivedNote(note.id) : archiveNote(note.id);
    };

    const renderActions = (note) => {
        const isDeleted = note.isDeleted;

        return (
            <CardActions
                className="card-actions"
                sx={{
                    pt: 0,
                    px: 1,
                    pb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    opacity: selectedNote?.id === note.id ? 1 : 0,
                    visibility: selectedNote?.id === note.id ? 'visible' : 'hidden',
                    transition: 'opacity 0.2s, visibility 0.2s',
                    '&:hover': {
                        opacity: 1,
                        visibility: 'visible'
                    }
                }}
            >
                {!isDeleted && (
                    <Box>
                        <Tooltip title="Background options">
                            <IconButton
                                size="small"
                                onClick={(e) => { e.stopPropagation(); handleColorOpen(e, note) }}
                                sx={{ color: 'text.secondary' }}
                            >
                                <Palette fontSize="small" />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Add image">
                            <IconButton
                                size="small"
                                sx={{ color: 'text.secondary' }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const input = document.createElement('input');
                                    input.type = 'file';
                                    input.accept = 'image/*';
                                    input.style.display = 'none';
                                    input.onchange = (event) => handleImageUpload(event, note);
                                    document.body.appendChild(input);
                                    input.click();
                                    document.body.removeChild(input);
                                }}
                            >
                                <InsertPhoto fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}

                <Box>
                    {isDeleted ? (
                        <>
                            <Tooltip title="Delete forever">
                                <IconButton
                                    size="small"
                                    color="error"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        permanentlyDeleteNote(note.id);
                                    }}
                                >
                                    <DeleteForever fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Restore">
                                <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        restoreDeletedNote(note.id);
                                    }}
                                >
                                    <RestoreFromTrash fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title={note.archived ? "Unarchive" : "Archive"}>
                                <IconButton
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleArchive(note);
                                    }}
                                    color={note.archived ? "primary" : "default"}
                                >
                                    {note.archived ? <Unarchive fontSize="small" /> : <Archive fontSize="small" />}
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="More options">
                                <IconButton
                                    size="small"
                                    onClick={(e) => { e.stopPropagation(); handleMenuOpen(e, note) }}
                                    sx={{ color: 'text.secondary' }}
                                >
                                    <MoreVert fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </>
                    )}
                </Box>
            </CardActions>
        );
    };

    const renderColorPicker = () => {
        const currentColors = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

        return (
            <Popover
                open={Boolean(colorAnchorEl)}
                anchorEl={colorAnchorEl}
                onClose={handleColorClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
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
                        {!selectedNote?.backgroundColor && <Check fontSize="small" />}
                    </IconButton>
                    {currentColors.map((color) => (
                        <IconButton
                            key={color}
                            onClick={() => handleColorSelect(color)}
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: color,
                                '&:hover': { backgroundColor: color },
                                border: selectedNote?.backgroundColor === color ? '2px solid' : 'none',
                                borderColor: theme.palette.mode === 'dark' ? 'white' : 'black'
                            }}
                        >
                            {selectedNote?.backgroundColor === color && <Check fontSize="small" />}
                        </IconButton>
                    ))}
                </Box>
            </Popover>
        );
    };

    const renderMenu = () => (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <MenuItem onClick={() => {
                deleteNote(selectedNote.id);
                handleMenuClose();
            }}>
                Delete note
            </MenuItem>
            <MenuItem onClick={(e) => {
                e.stopPropagation();
                setCategoryAnchorEl(anchorEl);
                setSelectedNote(selectedNote);
            }}>
                Change categories
            </MenuItem>
            <MenuItem onClick={() => {
                handleVersionDialogOpen(selectedNote);
                handleMenuClose();
            }}>
                Version history
            </MenuItem>
        </Menu>
    );

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

    // Version history dialog
    const renderVersionHistoryDialog = () => {
        return (
            <Dialog
                open={versionDialogOpen}
                onClose={() => { }}
                disableEscapeKeyDown
                fullWidth
                maxWidth="md"
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 2,
                            height: '60vh', // Set fixed height for parent container
                            overflow: 'hidden' // Prevent inner content from overflowing
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
                            <CloseIcon />
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
        )
    };

    if (loading && notes.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', p: 1 }}>
            {notes.length === 0 ? (
                <Alert severity="info">No notes found</Alert>
            ) : (
                <>
                    <ImageList variant="masonry" cols={6} gap={8}>
                        {notes.map((note) => (
                            <ImageListItem key={note.id}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 2,
                                        backgroundColor: note.backgroundColor?.[theme.palette.mode] || 'background.paper',
                                        "&:hover": {
                                            boxShadow: 3,
                                            ".card-actions": {
                                                opacity: 1,
                                                visibility: "visible",
                                            },
                                        },
                                    }}
                                    onClick={() => handleNoteClick(note)}
                                >
                                    <CardContent>
                                        {note.image && (
                                            <Box sx={{
                                                mb: 1,
                                                mx: -1, // Negative margin to counter card padding
                                                mt: -1, // Negative margin to align with top
                                                width: `calc(100% + 16px)`, // Compensate for card padding
                                            }}>
                                                <CardMedia
                                                    component="img"
                                                    image={note.image}
                                                    alt="Note attachment"
                                                    sx={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        maxHeight: 300,
                                                        objectFit: 'contain',
                                                        display: 'block',
                                                        borderTopLeftRadius: 8, // Match card borderRadius
                                                        borderTopRightRadius: 8,
                                                    }}
                                                />
                                            </Box>
                                        )}
                                        <Typography variant="h6">
                                            {highlightText(note.title, searchQuery, theme)}
                                        </Typography>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line', mt: 1 }}>
                                            {highlightText(note.content, searchQuery, theme)}
                                        </Typography>
                                        {renderCategories(note)}
                                    </CardContent>
                                    {renderActions(note)}
                                </Card>
                            </ImageListItem>
                        ))}
                    </ImageList>
                    {renderMenu()}
                    {renderColorPicker()}
                    {renderCategoryMenu()}
                    {renderVersionHistoryDialog()}
                </>
            )}
            {selectedNote && (
                <NoteDialog
                    key={selectedNote.id}
                    open={dialogOpen}
                    onClose={() => {
                        setDialogOpen(false);
                        setSelectedNote(null);
                    }}
                    note={selectedNote}
                />
            )}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleSnackbarClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </Box>
    );
};

export default NoteListLayout;
