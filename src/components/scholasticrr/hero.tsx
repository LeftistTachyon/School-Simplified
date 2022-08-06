import {
	Box,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

type ButtonType = {
	link: string;
	text: string;
	icon: string;
};

const buttons: ButtonType[] = [
	{
		link: "https://forms.gle/3g5no4bqqWw2qJYk8",
		text: "Sign Up",
		icon: "/timmy/timmy_book_icon.png",
	},
	{
		link: "https://discord.gg/school",
		text: "Discord",
		icon: "/timmy/timmy_happy_icon.png",
	},
	{
		link: "https://docs.google.com/document/u/0/d/1NfPBT23Kke-b-R6yy1hSEs175RD_sDME7UupPkDLUV0/",
		text: "Rules",
		icon: "/timmy/tutoring.png",
	},
];

export default function Hero(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside py={50}>
					<HStack justify="center" spacing={0}>
						<VStack align="stretch" spacing={22} flex={2}>
							<HStack justify="space-between">
								<Heading fontSize={40}>
									Scholastic Relay Race
								</Heading>
							</HStack>
							<Text textAlign="left" fontSize="22px">
								Looking to expand your knowledge or stay fresh
								over the summer? Participate in this challenging
								time-incentivized competition that caters toward
								anyone’s interests. Form a team and focus on
								each of your areas of expertise by tackling our
								five subjects!
							</Text>
							<Text textAlign="left" fontSize="22px">
								Not only does the competition accommodate for
								schedules by taking place over a whole week, but
								it also offers the chance for people of any age
								to participate.
							</Text>
							<Text textAlign="left" fontSize="22px">
								The Scholastic Relay Race is a team-based,
								open-internet competition where you can compete
								with your friends to win tons of prizes! Come
								join us and experience a fun, engaging
								competition!
							</Text>
							<Stack
								direction={{ base: "column", md: "row" }}
								spacing={3}
							>
								{buttons.map((button) => {
									return (
										<NextLink
											href={button.link}
											target="_blank"
											key={button.text}
										>
											<Button timmysrc={button.icon}>
												{button.text}
											</Button>
										</NextLink>
									);
								})}
							</Stack>
						</VStack>
						<Box flex={1} display={{ base: "none", lg: "block" }}>
							<Image
								// minW={350}
								src="/timmy/Timmy_Essay.png"
								alt="Timmy holding list"
							/>
						</Box>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
