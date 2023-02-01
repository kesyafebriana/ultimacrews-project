import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import UserData from '../../data/users.json';
import axios from "axios";

export function Tables() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(UserData);

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://backend-ultimacrews-project.vercel.app/users");
    setUsers(response.data);
  };
  // console.log(getUsers)

  const urlFetch = fetch('https://backend-ultimacrews-project.vercel.app/uangkas')
   urlFetch.then( res => {
      if(res.status === 200)
         return res.json()   
   }).then( resJson => {
      this.setState({
          data: resJson
      })
   })
   console.log(urlFetch);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = UserData.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase()) || user.division.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(UserData);
    }
    setName(keyword);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" className="mb-1 p-6 bg-gradient-to-br from-[#011F39] to-[#629FD4]">
          <Typography variant="h6" color="white">
            DATA ULTIMACREWS
          </Typography>
          <Typography variant="small" color="white">
            See that cute guy in the studio? Find his bio here ;)
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-5 pb-2">
          <div className="w-100 mb-5">
            <Input
              type="search"
              value={name}
              onChange={filter}
              label="Search by Name or Division"
              icon={<i className="fas fa-search" />}
            />
          </div>
          <div className="grid gap-2 lg:grid-cols-3">
              {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map(
                (user) => (
                  <Link to={"../profile/"+user.id}>
                    <Card>
                      <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={user.id}>
                          <img
                              className="object-cover w-full h-72"
                              src={user.image}
                              alt="image"
                          />
                          <div className="p-4">
                              <h4 className="text-lg font-semibold text-[#629FD4]">
                              {user.name}
                              </h4>
                              <p className="mb-2 leading-normal">
                              {user.division}
                              </p>
                          </div>
                      </div>
                    </Card>
                  </Link>
                  )
              )):<h1>No results found!</h1>}
              </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
