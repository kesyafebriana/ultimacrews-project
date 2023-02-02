import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";

export function Profile() {
  const id = useParams();
  const [url, setUrl] = useState(
    "https://backend-ultimacrews-project.vercel.app/users/" + id.id
  );
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setProfile(res.data);
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative mt-8 h-52 w-full overflow-hidden rounded-xl bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]" />
      </div>
      {loading && (
        <>
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}
      {!loading && (
        <>
          <Card className=" mx-3 -mt-28 mb-6 lg:mx-4">
            <CardBody className="p-4">
              <div className="mb-10 flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div>
                    <img
                      src={
                        "https://backend-ultimacrews-project.vercel.app/images/" +
                        profile.image
                      }
                      className="max-w-64 max-h-64 rounded-lg object-cover shadow-lg shadow-blue-gray-500/40"
                    />
                  </div>
                  <div className="col-span-2">
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                      {profile.username}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-600"
                    >
                      {profile.divisi}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="mb-6 px-4">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Profile Information
                  </Typography>
                  <div>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      Personal Information
                    </Typography>
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Fullname</div>
                        <div className="px-4 py-2">{profile.username}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Date of Birth
                        </div>
                        <div className="px-4 py-2">
                          {profile.tempatLahir}, {profile.tanggalLahir}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">NIM</div>
                        <div className="px-4 py-2">{profile.nim}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Angkatan</div>
                        <div className="px-4 py-2">{profile.angkatan}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">{profile.alamat}</div>
                      </div>
                    </div>
                    <Typography className="mt-4 mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      Contact Information
                    </Typography>
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Phone Number
                        </div>
                        <div className="px-4 py-2">{profile.nomorTelp}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Line ID</div>
                        <div className="px-4 py-2">{profile.lineId}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Instagram</div>
                        <div className="px-4 py-2">{profile.instagram}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="flex px-4 py-2">
                          <a
                            className="text-blue-800"
                            href={"mailto:" + profile.email}
                          >
                            {profile.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Evaluation Form
            </Typography>
            <Typography variant="small" className="mb-4">
              Send your evaluation or appreciation to {profile.username} here:
            </Typography>
            <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
              Room for Improvement:
            </Typography>
            <form>
              <textarea
                id="message"
                rows="4"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your messages here..."
              ></textarea>
              <div className="mt-3 mb-3 ml-1 flex">
                <div className="flex h-5 items-center">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value="anon"
                    className="h-4 w-4 rounded bg-gray-100 text-[#011F39] focus:ring-[#011F39] dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  ></input>
                </div>
                <div className="ml-2 text-sm">
                  <label
                    for="helper-checkbox"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Send as Anonymous
                  </label>
                  <p
                    id="helper-checkbox-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Your message will be sent anonymously, but can still be seen
                    by HRD (unless your message is sent to HRD).
                  </p>
                </div>
              </div>
              <Button
                className="mt-2 bg-gradient-to-br from-[#011F39] to-[#629FD4]"
                ripple={true}
              >
                Send
              </Button>
            </form>
          </div> */}
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
}

export default Profile;
