import { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import {
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
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
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import UangKas from "../../data/uangKas.json";
import { useSelector } from "react-redux";
import axios from "axios";

const UPLOAD_ENDPOINT =
  "https://backend-ultimacrews-project.vercel.app/uangkas";

export function Notifications() {
  const { user } = useSelector((state) => state.auth);
  const [file, setFile] = useState(null);
  const [month, setMonth] = useState("");
  const [notes, setNotes] = useState("");
  const [approval, setApproval] = useState("Pending");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    setStatus("");
    event.preventDefault();
    const formData = new FormData();
    formData.append("userId", user._id);
    formData.append("image", file);
    formData.append("bulan", month);
    formData.append("notes", notes);
    formData.append("status", approval);
    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setStatus(resp.status === 200 ? "Thank you!" : "Error.");
  };

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
      <Typography className="mt-3 block text-xl font-semibold text-[#011F39]">
        Hello, {user.username}!
      </Typography>
      <div className="">
        <form
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
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
              <div className="grid grid-cols-3 gap-2">
                <Typography variant="h7">File</Typography>

                <div className="col-span-2">
                  <input
                    className="dark:bg--700 block w-full rounded-lg border border-blue-gray-200 from-[#011F39] to-[#629FD4] p-2.5 text-sm text-blue-gray-500 file:mr-2 file:rounded-md file:border-x-0 file:border-y-0 file:bg-gradient-to-br file:px-7 file:py-2 file:text-white focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="default_size"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    JPG, JPEG, PNG (MAX. 2MB)
                  </p>
                </div>

                <Typography variant="h7">Month</Typography>
                <div className="col-span-2">
                  <select
                    id="countries"
                    className="dark:bg--700 block w-full rounded-lg border border-blue-gray-200 p-2.5 text-sm text-blue-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option selected>Choose a month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <Typography variant="h7">Note</Typography>
                <div className="col-span-2 pt-1">
                  <Input
                    type="text"
                    className="h-5/5"
                    label="Optional"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                  />{" "}
                  <br></br>
                  <Button
                    className="w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                    type="submit"
                    ripple={true}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </form>
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
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div
                  id="recipients"
                  className="mt-6 overflow-x-auto rounded bg-white shadow lg:mt-0"
                >
                  <table className="w-full min-w-[640px] table-auto">
                    <thead>
                      <tr>
                        {[
                          "Transaction Date",
                          "Image",
                          "Month",
                          "Notes",
                          "Status",
                        ].map((el) => (
                          <th
                            key={el}
                            className="border-b border-blue-gray-50 py-3 px-5 text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-bold uppercase text-blue-gray-400"
                            >
                              {el}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {UangKas.map(
                        ({ image, month, notes, status, date }, key) => {
                          const className = `py-3 px-5 ${
                            key === authorsTableData.length - 1
                              ? ""
                              : "border-b border-blue-gray-50"
                          }`;

                          return (
                            <tr key={date}>
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    {date}
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                <ModalImage
                                  small={image}
                                  large={image}
                                  className="h-20"
                                  srcSet="smallSrcSet"
                                  showRotate={true}
                                />
                              </td>
                              <td className={className}>
                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                  {month}
                                </Typography>
                              </td>
                              <td className={className}>
                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                  {notes}
                                </Typography>
                              </td>
                              <td className={className}>
                                <Chip
                                  variant="gradient"
                                  color={
                                    status === "Approved"
                                      ? "green"
                                      : status === "Declined"
                                      ? "red"
                                      : "blue"
                                  }
                                  value={status}
                                  className="py-0.5 px-2 text-[11px] font-medium"
                                />
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
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
