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
            <form>
              <div class="grid grid-cols-3 gap-2">
                <Typography variant="h7">File</Typography>
                <div class="col-span-2">
                  <Button fullWidth variant="outlined" size="sm" ripple={true}>
                    Select File
                  </Button>
                </div>
                <Typography variant="h7">Month</Typography>
                <div class="col-span-2">
                  <select
                    id="month"
                    class="block w-full rounded-lg border border-blue-gray-200 bg-white p-2.5 text-sm text-blue-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option selected>Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                  </select>
                </div>
                <Typography variant="h7">Notes</Typography>
                <div class="col-span-2">
                  <Input className="w-full" label="Optional" /> <br />
                  <Button
                className="w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                ripple={true}
              >
                Submit
              </Button>
                </div>
              </div>
            </form>
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
