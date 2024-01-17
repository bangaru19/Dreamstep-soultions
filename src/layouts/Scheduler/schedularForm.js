// ... (imports)
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
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import  { useState,useEffect  } from "react";

function SchedularForm() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Simulating data fetching...
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const [filterButtonState, setFilterButtonState] = useState(0);

  const mockedSchedulerData = [
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24",
        title: "Joe Doe",
        subtitle: "Tennis Court 1"
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
          startDate: new Date("2023-04-13T15:31:24.272Z"),
          endDate: new Date("2023-08-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
          startDate: new Date("2023-10-07T08:16:31.123Z"),
          endDate: new Date("2023-11-15T21:55:23.582Z"),
          occupancy: 2852,
          title: "Project B",
          subtitle: "Subtitle B",
          description: "Tuna Home pascal IP drive",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
          startDate: new Date("2023-03-30T22:25:14.377Z"),
          endDate: new Date("2023-09-01T07:20:50.526Z"),
          occupancy: 1800,
          title: "Project C",
          subtitle: "Subtitle C",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "b088e4ac-9911-426f-aef3-843d75e714c2",
          startDate: new Date("2023-10-28T10:08:22.986Z"),
          endDate: new Date("2023-10-30T12:30:30.150Z"),
          occupancy: 11111,
          title: "Project D",
          subtitle: "Subtitle D",
          description: "Garden heavy an software Metal",
          bgColor: "rgb(254,165,177)"
        }
      ]
    },
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24",
        title: "Joe Doe",
        subtitle: " Tennis Court 2"
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
          startDate: new Date("2023-04-13T15:31:24.272Z"),
          endDate: new Date("2023-08-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
          startDate: new Date("2023-10-07T08:16:31.123Z"),
          endDate: new Date("2023-11-15T21:55:23.582Z"),
          occupancy: 2852,
          title: "Project B",
          subtitle: "Subtitle B",
          description: "Tuna Home pascal IP drive",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
          startDate: new Date("2023-03-30T22:25:14.377Z"),
          endDate: new Date("2023-09-01T07:20:50.526Z"),
          occupancy: 1800,
          title: "Project C",
          subtitle: "Subtitle C",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "b088e4ac-9911-426f-aef3-843d75e714c2",
          startDate: new Date("2023-10-28T10:08:22.986Z"),
          endDate: new Date("2023-10-30T12:30:30.150Z"),
          occupancy: 11111,
          title: "Project D",
          subtitle: "Subtitle D",
          description: "Garden heavy an software Metal",
          bgColor: "rgb(254,165,177)"
        }
      ]
    }
  ];

  return (
    <MDBox>
      <Card sx={{height: '100vh'}}>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Add Packages
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} style={{ height: '100%' }}>
              <MDBox>
                <Scheduler
                  data={mockedSchedulerData}
                  isLoading={isLoading}
                  onRangeChange={(newRange) => console.log(newRange)}
                  onTileClick={(clickedResource) => console.log(clickedResource)}
                  onItemClick={(item) => console.log(item)}
                  onFilterData={() => {
                    // Some filtering logic...
                    setFilterButtonState(1);
                  }}
                  onClearFilterData={() => {
                    // Some clearing filters logic...
                    setFilterButtonState(0);
                  }}
                  config={{
                    zoom: 0,
                    filterButtonState,
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default SchedularForm;
