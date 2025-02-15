import {
	FaDiscord,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
} from "react-icons/fa";
import type { SocialMediaIcon } from "types";

const GA_TRACKING_ID = "G-BM27XKVN6C";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	img: string;
};

const META: MetaType = {
	title: "School Simplified",
	lang: "en-us",
	// description:
	// 	"School Simplified is a virtually run nonprofit that aims to spread educational equality by providing free educational services, products, and opportunities for teenagers. We provide free tutoring, free Essay Revision, free notes, free college preparation, and a community where like-minded teenagers can meet and form life-lasting connections.",
	description: null,
	url: "https://schoolsimplified.tech",
	img: "/logo.png",
};

const socials: SocialMediaIcon[] = [
	// {
	// 	name: "Spotify",
	// 	link: "https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=e7557f7aad5c49c8",
	// 	icon: (props) => <FaSpotify {...props} />,
	// },
	{
		name: "Instagram",
		link: "https://www.instagram.com/schoolsimplified/",
		icon: FaInstagram,
	},
	{
		name: "TikTok",
		link: "https://www.tiktok.com/@schoolsimplified",
		icon: FaTiktok,
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
		icon: FaDiscord,
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/SchoolSimple",
		icon: FaFacebook,
	},
	{
		name: "Twitter",
		link: "https://twitter.com/SchoolSimplifed",
		icon: FaTwitter,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/school-simplified",
		icon: FaLinkedinIn,
	},
];

export { GA_TRACKING_ID, IS_PRODUCTION, META, socials };
