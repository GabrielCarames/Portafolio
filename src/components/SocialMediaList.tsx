import WhatsAppIcon from "../components/icons/WhatsAppIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GithubIcon from "../components/icons/GithubIcon";
import socialMediaLinks from "../utils/social_media_links.json";
import type { FC } from "react";

const socialMediaList = [
  <WhatsAppIcon className="h-10 w-10" />,
  <LinkedInIcon className="h-10 w-10" />,
  <GithubIcon className="h-10 w-10" />,
];

const SocialMediaList: FC = () => {
  return (
    <ul className="flex gap-5">
      {socialMediaList?.map((socialMedia, index) => (
        <li
          key={index}
          className="rounded-full shadow-lg duration-75 hover:scale-110"
        >
          <a href={Object.values(socialMediaLinks)[index]} target="_blank">
            {socialMedia}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
