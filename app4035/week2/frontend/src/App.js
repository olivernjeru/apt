import React from "react";
import { CssBaseline, Container, Typography, Button, Box, Paper } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          marginTop: "5rem",
          borderRadius: "10px",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to APP4035
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
            This course is designed to enhance your skills and take your learning to the next level.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "1rem" }}
            onClick={() => alert("Welcome to APP4035! Let's begin!")}
          >
            Start Learning
          </Button>
        </Paper>
        <Box marginTop="2rem">
          <Typography variant="caption" color="textSecondary">
            © 2025 APP4035 | All rights reserved
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
