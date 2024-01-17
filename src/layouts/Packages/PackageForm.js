/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import MDInput from "components/MDInput";
import select from "assets/theme/components/form/select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import DatePick from "components/DatePick/DatePicker";

function PackageForm() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <MDBox component="form" role="form">
      <Card>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Add Packages
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox>
              <FormControl fullWidth variant="outlined" sx={{ height: '30px'}}>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select Service"
          onChange={handleChange}
          sx={{ height: '40px', padding: '16px' }}
          fullWidth
        >
          <MenuItem value={1}>Tennis</MenuItem>
          <MenuItem value={2}>Badminton</MenuItem>
          <MenuItem value={3}>Skating</MenuItem>
          <MenuItem value={4}>Swimming</MenuItem>
        </Select>
      </FormControl>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox>
              <FormControl fullWidth variant="outlined" sx={{ height: '30px'}}>
        <InputLabel id="demo-simple-select-label">Select PackageType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select PackageType"
          onChange={handleChange}
          sx={{ height: '40px', padding: '16px' }}
          fullWidth
        >
          <MenuItem value={1}>1 Moth Basic pack</MenuItem>
          <MenuItem value={2}>Premium Pack</MenuItem>
          <MenuItem value={3}>Premium Family Pack</MenuItem>
          <MenuItem value={4}>12 Months Pack</MenuItem>
        </Select>
      </FormControl>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox>
                <MDInput type="text" label="Enter Package name" variant="outlined" fullWidth />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox>
              <FormControl fullWidth variant="outlined" sx={{ height: '30px'}}>
              
        <DatePick label="Basic date picker" />
        
      </FormControl>
      </MDBox>
      </Grid>
            <Grid item xs={12} md={6}>
              <MDBox>
                <MDInput type="text" label="Enter Price" variant="outlined" fullWidth />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox>
                <MDInput
                  type="text"
                  label="Enter Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          pt={2}
          pb={2}
          px={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MDButton variant="gradient" color="dark">
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp; Add Packages
          </MDButton>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default PackageForm;
