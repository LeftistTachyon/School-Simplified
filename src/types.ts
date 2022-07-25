import type { ReactNode } from "react";

export type NotesProps = {
	title: string;
	file: FileObj;
};

export type Subject = {
	title: string | null;
	content: Class[];
};

export type Sponsor = {
	image: string;
	link: string;
};

export type Class = {
	title: string | null;
	content: Unit[];
	icon: {
		type: string;
		emoji?: string;
		file?: FileObj;
	} | null;
};

export type Unit = {
	title: string;
	content: NotesProps[];
};

export type AllSubjects = {
	subjects: Subject[];
};

export type ArtData = {
	image: string;
	description: string;
	monthlyPrompt: string;
	name: string;
	socialMedia: SocialMedia[];
};

export type SocialMedia = {
	media: string;
	tag: string;
	link?: string;
};

export type QAPair = {
	question: string;
	answer: AnswerPart[];
};

export type QASection = {
	title: string;
	list: QAPair[];
};

/**
 * A text fragment of the FAQ page
 * @property {string} text the text that the text fragment should be rendered as
 * @property {string} link the URL that the text should hyperlink to. If this is an empty string, this text fragment should not be rendered as a link
 */
export type AnswerPart = {
	text: string;
	link: string;
};

export type GovernanceSection = {
	title: string;
	docs: GovernanceDocument[];
};

export type GovernanceDocument = {
	title: string;
	href: string;
};

export type Person = {
	name: string;
	title: string;
	img: string;
};

export type ProjectWinner = {
	names: string;
	title: string;
	prize: string;
	link: string;
	img: string;
};

export type SpotifyLink = {
	title: string;
	link: string;
};

export type SocialMediaIcon = {
	name: string;
	link: string;
	icon: any;
};

export type ScholarshipProps = {
	title: string;
	link: string;
	value: string;
	international_or_domestic: string[];
	state: string[];
	eligible_grades: string[];
	open_date: string;
	closing_date: string;
	notes: string;
	key: string;
};

export type VolunteerPanelProps = {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
	link: string;
	key: string;
};

export type BlogListing = {
	title: string;
	id: string;
	created_time: string;
	last_edited_time: string;

	link: string;
	category: string;
	icon: string;
	authors?: Author[];
};

export type Author = {
	id?: string | undefined;
	name: string;
	avatar_url: string;
	// email: string;
};

export type BlogPage = {
	blocks: any[];
};

export type LinkButtonProps = {
	href: string;
	iconName?: string;
	text: string;
};

/**
 * A representation of Notion's file object.
 * See more at https://developers.notion.com/reference/file-object
 */
export type FileObj = {
	/**
	 * The URL to the file that this object describes
	 */
	url: string;
	/**
	 * The time when this file object's URL will expire, in ISO 8601 date time
	 * Only applicable when the file is hosted on Notion's servers
	 */
	expiry_time?: string;
};

/**
 * A type that represents a job posting pulled from the Applications database on Notion
 * Any values that are not included in the listing will be given the value of null
 */
export type JobPosting = {
	/**
	 * An array of rich text objects that represents the description of the posting.
	 * Please use the parseText in notion.ts to convert this any[] into a React element
	 */
	details: string;
	/**
	 * An array of rich text objects that represents the requirements of the posting.
	 * Please use the parseText in notion.ts to convert this any[] into a React element
	 */
	requirements: string;
	/**
	 * An array of rich text objects that represents the resposibilities of the posting.
	 * Please use the parseText in notion.ts to convert this any[] into a React element
	 */
	responsibilities: string;
	/**
	 * The rank of this posting, as a string
	 */
	rank: string;
	/**
	 * The URL to the form to this posting, as a string
	 */
	form: string;
	/**
	 * The programs that this posting's job is a part of, as a string
	 */
	programs: string[];
	/**
	 * An image that accompanies this posting.
	 * Stored as a Notion file object
	 */
	image: FileObj;
	/**
	 * The area of expertise that this job demands the most of, as a string
	 */
	area: string;
	/**
	 * The name of the job for this posting, as a string
	 */
	name: string;
};

/**
 * A type that represents a person who has a biography on our website.
 * Contains all data that is necessary to display a person card
 */
export type BiographyInfo = {
	// ID is not included
	/**
	 * Their name, likely as a title case string in Latin letters
	 */
	name: string;
	/**
	 * Their title (e.g. Director or President of Research Simplified)
	 */
	title: string;
	/**
	 * A file for their image
	 * Try to keep this as a SS website link for optimal loading
	 */
	image?: FileObj;
	/**
	 * An email that is connected with this person, if applicable
	 */
	email?: string;
	/**
	 * A URL that leads to this person's Linkedin, if applicable.
	 */
	linkedin?: string;
	/**
	 * A URL that leads to this person's Personal Website, if applicable.
	 */
	personalWebsite?: string;
	/**
	 * A URL that leads to this person's Twitter, if applicable.
	 */
	twitter?: string;
	/**
	 * A URL that leads to this person's Facebook, if applicable.
	 */
	facebook?: string;
	/**
	 * A URL that leads to this person's Instagram, if applicable.
	 */
	instagram?: string;
	/**
	 * If the type field is `"notion"`, this carries a copy/paste of the
	 * Notion-style rich text objects that compose their bio
	 *
	 * If the type field is `"react"`, this carries a `ReactNode` that
	 * represents their bio
	 */
	biography?: BiographyData;
};

/**
 * If the type field is `"notion"`, this carries a copy/paste of the
 * Notion-style rich text objects that compose their bio
 *
 * If the type field is `"react"`, this carries a `ReactNode` that
 * represents their bio
 */
export type BiographyData =
	| { type: "notion"; data: any[] }
	| { type: "react"; data: ReactNode };

/**
 * A group of executives
 */
export type ExecutiveGroup = {
	/**
	 * The name of this group/category
	 */
	name: string;
	/**
	 * A list of executives under this group/category
	 */
	executives: BiographyInfo[];
};

/**
 * A research opportunity, displayed on /research
 */
export type Opportunity = {
	/**
	 * The title given to this opportunity.
	 */
	title: string;
	/**
	 * The city that this opportunity is located in.
	 * (Is multiple choice (?))
	 */
	city: string[];
	/**
	 * The deadline for applying to this opportunity
	 */
	deadline: string[];
	/**
	 * A brief description of this opportunity
	 */
	description: string;
	/**
	 * The age/grade range that this opportunity is catered to
	 */
	grade: string[];
	/**
	 * A link to more information or the application for this opportunity
	 */
	link: string;
	/**
	 * A general timeframe of when this opportunity will take place
	 */
	semester: string[];
	/**
	 * The state/region that this research opportunity will take place
	 */
	state: string[];
	/**
	 * Tags that relate to the status of this opportunity.
	 * e.g. in-person or virtual, cost
	 */
	status: string[];
	/**
	 * A list of topics that this opportunity falls into
	 */
	topic: string[];
	/**
	 * A list of tags that categorize this research opportunity further
	 */
	type: string[];
};
export type ResearchCategory = {
	humanName: string;
	isMulti: boolean;
	values: string[];
};
