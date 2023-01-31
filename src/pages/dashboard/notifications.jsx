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
  Textarea,
} from "@material-tailwind/react";
import UserData from "../../data/users.json";

export function Notifications() {
  const loggedUser = 1;
  const user = UserData[loggedUser - 1];
  $(document).ready(function() {
  $('#transaction').DataTable({
    ajax: '/mock/data.json',
    columns: [
        {
            data: 'date',
        },
        {
            data: 'image',
            render: function(data, type){
                if (type === 'display'){
                    return `<a href="${data}" target="_blank"><img class="w-108" src="${data}"></a>`
                }
                return data
            },
        },
        {
            data: 'month',
        },
        {
            data: 'notes',
            render: function(data, type){
              if (type === 'display'){
                return `<p class="break-all">${data}</p>`
              }
              return data
            },
        },
        {
            data: 'status',
        },
    ],
    responsive: true,
    destroy: true
    })
    .columns.adjust()
    .responsive.recalc();
    
    $('#buglist').DataTable({
    ajax: '/mock/databug.json',
    columns: [
        {
          data: 'date',
        },
        {
          data:'username',
        },
        {
          data:'location',
        },
        {
          data: 'image',
            render: function(data, type){
                if (type === 'display'){
                    return `<a href="${data}" target="_blank"><img class="w-48" src="${data}"></a>`
                }
                return data
            },
        },
        {
          data: 'link',
          render: function(data, type){
              if (type === 'display'){
                return `<a href="${data}" target="_blank"><p class="text-blue-800 hover:underline">Link</p></a>`
              }
              return data
            },
        },
        {
          data: 'description',
            render: function(data, type){
              if (type === 'display'){
                return `<p class="break-all">${data}</p>`
              }
              return data
            },
        },
    ],
    destroy: true
    })
    .columns.adjust()
    .responsive.recalc();
    // console.log("ready");
});

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
                  <input type="file" 
                  id="payment_choosefile"
                  className="block text-sm text-slate-500 
                  file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                  file:bg-blue-gray-100 bg-white text-blue-gray-500 focus:border-blue-500 focus:ring-blue-500 
                  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 
                  dark:focus:ring-blue-500">
                  </input>
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
                  <table id="transaction" class="table-auto stripe hover min-w-full pt-4 pb-4">
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
      <Card className="mt-10">
      <CardHeader variant="gradient" className="mb-1 p-6 bg-gradient-to-br from-[#011F39] to-[#629FD4]">
          <Typography variant="h4" color="white">
            Bug Report Form
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 overflow-auto px-5 pb-8">
        <form>
              <div class="grid grid-cols-3 gap-2">
                
                <Typography variant="h7">Username</Typography>
                <div class="col-span-2">
                  <Input id="bug_link" className="w-full" label="Required" />
                </div>

                <Typography variant="h7">Bug Location</Typography>
                <div class="col-span-2">
                  <select
                    id="bug_location"
                    class="block w-full rounded-lg border 
                    border-blue-gray-200 bg-white p-2.5 text-sm text-blue-gray-500 
                    focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                    dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 
                    dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option selected>Bug Location</option>
                    <option value="January">Website UMNRadio</option>
                    <option value="February">Website Ultimacrews</option>
                    <option value="March">Android App</option>
                  </select>
                </div>
                
                <Typography variant="h7">File Screenshot</Typography>
                <div class="col-span-2">
                  <input type="file" 
                  id="bug_choosefile"
                  className="block text-sm text-slate-500 
                  file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                  file:bg-blue-gray-100 bg-white text-blue-gray-500 focus:border-blue-500 focus:ring-blue-500 
                  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 
                  dark:focus:ring-blue-500">
                  </input>
                </div>

                <Typography variant="h7">Link</Typography>
                <div class="col-span-2">
                  <Input id="bug_link" className="w-full" label="Optional" />
                </div>

                <Typography variant="h7">Bug Description</Typography>
                <div class="col-span-2">
                  <Textarea id="bug_desc" 
                  className="block w-full rounded-lg border-2 
                  border-blue-gray-200 bg-white p-2.5 text-sm text-blue-gray-500 
                  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                  dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 
                  dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                  placeholder="Please add as much details as possible. (Optional)"></Textarea>
                </div>

                <div class="col-start-2 col-span-2">
                   <br /><Button
                  id="bug_submitbtn"
                  className="w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                  ripple={true}>
                  Submit
                  </Button>
                </div>
              </div>
            </form>
        </CardBody>
      </Card>

      <Card className="mt-10">
      <CardHeader variant="gradient" className="mb-1 p-6 bg-gradient-to-br from-[#011F39] to-[#629FD4]">
          <Typography variant="h4" color="white">
            Bugs Report List
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 overflow-auto px-5 pb-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div
              id="recipients"
              class="mt-6 overflow-x-auto rounded bg-white p-8 shadow lg:mt-0"
            >
              <table id="buglist" class="table-auto stripe hover min-w-full pt-4 pb-4">
                <thead>
                  <tr>
                    <th data-priority="1">Date</th>
                    <th data-priority="2">Username</th>
                    <th data-priority="3">Location</th>
                    <th data-priority="4">Image</th>
                    <th data-priority="5">Link</th>
                    <th data-priority="6">Description</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;

