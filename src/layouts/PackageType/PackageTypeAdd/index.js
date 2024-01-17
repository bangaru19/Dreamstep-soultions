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
import { FormControl } from "@mui/material";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import select from "assets/theme/components/form/select";
import MDInput from "components/MDInput";
import menuItem from "assets/theme/components/menu/menuItem";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function PackageTypeAdd() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <MDBox component="form" role="form">
      <Card sx={{ maxWidth: "50%" }}>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Add Packagetype
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="" fullWidth>
                <InputLabel id="demo-simple-select-label">Select Service </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                  sx={{ minHeight: 50, paddingX: 2 }}

                >
                  <MenuItem value={1}>Tennis</MenuItem>
                  <MenuItem value={2}>Batminton</MenuItem>
                  <MenuItem value={3}>Skating</MenuItem>
                  <MenuItem value={4}>Swimming</MenuItem>
                </Select>

                <MDBox pt={2}>
                  <MDInput
                    type="text"
                    label="Enter Package Type name"
                    variant="outlined"
                    fullWidth
                  />
                </MDBox>
                <MDBox pt={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDButton variant="gradient" color="dark">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp; Add Package type
                  </MDButton>
                </MDBox>
              </FormControl>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default PackageTypeAdd;
