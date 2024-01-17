/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import Icon from "@mui/material/Icon";


// Images

export default function data() {
  // const Author = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     {/* <MDTypography variant="caption">{description}</MDTypography> */}
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "sno", accessor: "sno", align: "left" },
      { Header: "name", accessor: "name", align: "left" },
      { Header: "category", accessor: "category", align: "left" },
      { Header: "location", accessor: "location", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis Court 1
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis
          </MDTypography>
        ),
        location: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jain Road
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sapcious Court
          </MDTypography>
        ),
        action: (
          <>
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
            <Icon sx={{ cursor: "pointer" }} fontSize="small" color="error">
              delete
            </Icon>
          </>
        ),
      },
      {
        sno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis Court 2
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis
          </MDTypography>
        ),
        location: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jain Road
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sapcious Court
          </MDTypography>
        ),
        action: (
          <>
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
            <Icon sx={{ cursor: "pointer" }} fontSize="small" color="error">
              delete
            </Icon>
          </>
        ),
      },
      {
        sno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis Court 3
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tennis
          </MDTypography>
        ),
        location: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jain Road
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sapcious Court
          </MDTypography>
        ),
        action: (
          <>
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
            <Icon sx={{ cursor: "pointer" }} fontSize="small" color="error">
              delete
            </Icon>
          </>
        ),
      },
      {
        sno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Swimming Pool
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Swimming pool
          </MDTypography>
        ),
        location: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jain Road
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sapcious pool
          </MDTypography>
        ),
        action: (
          <>
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
            <Icon sx={{ cursor: "pointer" }} fontSize="small" color="error">
              delete
            </Icon>
          </>
        ),
      },
      {
        sno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Batminton
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Batminton
          </MDTypography>
        ),
        location: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jain Road
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sapcious Court
          </MDTypography>
        ),
        action: (
          <>
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
            <Icon sx={{ cursor: "pointer" }} fontSize="small" color="error">
              delete
            </Icon>
          </>
        ),
      },
    ],
  };
}
