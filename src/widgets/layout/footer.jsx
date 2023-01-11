import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink }) {

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; 2023, made with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-[#629FD4]"
          >
            {brandName}
          </a>{" "}
        </Typography>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "IT & Software Development Gen XII",
  brandLink: "https://radio.umn.ac.id/",
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
