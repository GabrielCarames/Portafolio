import WhatsAppIcon from "../components/icons/WhatsAppIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import GithubIcon from "../components/icons/GithubIcon"
import GmailIcon from "./icons/GmailIcon"
import SOCIAL_MEDIA_LINKS from "../utils/social_media_links.json"
import type { FC } from "react"
import type {
  SOCIAL_MEDIA_LINKS_PROPS,
  SOCIAL_MEDIA_LIST_PROPS,
  SocialMediaListProps
} from "../interfaces"

const DEFAULT_CLASS_NAME = "!w-9 !h-9 md:!h-11 md:!w-11"

const SOCIAL_MEDIA_LIST: SOCIAL_MEDIA_LIST_PROPS = {
  WhatsApp: {
    id: 1,
    text: "+54 9 11 3915-3268",
    icon: <WhatsAppIcon className={DEFAULT_CLASS_NAME} />
  },
  LinkedIn: {
    id: 2,
    text: "linkedin.com/in/gabrielcarames/",
    icon: <LinkedInIcon className={DEFAULT_CLASS_NAME} />
  },
  Github: {
    id: 3,
    text: "github.com/GabrielCarames",
    icon: <GithubIcon className={DEFAULT_CLASS_NAME} />
  },
  Gmail: {
    id: 4,
    text: "gabrielcarames1@gmail.com",
    icon: <GmailIcon className={DEFAULT_CLASS_NAME} />
  }
}

const types = {
  vertical: "flex flex-wrap justify-between sm:grid sm:grid-cols-2 lg:flex lg:flex-col",
  horizontal: "flex-row"
}

const SocialMediaList: FC<SocialMediaListProps> = ({ type }) => {
  return (
    <ul className={`flex gap-5 ${types[type]}`}>
      {Object.keys(SOCIAL_MEDIA_LIST)?.map(socialMedia => (
        <li
          key={SOCIAL_MEDIA_LIST[socialMedia].id}
          className={`w-max rounded-full duration-75 ${
            type === "vertical" ? "hover:scale-105 hover:text-green-3" : "hover:scale-110"
          } sm:even:justify-self-end lg:even:justify-self-start `}
        >
          <a
            className="flex items-center gap-3"
            href={(SOCIAL_MEDIA_LINKS as SOCIAL_MEDIA_LINKS_PROPS)[socialMedia]}
            target="_blank"
          >
            {SOCIAL_MEDIA_LIST[socialMedia].icon}
            {type === "vertical" && <span className="">{SOCIAL_MEDIA_LIST[socialMedia].text}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialMediaList
