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

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function bookingsData() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "customer", accessor: "customer", width: "35%", align: "left" },
      { Header: "service", accessor: "service", align: "left" },
      { Header: "facility", accessor: "facility", align: "left" },
      { Header: "Payment status", accessor: "paymentstatus", align: "center" },
      { Header: "Booking Date & Time", accessor: "booking", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        customer: <Author image={team2} name="Raju"/>,
        service: <Job title="Tennis" />,
        
        facility: <Job title="Court 1"/>,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Payed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            17/02/2024 : 9:00 AM - 10:00 AM
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        customer: <Author image={team3} name="Raghava" />,
        service: <Job title="Tennis" />,
        facility: <Job title="Court 2"/>,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        17/02/2024 : 11:00 AM - 12:00 PM

          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        customer: <Author image={team4} name="Ramya" />,
        service: <Job title="Batminton" />,
        facility: <Job title="Court 1" />,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Payed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                                   17/02/2024 : 12:00 PM - 01:00 PM

          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        customer: <Author image={team3} name="Srinu"/>,
        service: <Job title="Tennis" />,
        facility: <Job title="Court 2" />,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Payed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           17/02/2024 : 01:00 PM - 02:00 PM
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        customer: <Author image={team3} name="Thomas" />,
        service: <Job title="Skating" />,
        facility: <Job title="Skating Ground"/>,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           17/02/2024 : 02:00 PM - 03:00 PM
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        customer: <Author image={team4} name="Jagadesh" />,
        service: <Job title="Swimming" />,
        facility: <Job title="Pool Area"/>,
        paymentstatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        booking: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          17/02/2024 : 10:00 AM - 11:00 AM
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
