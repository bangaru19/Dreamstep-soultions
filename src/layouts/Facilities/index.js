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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React from "react";
import Dialog from "@mui/material/Dialog";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import facilitiesData from "layouts/Facilities/data/facilitiesData";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import FacilityForm from "./FacilitiesForm/facilityForm";
import { useState } from "react";


function Facilities() {
  const { columns, rows } = facilitiesData();
  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={6}>
          <Grid item xs={12}>
      <MDBox pt={2} display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="dark" onClick={() => setOpen(true)}>
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp; Add Facility
                </MDButton>
              </MDBox>
              </Grid>
              </Grid>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Facilites List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    
        <FacilityForm open={open} setOpen={setOpen} />

    
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Facilities;
