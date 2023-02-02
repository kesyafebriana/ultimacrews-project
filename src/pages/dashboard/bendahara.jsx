import React from "react";
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

export function Bendahara() {
  const loggedUser = 1;
  const user = UserData[loggedUser - 1];

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
      <Typography className="mt-3 block text-xl font-semibold text-[#011F39]">
        Hello, Bendahara!
      </Typography>
      <Card>
        <CardHeader
          variant="filled"
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
                          "",
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
                              <td className={className}>
                                <Button
                                  className="w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                                  ripple={true}
                                >
                                  Edit
                                </Button>
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

export default Bendahara;
