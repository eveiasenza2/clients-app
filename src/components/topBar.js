import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CustomLink } from '../styles/globalStyles';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#008CBA'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ margin: 2 }}>
          <CustomLink to="/">Home</CustomLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 2 }}>
           <CustomLink to="/list">Clientes</CustomLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}