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
import UserData from "../../data/users.json";

export function Notifications() {
  const loggedUser = 1;
  const user = UserData[loggedUser - 1];

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
      <Typography className="mt-3 block text-xl font-semibold text-[#011F39]">
        Hello, {user.name}!
      </Typography>
      <div class="">
        <form method="post" enctype="multipart/form-data">
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
            <CardBody className="flex flex-col gap-4 overflow-auto p-4">
              <div class="grid grid-cols-3 gap-2">
                <Typography variant="h7">File</Typography>

                <div class="col-span-2">
                  <Input
                    class="bg-white-50 block w-full cursor-pointer rounded border border-blue-400 bg-white text-sm text-gray-900"
                    id="file_input"
                    type="file"
                    name="buktiTRF"
                  />
                </div>

                <Typography variant="h7">Month</Typography>
                <div class="col-span-2">

                  <Menu placement="bottom">
                    <MenuHandler>
                      <Button
                        fullWidth
                        variant="outlined"
                        size="sm"
                        ripple={true}
                      >
                        Select Month
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Januari</MenuItem>
                      <MenuItem>Februari</MenuItem>
                      <MenuItem>Maret</MenuItem>
                      <MenuItem>April</MenuItem>
                      <MenuItem>Mei</MenuItem>
                      <MenuItem>Juni</MenuItem>
                      <MenuItem>Juli</MenuItem>
                      <MenuItem>Agustus</MenuItem>
                      <MenuItem>September</MenuItem>
                      <MenuItem>Oktober</MenuItem>
                      <MenuItem>November</MenuItem>
                      <MenuItem>Desember</MenuItem>
                    </MenuList>
                  </Menu>
                  
                </div>
                <Typography variant="h7">Note</Typography>
                <div class="col-span-2 pt-1">
                  <Input className="h-5/5" label="Optional" />
                </div>
              </div>
              <div class="col-span-2">
                <Button type="submit" fullWidth ripple={true}>
                  Submit File
                </Button>
              </div>
            </CardBody>
          </Card>
        </form>
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
          <CardBody className="flex flex-col gap-4 overflow-hidden p-4 ">
            <div class="columns-3">
              <Typography variant="h7">Old Password</Typography>
              <Input className="h-5/6" />
            </div>
            <div class="columns-3">
              <Typography variant="h7">New Password</Typography>
              <Input className="h-5/6" />
            </div>
            <div class="columns-3">
              <Typography variant="h7">Confirm Password</Typography>
              <Input className="h-5/6" />
            </div>
            <div class="col-span-2 pr-36">
              <Button fullWidth ripple={true}>
                Update Password
              </Button>
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
            <div className="relative col-span-3 overflow-x-auto">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div
                  id="recipients"
                  class="mt-6 overflow-x-auto rounded bg-white p-8 shadow lg:mt-0"
                >
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
