import { getJobPostings } from "@api/notion";
import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Select,
	SimpleGrid,
	Stack,
	StackDivider,
	StackProps,
	Text,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import TimmyButton from "@components/button";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { JobPosting } from "types";

const defaultOption: string = "Any/All";

const transition = {
	x: { type: "spring", stiffness: 300, damping: 30 },
	opacity: { duration: 0.2 },
};

/**
 * The Volunteering page!
 *
 * ~~Mention that people can give people community service hours (!)
 * Needs information about the different positions (e.g. tutoring, technical, marketing, HR, etc.) (images from Mossa, alsdkfjadlskfj, aisdfhalj) [in one box, same layout for each]
 * Needs a clear button that lets users sign up, which takes them to the Discord to reinforce call to action
 * Needs a couple Undraw images~~
 * @returns the Volunteering page
 */
export default function Volunteering({ postings }: { postings: JobPosting[] }) {
	const rankOptions: string[] = [],
		areaOptions: string[] = [],
		programOptions: string[] = [];

	for (const posting of postings) {
		if (posting.rank && !rankOptions.includes(posting.rank))
			rankOptions.push(posting.rank);
		if (posting.area && !areaOptions.includes(posting.area))
			areaOptions.push(posting.area);
		if (posting.programs) {
			for (const program of posting.programs) {
				if (!programOptions.includes(program))
					programOptions.push(program);
			}
		}
		// if (posting.programs && !programOptions.includes(posting.programs))
		// 	programOptions.push(posting.programs);
	}
	// rankOptions.sort();
	// areaOptions.sort();
	// programOptions.sort();

	const [postingsToDisplay, setPostingsToDisplay] = useState(postings);

	// const [filter, setFilter] = useState({
	// 	rank: null,
	// 	area: null,
	// 	program: null,
	// });

	const [rank, setRank] = useState("");
	const [area, setArea] = useState("");
	const [program, setProgram] = useState("");

	const [enabledOptions, setEnabledOptions] = useState({
		rank: rankOptions,
		area: areaOptions,
		program: programOptions,
	});

	const [selectedPosition, setSelectedPosition] = useState<JobPosting>(null);

	useEffect(() => {
		setPostingsToDisplay(
			postings.filter(
				(posting) =>
					(!rank || posting.rank == rank) &&
					(!area || posting.area == area) &&
					(!program || posting.programs.includes(program))
			)
		);

		const tempOptions = {
			rank: rankOptions,
			area: areaOptions,
			program: programOptions,
		};
		// finding valid ranks
		if (area || program) {
			tempOptions.rank = [];
			postings
				.filter(
					(posting) =>
						(!area || area == posting.area) &&
						(!program || posting.programs.includes(program))
				)
				.forEach((posting) => {
					if (!tempOptions.rank.includes(posting.rank)) {
						tempOptions.rank.push(posting.rank);
					}
				});
		}
		// finding valid areas
		if (program || rank) {
			tempOptions.area = [];
			postings
				.filter(
					(posting) =>
						(!program || posting.programs.includes(program)) &&
						(!rank || rank == posting.rank)
				)
				.forEach((posting) => {
					if (!tempOptions.area.includes(posting.area)) {
						tempOptions.area.push(posting.area);
					}
				});
		}
		// finding valid programs
		if (area || rank) {
			tempOptions.program = [];
			postings
				.filter(
					(posting) =>
						(!area || area == posting.area) &&
						(!rank || rank == posting.rank)
				)
				.flatMap((posting) => posting.programs)
				.forEach((program) => {
					if (!tempOptions.program.includes(program)) {
						tempOptions.program.push(program);
					}
				});
		}

		setEnabledOptions(tempOptions);
	}, [rank, area, program]);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const isAnimated = useBreakpointValue({ base: true, md: false });
	// console.log("isAnimated:", isAnimated);

	return (
		<>
			<ContainerBackground
				src="/timmy/raining_timmy.png"
				bg="#5866D3CC"
				// py={{ base: 5, md: 10 }}
				pt={{ base: 12, md: 24 }}
				pb={{ base: 5, md: 10 }}
				px={{ base: 5, md: 10 }}
			>
				<ContainerInside>
					<Center>
						<Stack
							textAlign="left"
							direction={{ base: "column-reverse", md: "row" }}
							spacing={{ base: 5, md: 10 }}
							justifyContent={{ base: "left", md: "center" }}
							align="center"
						>
							<VStack flex={5} align="flex-start">
								<Heading size="xl">Join Our Team</Heading>
								<Text fontSize="lg">
									We are one of the largest student-run
									nonprofits in the world, and our
									independence from other organizations and
									institutions will provide you with
									unprecedented freedom to create, learn, and
									contribute. Whether your interests lie in
									business, community, or academics, join us
									today and empower our generation to
									revolutionize our future!
								</Text>
							</VStack>
							<Image
								src="/timmy/marketingdept.png"
								alt="Timmy with a milk tea and a phone"
							/>
						</Stack>
					</Center>
				</ContainerInside>
			</ContainerBackground>
			<Container
				pt={20}
				bg="linear-gradient(180deg, #7683E7 0%, #A8B2FF 100%)"
			>
				<ContainerInside>
					<VStack
						spacing={10}
						align="stretch"
						divider={<StackDivider borderColor="white" />}
					>
						<VStack spacing={5} bg="#A8B2FF88" rounded={25} p={6}>
							<Stack
								direction={{ base: "column", md: "row" }}
								spacing={5}
							>
								<VStack flex={1}>
									<Heading size="sm">Rank</Heading>
									<Select
										placeholder={defaultOption}
										bg="brand.darkerBlue"
										border="none"
										value={rank}
										onChange={(e) =>
											setRank(e.target.value)
										}
									>
										{rankOptions.map((option) => (
											<option
												key={option}
												value={option}
												disabled={
													!enabledOptions.rank.includes(
														option
													)
												}
											>
												{option}
											</option>
										))}
									</Select>
								</VStack>
								<VStack flex={1}>
									<Heading size="sm">Area of Work</Heading>
									<Select
										placeholder={defaultOption}
										bg="brand.darkerBlue"
										border="none"
										value={area}
										onChange={(e) =>
											setArea(e.target.value)
										}
									>
										{areaOptions.map((option) => (
											<option
												key={option}
												value={option}
												disabled={
													!enabledOptions.area.includes(
														option
													)
												}
											>
												{option}
											</option>
										))}
									</Select>
								</VStack>
								<VStack flex={1}>
									<Heading size="sm">Program</Heading>
									<Select
										placeholder={defaultOption}
										bg="brand.darkerBlue"
										border="none"
										value={program}
										onChange={(e) =>
											setProgram(e.target.value)
										}
									>
										{programOptions.map((option) => (
											<option
												key={option}
												value={option}
												disabled={
													!enabledOptions.program.includes(
														option
													)
												}
											>
												{option}
											</option>
										))}
									</Select>
								</VStack>
							</Stack>
							<Center>
								<Button
									bg="brand.darkerBlue"
									disabled={!rank && !area && !program}
									onClick={() => {
										setRank("");
										setArea("");
										setProgram("");
									}}
									size="sm"
								>
									Reset Filters
								</Button>
							</Center>
						</VStack>

						<SimpleGrid
							columns={{ base: 1, md: 2 }}
							spacing={8}
							h="90vh"
							maxW="100%"
							overflowX={{ base: "hidden", md: null }}
							position="relative"
						>
							<AnimatePresence initial={false}>
								{!isOpen || !isAnimated ? (
									<motion.div
										key="left"
										style={{
											overflowY: "scroll",
											paddingRight: "0.5rem",
										}}
										variants={{
											enter: { x: -1000, opacity: 0 },
											center: {
												zIndex: 1,
												x: 0,
												opacity: 1,
											},
											exit: {
												zIndex: 0,
												x: -1000,
												opacity: 0,
												position: "absolute",
											},
										}}
										initial="enter"
										animate="center"
										exit="exit"
										transition={transition}
									>
										<VStack spacing={5} align="stretch">
											{postingsToDisplay.map(
												(posting: JobPosting) => (
													<VolunteerPosition
														key={
															posting.name +
															posting.area +
															posting.programs
														}
														posting={posting}
														onSelected={(
															posting
														) => {
															setSelectedPosition(
																posting
															);
															onOpen();
														}}
														h="100%"
													/>
												)
											)}
										</VStack>
									</motion.div>
								) : null}
								{selectedPosition && (isOpen || !isAnimated) ? (
									<motion.div
										key="right"
										variants={{
											enter: { x: 1000, opacity: 0 },
											center: {
												zIndex: 1,
												x: 0,
												opacity: 1,
											},
											exit: {
												zIndex: 0,
												x: 1000,
												opacity: 0,
												position: "absolute",
											},
										}}
										initial="enter"
										animate="center"
										exit="exit"
										transition={transition}
									>
										<VStack spacing={8} align="stretch">
											{isAnimated ? (
												<TimmyButton onClick={onClose}>
													Back
												</TimmyButton>
											) : null}
											<Stack
												direction={{
													base: "column",
													lg: "row",
												}}
												bg="brand.darkerBlue"
												rounded={25}
												px={10}
												py={6}
											>
												<VStack
													align="stretch"
													textAlign="left"
													flex={1}
												>
													<Text fontSize="sm">
														{selectedPosition.area}
													</Text>
													<Heading fontSize="lg">
														{selectedPosition.name}
													</Heading>
													<Text fontSize="sm">
														{selectedPosition.programs.join(
															", "
														)}
													</Text>
												</VStack>
												<NextChakraLink
													href={
														selectedPosition.form ??
														""
													}
												>
													<TimmyButton
														timmysrc="/timmy/10.png"
														flex={1}
													>
														Apply Now
													</TimmyButton>
												</NextChakraLink>
											</Stack>
											<Box
												bg="brand.darkerBlue"
												rounded={25}
												px={10}
												py={6}
												textAlign="left"
											>
												{selectedPosition.description}
											</Box>
										</VStack>
									</motion.div>
								) : null}
							</AnimatePresence>
						</SimpleGrid>
					</VStack>
				</ContainerInside>
			</Container>
			<Box
				h={100}
				bg="linear-gradient(180deg, #A8B2FF 20%, transparent 100%)"
			/>
		</>
	);
}

