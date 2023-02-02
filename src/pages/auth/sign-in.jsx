import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import BackgroundAuth from "../../assets/background-auth.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "@/features/authSlice.js";
import { useEffect, useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard/home");
    }
    // dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <img
        src={BackgroundAuth}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <form onSubmit={Auth}>
          <Card className="absolute top-2/4 left-2/4 mt-5 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              className="mb-4 grid h-28 place-items-center bg-gradient-to-r from-[#011F39] to-[#629FD4]"
              color=""
              shadow={false}
              floated={false}
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Email"
                size="lg"
              />
              <Input
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                size="lg"
              />
            </CardBody>
            <CardFooter className="pt-0">
              {/* <Link to="../../dashboard/home"> */}
              <Button
                type="submit"
                variant="gradient"
                className="bg-gradient-to-r from-[#011F39] to-[#629FD4]"
                fullWidth
              >
                Sign In
              </Button>
              {/* </Link> */}
            </CardFooter>
          </Card>
          <p>{status}</p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
