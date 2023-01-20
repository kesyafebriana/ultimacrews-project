import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import UserData from "../../data/users.json";

export function Profile() {
  const id = useParams();
  const profile = UserData[id.id - 1];

  return (
    <>
      <div className="relative mt-8 h-52 w-full overflow-hidden rounded-xl bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#011F39] to-[#629FD4]" />
      </div>
      <Card className=" mx-3 -mt-28 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <img
                src={profile.image}
                className="max-w-64 max-h-64 rounded-lg object-cover shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {profile.name}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {profile.division}
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
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Fullname</div>
                    <div class="px-4 py-2">{profile.name}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Date of Birth</div>
                    <div class="px-4 py-2">
                      {profile.tempatLahir}, {profile.tanggalLahir}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">NIM</div>
                    <div class="px-4 py-2">{profile.nim}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Angkatan</div>
                    <div class="px-4 py-2">{profile.angkatan}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Address</div>
                    <div class="px-4 py-2">{profile.alamat}</div>
                  </div>
                </div>
                <Typography className="mt-4 mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                  Contact Information
                </Typography>
                <div className="grid text-sm md:grid-cols-2">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Phone Number</div>
                    <div class="px-4 py-2">{profile.noTelp}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Line ID</div>
                    <div class="px-4 py-2">{profile.idLine}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Instagram</div>
                    <div class="px-4 py-2">{profile.instagram}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href={"mailto:" + profile.email}>
                        {profile.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Evaluation Form
            </Typography>
            <Typography variant="small" className="mb-4">
              Send your evaluation or appreciation to {profile.name} here:
            </Typography>
            <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
              Room for Improvement:
            </Typography>
            <form>
              <textarea
                id="message"
                rows="4"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your messages here..."
              ></textarea>
              <div class="flex mt-3 mb-3 ml-1">
                <div class="flex h-5 items-center">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value="anon"
                    class="h-4 w-4 rounded bg-gray-100 text-[#011F39] focus:ring-[#011F39] dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  ></input>
                </div>
                <div class="ml-2 text-sm">
                  <label
                    for="helper-checkbox"
                    class="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Send as Anonymous
                  </label>
                  <p
                    id="helper-checkbox-text"
                    class="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Your message will be sent anonymously, but can still be seen by HRD (unless your message is sent to HRD).
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
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
