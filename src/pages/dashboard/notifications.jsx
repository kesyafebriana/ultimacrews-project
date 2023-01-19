import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["blue", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-xl flex-col gap-8">
      <Typography variant="h4" color="black">
        Hello, (Nama)
      </Typography>
      <div class="columns-2">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Submit Payment
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4 overflow-auto">
            <div class="grid grid-cols-3 gap-2">
              <Typography variant="h7">File</Typography>
              <div class="col-span-2">
                <Button fullWidth variant="outlined" size="sm" ripple={true}>Select File</Button>
              </div>
              <Typography variant="h7">Month</Typography>
              <div class="col-span-2">
              <Menu placement="bottom">
                <MenuHandler>
                  <Button fullWidth size="sm" ripple={true}>Select Month</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Januari</MenuItem>
                  <MenuItem>Februari</MenuItem>
                  <MenuItem>dst...</MenuItem>
                </MenuList>
              </Menu>
              </div>
              <Typography variant="h7">Note</Typography>
              <div class="cols-span-2">
                <Input className="h-5/6" label="Optional" />
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Change Password
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4 overflow-auto">
            <div class="columns-2">
              <Typography variant="h7">Old Password</Typography>
            </div>
            <div class="columns-2">
            <Typography variant="h7">New Password</Typography>
            </div>
            <div class="columns-2">
            <Typography variant="h7">Confirm Password</Typography>
            </div>
          </CardBody>
        </Card>
      </div>
      <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Transaction List
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 relative overflow-x-auto">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div id='recipients' class="overflow-x-auto p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                    <table id="example" class="stripe hover min-w-full pt-4 pb-4">
                      <thead>
                        <tr>
                          <th data-priority="1">Transaction Date</th>
                          <th data-priority="2">Image</th>
                          <th data-priority="3">Month</th>
                          <th data-priority="4">Notes</th>
                          <th data-priority="5">Status</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
    </div>
  );
}

export default Notifications;
