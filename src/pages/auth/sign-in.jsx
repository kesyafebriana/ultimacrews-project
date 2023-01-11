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

export function SignIn() {
  return (
    <>
      <img
        src={BackgroundAuth}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute mt-5 top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center bg-gradient-to-r from-[#011F39] to-[#629FD4]"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" className="bg-gradient-to-r from-[#011F39] to-[#629FD4]" fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
