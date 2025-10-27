'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    IconButton,
    Tooltip,
    Box,
    ClickAwayListener,
    Collapse,
    CircularProgress,
    Popover,
} from '@mui/material';
import { Check, Delete, Image, Palette, InsertPhoto } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNotes } from '../NotesContext';

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

export function NewNoteEditor() {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [localNote, setLocalNote] = useState({
        title: '',
        content: '',
        id: undefined,
        image: null,
        backgroundColor: null,
    });
    const [isUpdating, setIsUpdating] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const [colorAnchorEl, setColorAnchorEl] = useState(null);
    const theme = useTheme();
    const initialNoteRef = useRef(localNote);
    const abortControllerRef = useRef(new AbortController());

    const { addNote, updateNote, deleteNote } = useNotes();

    // Note creation/update lifecycle handler
    useEffect(() => {
        const controller = abortControllerRef.current;
        let isMounted = true;

        const handleNoteUpdate = async () => {
            try {
                if (!localNote.id) {
                    // Create new note when first input is detected
                    if (title.trim() || content.trim()) {
                        const newNote = await addNote({
                            title,
                            content,
                        });

                        setLocalNote(prev => ({
                            ...prev,
                            id: newNote.id,
                            title: newNote.title,
                            content: newNote.content
                        }));

                        initialNoteRef.current = newNote;
                    }
                } else {
                    // Update existing note when changes detected
                    const hasChanges =
                        title !== initialNoteRef.current.title ||
                        content !== initialNoteRef.current.content ||
                        localNote.image !== initialNoteRef.current.image;

                    if (hasChanges) {
                        const updatedNote = await updateNote({
                            id: localNote.id,
                            title,
                            content,
                            image: localNote.image,
                        }, { signal: controller.signal });

                        initialNoteRef.current = updatedNote;
                    }
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Note operation failed:", error);
                }
            }
        };

        const timeout = setTimeout(() => {
            handleNoteUpdate();
        }, 1000);

        return () => {
            isMounted = false;
            controller.abort();
            abortControllerRef.current = new AbortController();
            clearTimeout(timeout);
        };
    }, [title, content, localNote, addNote, updateNote]);

    const handleClose = useCallback(async () => {
        abortControllerRef.current.abort();

        try {
            // Delete empty notes on close
            if (localNote.id && !title.trim() && !content.trim() && !localNote.image) {
                await deleteNote(localNote.id);
            }
        } catch (error) {
            console.error("Error cleaning up note:", error);
        }

        // Reset ALL input states
        setTitle(''); // Reset title state
        setContent(''); // Reset content state
        setLocalNote({
            title: '',
            content: '',
            id: undefined,
            image: null,
            backgroundColor: null,
        });
        setExpanded(false);
    }, [localNote, deleteNote, title, content]);

    const renderColorPicker = () => {
        const currentColors = theme.palette.mode === 'dark' ? DARK_COLORS : LIGHT_COLORS;

        const handleColorSelect = async (color) => {
            try {
                // Create note if it doesn't exist
                if (!localNote.id) {
                    const newNote = await addNote({
                        title,
                        content,
                        backgroundColor: color === 'default' ? null : {
                            dark: color,
                            light: color
                        },
                    });

                    setLocalNote({
                        ...newNote,
                        backgroundColor: newNote.backgroundColor
                    });
                } else {
                    await updateNote({
                        id: localNote.id,
                        backgroundColor: color === 'default' ? null : {
                            dark: color,
                            light: color
                        }
                    });
                }
            } catch (error) {
                console.error("Color update failed:", error);
            }
        };

        return (
            <Popover
                open={Boolean(colorAnchorEl)}
                anchorEl={colorAnchorEl}
                onClose={() => setColorAnchorEl(null)}
            >
                <Box sx={{ p: 2, display: 'flex', gap: 1, flexWrap: 'wrap', width: 200 }}>
                    <IconButton
                        onClick={() => handleColorSelect('default')}
                        sx={{ border: '1px solid', borderColor: 'divider', width: 40, height: 40 }}
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
                                border: localNote.backgroundColor?.dark === color ? '2px solid' : 'none',
                                borderColor: theme.palette.mode === 'dark' ? 'white' : 'black'
                            }}
                        >
                            {localNote.backgroundColor?.dark === color && <Check fontSize="small" />}
                        </IconButton>
                    ))}
                </Box>
            </Popover>
        );
    };

    return (
        <>
            {!expanded ? (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: 1,
                        p: 1,
                        width: '50%',
                        mx: 'auto',
                        my: 2,
                        boxShadow: 1,
                        cursor: 'text'
                    }}
                    onClick={() => setExpanded(true)}
                >
                    <TextField
                        fullWidth
                        placeholder="Take a note..."
                        variant="standard"
                        slotProps={{
                            input: {
                                disableUnderline: true
                            }
                        }}
                    />
                    <Tooltip title="New note with image">
                        <IconButton component="label" disabled={imageUploading}>
                            {imageUploading ? <CircularProgress size={20} /> : <Image fontSize="small" />}
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    const reader = new FileReader();
                                    reader.onload = async (e) => {
                                        setImageUploading(true);
                                        try {
                                            const newNote = await addNote({
                                                image: e.target.result,
                                                title: '',
                                                content: '',
                                            });
                                            setLocalNote({
                                                ...newNote,
                                                image: e.target.result
                                            });
                                            setExpanded(true);
                                        } finally {
                                            setImageUploading(false);
                                        }
                                    };
                                    reader.readAsDataURL(file);
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                </Box>
            ) : (
                <ClickAwayListener onClickAway={() => !localNote.id || handleClose()}>
                    <Collapse in={expanded} sx={{ maxWidth: '50%', mx: 'auto' }}>
                        <Card
                            variant="outlined"
                            sx={{
                                backgroundColor: localNote.backgroundColor?.[theme.palette.mode],
                                borderRadius: 2,
                                boxShadow: 3
                            }}
                        >
                            {localNote.image && (
                                <Box sx={{ position: 'relative' }}>
                                    <img
                                        src={localNote.image}
                                        alt="Note preview"
                                        style={{
                                            width: '100%',
                                            maxHeight: '300px',
                                            objectFit: 'cover',
                                            borderRadius: '8px 8px 0 0'
                                        }}
                                    />
                                    <IconButton
                                        onClick={async () => {
                                            try {
                                                await updateNote({ id: localNote.id, image: null });
                                                setLocalNote(prev => ({ ...prev, image: null }));
                                            } catch (error) {
                                                console.error("Failed to remove image:", error);
                                            }
                                        }}
                                        sx={{
                                            position: 'absolute',
                                            bottom: 8,
                                            right: 8,
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                            color: 'white'
                                        }}
                                    >
                                        <Delete fontSize="small" />
                                    </IconButton>
                                </Box>
                            )}

                            <CardContent>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    autoFocus
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="Take a note..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    multiline
                                    minRows={3}
                                />
                            </CardContent>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Tooltip title={!localNote.id ? "Create note first to change background" : "Background color"}>
                                        <span> {/* Wrap for disabled tooltip */}
                                            <IconButton
                                                onClick={(e) => setColorAnchorEl(e.currentTarget)}
                                                disabled={!localNote.id}
                                            >
                                                <Palette fontSize="small" />
                                            </IconButton>
                                        </span>
                                    </Tooltip>

                                    <Tooltip title="Add image">
                                        <IconButton component="label">
                                            <InsertPhoto fontSize="small" />
                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (!file) return;

                                                    const reader = new FileReader();
                                                    reader.onload = async (e) => {
                                                        try {
                                                            // First create the note if it doesn't exist
                                                            if (!localNote.id) {
                                                                const newNote = await addNote({
                                                                    title: '',
                                                                    content: '',
                                                                    image: e.target.result,
                                                                });
                                                                setLocalNote({
                                                                    ...newNote,
                                                                    image: e.target.result
                                                                });
                                                            } else {
                                                                // Update existing note
                                                                await updateNote({
                                                                    id: localNote.id,
                                                                    image: e.target.result
                                                                });
                                                                setLocalNote(prev => ({
                                                                    ...prev,
                                                                    image: e.target.result
                                                                }));
                                                            }
                                                        } catch (error) {
                                                            console.error("Image upload failed:", error);
                                                        }
                                                    };
                                                    reader.readAsDataURL(file);
                                                }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </Box>

                                <Button onClick={handleClose} variant="text" sx={{ textTransform: 'capitalize' }}>
                                    {localNote.id ? 'Close' : 'Discard'}
                                </Button>
                            </Box>

                            {renderColorPicker()}
                        </Card>
                    </Collapse>
                </ClickAwayListener>
            )}
        </>
    );
}
