import React, { useState } from "react";
import random from "random";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
} from "@material-tailwind/react";
import Quotes from "../../data/quotes.json";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "@/features/authSlice.js";

export function Home() {
  const [quote,setQuote] = useState(random.int(0,102));
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch2 = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch2(getMe());
  }, [dispatch2]);

  useEffect(() => {
    if (isError) {
      navigate("/auth/sign-in");
    }
  }, [isError, navigate]);

  useEffect(() => {
    if (isSuccess) {
      setUsername(user.username);
    }
  }, [isSuccess]);
  

  // const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //   const response = await axios.get("https://backend-ultimacrews-project.vercel.app/users");
  //   setUsers(response.data);
  //   console.log(response.data)
  // };

  const formData = {
    "password": password,
    "newPassword": newPassword,
    "confirmPassword": confirmPassword,
  };

  useEffect(() => {
    setQuote(random.int(0,102));
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("password", password);
    // formData.append("newPassword", newPassword);
    // formData.append("confirmPassword", confirmPassword);
    // console.log(password);
    const resp = await axios.patch("https://backend-ultimacrews-project.vercel.app/users/"+user._id, formData);
    if(resp.status===201){
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setStatus("Done!");
    } else {
      setStatus("Error! Please make sure your entry is correct.");
    }
  };
  
  // const evaluation = Evaluation.filter(item => item.userIdReceiver.includes(loggedUser));
  return (
    <>
      <Typography className="mt-3 mb-4 block text-xl font-semibold text-[#011F39]">
        Hello, {username}!
      </Typography>
      {/* <button onClick={getUsers}>tes fetch api</button> */}
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
            <form onSubmit={handleSubmit}>
              <Input variant="static" type="password" onChange={(e) => setPassword(e.target.value)} value={password} label="Old Password"></Input> <br />
              <Input variant="static" type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} label="New Password"></Input> <br />
              <Input variant="static" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} label="Confirm New Password"></Input> <br />
              <Button
                className="mt-1 bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                ripple={true}
                type="submit"
              >
                Change Password
              </Button>
              {status!=="" && <p className="mt-2">{status}</p>}
            </form>
          </CardBody>
        </Card>
        </div>
      </div>
      {/* <Card className="mt-10">
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
      </Card> */}
    </>
  );
}

export default Home;
