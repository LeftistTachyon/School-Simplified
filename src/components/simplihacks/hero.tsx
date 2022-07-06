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
		link: "https://forms.gle/vW83UXrRH5QPb24XA",
		text: "Sign Up",
		icon: "/timmy/timmy_book_icon.png",
	},
	{
		link: "https://discord.gg/school",
		text: "Discord",
		icon: "/timmy/timmy_happy_icon.png",
	},
	{
		link: "https://simplihacks-2.devpost.com/",
		text: "DevPost",
		icon: "/timmy/timmy_shocked_icon.png",
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
								<Heading fontSize={40}>SimpliHacks 2.0</Heading>
								<Image
									src="/logos/mlh-trust-badge.png"
									maxH={150}
								/>
							</HStack>
							<Text textAlign="left" fontSize="22px">
								Want to take your coding skills to the next
								level? Want to compete to win awesome prizes and
								internship opportunities? Want to learn to build
								amazing websites and apps?
							</Text>
							<Text textAlign="left" fontSize="22px">
								We can help you do just that with SimpliHacks
								2.0!
							</Text>
							<Text textAlign="left" fontSize="22px">
								SimpliHacks 2.0 is School Simplified’s second
								annual 48-hour virtual hackathon. Programmers of
								all levels are welcome to attend! Whether you’ve
								never written a ‘Hello World’ script or if
								you’re building the next Google! As a developer
								in SimpliHacks, you can create projects to enter
								a wide variety of judging categories to possibly
								win some awesome prizes! The Hackathon is also a
								great place to pick up new skills, as we plan to
								run two days packed with interesting workshops
								and events with the help of our sponsors!
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
								src="/timmy/timmy_shocked.png"
								alt="Timmy shocked"
							/>
						</Box>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
