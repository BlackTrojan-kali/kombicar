import { useState } from 'react'
import './App.css'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function App() {
  
  return (
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <Routes/>
    </Router>
    </LocalizationProvider>
  )
}

export default App
