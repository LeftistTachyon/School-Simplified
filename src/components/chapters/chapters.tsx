import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	ListItem,
	ScaleFade,
	Spacer,
	Stack,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";

export default function Chapters(): JSX.Element {
	return (
		<>
			<Container pt={50} px={{ base: 0, lg: 10 }} bg="#5E65B7">
				<ContainerInside maxWidth={780}>
					<Stack align="start" textAlign="left">
						<Heading size="lg">Start Your Own Chapter</Heading>
						<Text mt={3}>
							School Simplified chapters are the perfect blend of
							flexibility and rigor.
						</Text>
						<NextLink
							isExternal
							href="https://docs.google.com/forms/d/e/1FAIpQLSesSX3Lislu9m6j_Cgwu3eALgAm0RJ1iTvxcGih82B0J0iXmg/viewform?usp=sf_link"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								timmysrc="/timmy/timmy_flying_icon.png"
								my={3}
							>
								Apply Now
							</Button>
						</NextLink>
					</Stack>
				</ContainerInside>
			</Container>

			<Container pb={2} px={{ base: 0, lg: 10 }} bg="#5E65B7">
				<ContainerInside maxWidth={780}>
					<Divider bg="white" my="20px" />
					<Center>
						<HStack>
							<VStack align="start" textAlign="left">
								<Heading fontSize={26}>
									Taking Chapters to the Next Level
								</Heading>
								<Text mt={6} textAlign="left">
									With the chapters program, motivated
									students from around the world are able to
									gain leadership experience, conduct service
									projects, and helps others progress in their
									academics.
								</Text>
								<Text mt={6} textAlign="left">
									From tutoring to essay revisions, college
									resources, and so much more, each chapter is
									free to focus on one or more areas of
									interest.
								</Text>
							</VStack>
							<Spacer maxW={{ md: 5, lg: 20 }} />
						</HStack>
						<Image
							src="/timmy/puzzle_timmy.png"
							w={{ md: 200, lg: 230 }}
							display={{ base: "none", md: "block" }}
							alt="Timmy with puzzle pieces"
						/>
					</Center>
				</ContainerInside>
			</Container>
			<Center bg="#5E65B7">
				<Container pb={50} px={{ base: 0, lg: 10 }}>
					<ContainerInside>
						<motion.div
							initial="initial"
							whileInView="onView"
							variants={fadeIn()}
						>
							<ScaleFade in={true} unmountOnExit={false}>
								<Flex
									rounded={25}
									overflow="hidden"
									h={{ base: 400, sm: 300, md: 250, lg: 230 }}
									maxW={900}
								>
									{/* <Box
										backgroundImage="/SS_Chapters_Map.png"
										backgroundSize="cover"
										backgroundPosition="center"
										flex={1}
										display={{ base: "none", lg: "block" }}
									/> */}
									<Box
										// backgroundSize="cover"
										// backgroundPosition="center"
										flex={1}
										display={{
											base: "none",
											lg: "block",
										}}
									>
										<iframe
											src="https://www.google.com/maps/d/embed?mid=1FAgyAhinh_vkevQ7EN1HVUxUlS4GG-_4&ehbc=2E312F"
											width="450"
											height="480"
											// alt="Chapters Google Maps with States Highlighted"
										/>
										{/* https://www.google.com/maps/d/u/1/edit?mid=1FAgyAhinh_vkevQ7EN1HVUxUlS4GG-_4&usp=sharing */}
									</Box>
									<VStack
										justify="center"
										align={{
											base: "center",
											lg: "flex-start",
										}}
										bg="#ffffff"
										py={5}
										pl={{ base: 5, lg: 5 }}
										pr={5}
										flex={1}
										spacing={2}
									>
										<Heading
											size="lg"
											textAlign={{
												base: "center",
												lg: "left",
											}}
											color="#5E65B7"
										>
											Regions
										</Heading>
										<Text textAlign="left" color="#5E65B7">
											Each geographical region is divided
											into districts with Governors who
											are appointed on a rolling basis by
											the National Staff.
										</Text>
									</VStack>
								</Flex>
							</ScaleFade>
						</motion.div>
					</ContainerInside>
				</Container>
			</Center>
			<Container
				bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
				py={14}
				px={{ base: 0, lg: 40 }}
			>
				<ContainerInside overflow="hidden" textAlign="left">
					<Flex flexDir="column" align="stretch">
						<motion.div initial="initial" whileInView="onView">
							<Heading size="lg">
								How to Bring School Simplified To Your Community
							</Heading>
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={fadeIn()}
							>
								<HStack spacing={10}>
									<Image
										src="/timmy/space_timmy.png"
										w={{ md: 200, lg: 230 }}
										display={{ base: "none", md: "block" }}
										alt="Space Timmy"
									/>
									<VStack alignItems="left">
										<Text mt={4} textAlign="left">
											To start a chapter, there are a few
											steps you need to complete first:
										</Text>
										<UnorderedList>
											<ListItem>
												Submit a School Simplified
												Charter application.
											</ListItem>
											<ListItem>
												Elect officers (specifically
												each of the following):
												President, Vice President,
												Secretary, Treasurer, and a
												Marketing Officer.
											</ListItem>
											<ListItem>
												Review any essential documents
												with elected officers.
											</ListItem>
											<ListItem>
												Start recruiting chapter
												members.
											</ListItem>
											<ListItem>
												Host fun events during your
												school year!
											</ListItem>
										</UnorderedList>
									</VStack>
								</HStack>
							</motion.div>
						</motion.div>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
