import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const IdeateLoadingScreen = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            width: '100%',
            px: 2,
        }}
    >
        <Typography variant="h4" component="div" gutterBottom>
            Ideate: Capture All Your Thoughts!
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <LinearProgress />
        </Box>
    </Box>
);

export default IdeateLoadingScreen;
