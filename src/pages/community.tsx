import { getArtInfo } from "@api/notion";
import {
	Heading,
	Image,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Art from "@components/community/art";
import SocialMedias from "@components/community/socialmedias";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import {
	default as NextChakraLink,
	default as NextLink,
} from "@components/nextChakra";
import type { ArtData, SpotifyLink } from "types";

const mainPlaylists: SpotifyLink[] = [
	{
		title: "Study Lofi",
		link: "https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1",
	},
	{
		title: "Jazz Lofi",
		link: "https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065",
	},
	{
		title: "90s Pop",
		link: "https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2",
	},
	{
		title: "2010-2015 Pop",
		link: "https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87",
	},
];

export default function Community({
	artInfo,
}: {
	artInfo: ArtData;
}): JSX.Element {
	return (
		<>
			<ContainerBackground src="/timmy/duck_group_shot.png" py={10}>
				<ContainerInside>
					<Stack
						textAlign="left"
						direction={{ base: "column", md: "row-reverse" }}
						spacing={{ base: 5, md: 10 }}
						justify="center"
					>
						<VStack
							flex={5}
							spacing={3}
							justify="center"
							align="flex-start"
						>
							<Heading size="2xl">Our Community</Heading>
							<Text fontSize="lg" textAlign="justify">
								Our organization features a global community of
								over 60,000 members. You’ll have opportunities
								to make new friends from all around the world in
								this diverse, open-minded, and inclusive
								institution.
							</Text>
							<NextChakraLink href="/discord" display="block">
								<Button
									timmysrc="/timmy/4.png"
									w="100%"
									h="100%"
								>
									Join Now
								</Button>
							</NextChakraLink>
						</VStack>
						<Art artInfo={artInfo} />
					</Stack>
				</ContainerInside>
			</ContainerBackground>

			<Container bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(108, 125, 254, 0.71) 100%)">
				<ContainerInside py={20}>
					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={{ base: 5, md: 20 }}
						alignItems="center"
					>
						<VStack
							boxSize="100%"
							align={{ base: "center", md: "left" }}
							alignItems="stretch"
							flex={2}
						>
							<Heading
								textAlign={{ base: "center", md: "left" }}
								py={3}
							>
								Our Discord Server
							</Heading>
							<Text textAlign="justify">
								There are over 60,000 members in our Discord
								server, many of which are middle school, high
								school, or college students that help one
								another with academics, extracurriculars, and
								life in general.
							</Text>
							<Text textAlign="justify" py={3}>
								Communication is through text, voice calls, and
								other methods!
							</Text>
							<NextChakraLink
								href="/discord"
								display="block"
								alignSelf="flex-start"
							>
								<Button timmysrc="/timmy/timmy_happy.png">
									Join Now
								</Button>
							</NextChakraLink>
						</VStack>
						<Stack
							align={{ base: "center", md: "left" }}
							flexDir={{ base: "column", md: "row" }}
						>
							<Image
								src="timmy/timmy_dino.png"
								alt="timmy dino"
								w="250px"
							/>
						</Stack>
					</Stack>
					{/* <Divider size="1px" h="20px" /> */}
				</ContainerInside>
			</Container>

			<Container bg="rgba(141, 149, 249, 0.71)">
				<ContainerInside>
					<Stack
						direction={{ base: "column", md: "row" }}
						justify="center"
						spacing={10}
						textAlign="left"
						py={20}
					>
						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded="20px"
							boxShadow="lg"
							justify="center"
						>
							<Heading>Events</Heading>
							<Text>We organize community events such as:</Text>
							<Stack pl={10}>
								<UnorderedList>
									<ListItem>Competitions</ListItem>
									<NextLink href="/simplihacks">
										<ListItem>Hackathons</ListItem>
									</NextLink>
									<ListItem>Talent Shows</ListItem>
									<ListItem>Movie Nights</ListItem>
									<ListItem>Game Nights</ListItem>
								</UnorderedList>
							</Stack>
							{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
						</Stack>

						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded="20px"
							boxShadow="lg"
							justify="center"
						>
							<Heading>Music</Heading>
							<Text>
								We curate playlists to help you study with
								genres such as:
							</Text>
							<Stack pl={10}>
								<UnorderedList>
									{mainPlaylists.map(
										(playlist, i: number) => {
											return (
												<NextLink
													href={playlist.link}
													key={i}
													isExternal
												>
													<ListItem>
														{playlist.title}
													</ListItem>
												</NextLink>
											);
										}
									)}
								</UnorderedList>
							</Stack>
							{/* 
								<Heading size="5px">
									Check out our Spotify for the complete list!
								</Heading> */}
						</Stack>

						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded="20px"
							boxShadow="lg"
							justify="center"
						>
							<Heading>Daily:</Heading>
							<Text>
								We post daily opportunities and entertainment
								such as:
							</Text>
							<Stack pl={10}>
								<UnorderedList>
									<ListItem>Internships</ListItem>
									<ListItem>Job Openings</ListItem>
									<ListItem>Student Discounts</ListItem>
									<ListItem>Motivational Quotes</ListItem>
									<ListItem>Fun Questions</ListItem>
								</UnorderedList>
							</Stack>
						</Stack>
					</Stack>
				</ContainerInside>
			</Container>

			<SocialMedias />
		</>
	);
}

export async function getServerSideProps() {
	const artInfo = await getArtInfo();
	return { props: { artInfo } };
}
