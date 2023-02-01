import React from "react";
import random from "random";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
} from "@material-tailwind/react";
import UserData from "../../data/users.json";
import Evaluation from "../../data/evaluation.json";
import Quotes from "../../data/quotes.json";

export function Home() {
  const loggedUser = 1;
  const quote = random.int(0,102);
  const user = UserData[loggedUser-1];
  
  const evaluation = Evaluation.filter(item => item.userIdReceiver.includes(loggedUser));
  return (
    <>
      <Typography className="mt-3 mb-4 block text-xl font-semibold text-[#011F39]">
        Hello, {user.name}!
      </Typography>
      <div class="grid md:grid-cols-2">
        <div className="md:mr-4 mb-4">
        <Card className="h-full">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4 overflow-auto my-auto">
            <Typography variant="h4" className="text-center">
              {Quotes[quote].quote}
            </Typography>
            <Typography className="text-center">
              - {Quotes[quote].author}
            </Typography>
          </CardBody>
        </Card>
        </div>
        <div className="mb-4">
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
          <CardBody className="p-4">
            <form>
              <Input variant="static" type="password" label="Old Password"></Input> <br />
              <Input variant="static" type="password" label="New Password"></Input> <br />
              <Input variant="static" type="password" label="Confirm New Password"></Input> <br />
              <Button
                className="mt-1 bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                ripple={true}
              >
                Change Password
              </Button>
            </form>
          </CardBody>
        </Card>
        </div>
      </div>
      <Card className="mt-10">
      <CardHeader variant="gradient" className="mb-1 p-6 bg-gradient-to-br from-[#011F39] to-[#629FD4]">
          <Typography variant="h4" color="white">
            Here are some feedbacks for you!
          </Typography>
        </CardHeader>
        <CardBody className="px-5 pb-8">
        <div className="grid gap-2">
              {evaluation && evaluation.length > 0 ? (
                evaluation.map(
                (evaluation) => (
                      <div className="w-full rounded-lg shadow-md" key={evaluation.id}>
                          <div className="p-4">
                              <Typography variant="h6">
                                <b className="mr-1">Sender: </b> 
                                {evaluation.status? "Anonymous":UserData[evaluation.userIdSender-1].name}
                              </Typography>
                              <Typography variant="h6">
                                <b className="mr-1">Messages: </b> 
                              </Typography>
                              <p className="mb-2 leading-normal">
                              {evaluation.notes}
                              </p>
                          </div>
                      </div>
                  )
              )):<h1 className="ml-2 mb-5">Belum ada pesan untukmu. . .</h1>}
              </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Home;