export async function getStaticProps() {
	const props = {
		postings: (await getJobPostings()).sort((a, b) =>
			a.name.localeCompare(b.name, "en")
		),
	};
	return {
		props,
		revalidate: 360,
	};
}

type VolunteerPositionProps = {
	posting: JobPosting;
	onSelected?: (posting: JobPosting) => void;
} & StackProps;

/**
 * Creates a JSX element with the given information to show a volunteer position
 *
 * @param {VolunteerPositionProps} props the props to pass this component
 * @param {JobPosting} props.posting the posting information to use
 * @param {(posting: JobPosting) => void} props.onSelected the callback to invoke
 * when this job posting is clicked
 * @returns a JSX element that displays the given volunteer position
 */
function VolunteerPosition({
	posting,
	onSelected,
	...stackProps
}: VolunteerPositionProps): JSX.Element {
	const { programs, area, name } = posting;
	return (
		<Stack
			spacing={0}
			textAlign="left"
			transition="all 0.15s ease-in"
			borderRadius="lg"
			overflow="hidden"
			bg="#5A60ADCC"
			onClick={() => onSelected?.(posting)}
			_hover={{ transform: "scale(0.97)", cursor: "pointer" }}
			{...stackProps}
		>
			{/* <Box h={160} p={4} overflowY="hidden" position="relative">
				<Box
					position="absolute"
					left={0}
					top={0}
					width="100%"
					height="100%"
					bg={image?.url ? `url(${image?.url})` : "#5A60ADCC"}
					bgSize="cover"
					bgPos="center"
				/>
			</Box> */}
			<Stack
				bg="brand.darkerBlue"
				spacing={0}
				px={4}
				py={2}
				justify="center"
				flex={1}
			>
				<Text fontSize="sm">{area}</Text>
				<Heading fontSize="lg">{name}</Heading>
				<Text fontSize="sm">{programs.join(", ")}</Text>
			</Stack>
		</Stack>
	);
}

// function FlipBox({ src, description }) {
// 	return (
// 		<Box w="100%" h="200px" style={{ perspective: "1000px" }}>
// 			<Box
// 				pos="relative"
// 				w="100%"
// 				h="100%"
// 				textAlign="center"
// 				transition="linear transform 0.8s"
// 				style={{ transformStyle: "preserve-3d" }}
// 				_hover={{ transform: "rotateY(180deg)" }}
// 			>
// 				<Box
// 					pos="absolute"
// 					w="100%"
// 					h="100%"
// 					style={{ backfaceVisibility: "hidden" }}
// 					bgImage={src}
// 					bgSize="cover"
// 					bgRepeat="no-repeat"
// 					bgPos="center"
// 				>
// 					{/* <Image src={src} alt="logo" w="400px" h="200px" /> */}
// 				</Box>
// 				<Box
// 					pos="absolute"
// 					w="100%"
// 					h="100%"
// 					style={{ backfaceVisibility: "hidden" }}
// 					transform="rotateY(180deg)"
// 					bg="brand.blue"
// 				>
// 					<Text>{description}</Text>
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// }
