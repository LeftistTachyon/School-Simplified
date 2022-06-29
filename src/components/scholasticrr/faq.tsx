import { Box, Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { QAPair } from "types";

const qaPairs: QAPair[] = [
	{
		question: "What exactly is a Scholastic Relay Race?",
		answer: [
			{
				text: "A Scholastic Relay Race is a team competition where one subject will have to be completed in order to move onto the next one. Find more information ",
				link: "",
			},
			{
				text: "here",
				link: "https://docs.google.com/document/u/0/d/1NfPBT23Kke-b-R6yy1hSEs175RD_sDME7UupPkDLUV0/",
			},
			{ text: ".", link: "" },
		],
	},
	{
		question:
			"What if I have no preeexisting knowledge about any of the subjects?",
		answer: [
			{
				text: "You can still compete as the tests are all open-internet! This means you can use as much Google as you want.",
				link: "",
			},
		],
	},
	{
		question: "How do I sign up?",
		answer: [
			{
				text: "Fill out the form here: ",
				link: "",
			},
			{
				text: "https://forms.gle/iUtomK8QscvtGgjy7",
				link: "https://forms.gle/iUtomK8QscvtGgjy7",
			},
		],
	},
	{
		question: "Who can compete?",
		answer: [
			{
				text: "There is no age limit! There will, however, be two separate divisions - one for K-12 exclusively and the other for anyone. ",
				link: "",
			},
		],
	},
	{
		question: "What are the rules?",
		answer: [
			{
				text: "You can find the rules ",
				link: "",
			},
			{
				text: "here",
				link: "https://docs.google.com/document/d/1NfPBT23Kke-b-R6yy1hSEs175RD_sDME7UupPkDLUV0/edit?usp=sharing",
			},
			{
				text: "!",
				link: "",
			},
		],
	},
	{
		question: "What if I don't have a team?",
		answer: [
			{
				text: "In the discord, look for the team search channel and find a team!",
				link: "",
			},
		],
	},
	{
		question: "Does this cost money?",
		answer: [
			{
				text: "No, entry is free.",
				link: "",
			},
		],
	},
	{
		question: "When does this take place?",
		answer: [
			{
				text: "There is no specific date set, but it will take place around the last week of July or first week of August.",
				link: "",
			},
		],
	},
	{
		question: "What are the prizes?",
		answer: [
			{
				text: "To be decided!",
				link: "",
			},
		],
	},
	{
		question: "What if I have another question?",
		answer: [
			{
				text: "Contact us at ",
				link: "",
			},
			{
				text: "rachel.yoon@schoolsimplified.org ",
				link: "mailto:rachel.yoon@schoolsimplified.org",
			},
			{
				text: "or",
				link: "",
			},
			{
				text: "victor.hesu@schoolsimplified.org",
				link: "mailto:victor.hesu@schoolsimplified.org",
			},
			{
				text: "!",
				link: "",
			},
		],
	},
];

export default function FAQ(): JSX.Element {
	return (
		<Box py={3}>
			<Container py={19}>
				<ContainerInside>
					<Heading as="h1" m={5}>
						Frequently Asked Questions
					</Heading>
					<FaqList list={qaPairs} />
				</ContainerInside>
			</Container>
		</Box>
	);
}
