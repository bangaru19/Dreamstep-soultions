import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDTypography from "components/MDTypography";
import { useState } from 'react';
import MDInput from "components/MDInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MDBox from "components/MDBox";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import MDButton from "components/MDButton";



function FacilityForm({ open, setOpen }) {
    const handleClose = () => {
      setOpen(false);
    };
    const [category, setCategory] = React.useState("");
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle><MDTypography variant="h6" fontWeight="medium">
            Add Facility
          </MDTypography></DialogTitle>
        <DialogContent>
        <MDBox pt={4}>
        <FormControl fullWidth variant="outlined" sx={{ height: '30px'}}>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select Service"
          onChange={handleChange}
          sx={{ height: '40px', padding: '16px' }}
        
        >
          <MenuItem value={1}>Tennis</MenuItem>
          <MenuItem value={2}>Badminton</MenuItem>
          <MenuItem value={3}>Skating</MenuItem>
          <MenuItem value={4}>Swimming</MenuItem>
        </Select>
        </FormControl>
                
              </MDBox>
    
          <MDBox pt={4}>
                <MDInput type="text" label="Enter Facility Name" variant="outlined" fullWidth />
              </MDBox>      
                </DialogContent>
        <DialogActions>
        <MDBox>
          <MDButton  variant="outlined"  color="dark" onClick={handleClose}>Cancel</MDButton>
          </MDBox>
          <MDBox>
          <MDButton type="submit"variant="gradient" color="dark">
          
             Save
          </MDButton>
        </MDBox>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default FacilityForm;