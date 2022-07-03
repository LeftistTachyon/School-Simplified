import { getGovernanceData, getLeadership } from "@api/notion";
import {
	Box,
	BoxProps,
	Center,
	Divider,
	Flex,
	Grid,
	Heading,
	HStack,
	SimpleGrid,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import StaffCard from "@components/staffcard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ExecutiveGroup, GovernanceDocument, GovernanceSection } from "types";
import { replaceNewlines } from "util/parse_notion";

type LeadershipPageProps = {
	governance: GovernanceSection[];
	executives: ExecutiveGroup[];
	boardOfDirectors: ExecutiveGroup;
};

export default function Leadership({
	governance,
	executives,
	boardOfDirectors,
}: LeadershipPageProps): JSX.Element {
	const [groupIdx, setGroupIdx] = useState(0);

	// console.log("executives:", executives);
	// console.log("board of directors:", boardOfDirectors);

	const indexArray = Array.from(executives, (_, i) => "idx" + i);

	return (
		<>
			<Container>
				<ContainerInside>
					<Heading size="2xl" my={7}>
						Leadership
					</Heading>

					<Divider bg="white" />
					<Center my={5}>
						<SimpleGrid
							rounded={{ base: 24, md: "full" }}
							background="#FFFC"
							boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
							zIndex={0}
							gridTemplateColumns={{
								base: "1fr",
								md: `repeat(${executives.length}, 1fr)`,
							}}
							gridTemplateRows={{
								base: `repeat(${executives.length}, 1fr)`,
								md: "1fr",
							}}
							gridTemplateAreas={{
								base: indexArray.map((s) => `'${s}'`).join(" "),
								md: `'${indexArray.join(" ")}'`,
							}}
							placeContent="stretch"
						>
							{executives.map((executiveGroup, idx) => (
								<ExecutiveButton
									onClick={() => setGroupIdx(idx)}
									key={executiveGroup.name}
									gridRow={{ base: idx + 1, md: 1 }}
									gridColumn={{ base: 1, md: idx + 1 }}
								>
									<AnimatePresence>
										<Heading
											color="inherit"
											size="md"
											as="h3"
										>
											{executiveGroup.name}
										</Heading>
									</AnimatePresence>
								</ExecutiveButton>
							))}
							<motion.div
								style={{
									gridArea: "idx" + groupIdx,
								}}
								transition={{ duration: 0.7 }}
								layout
							>
								<Box
									background="white"
									rounded={{ base: 24, md: "full" }}
									px={12}
									py={3.5}
									h="100%"
									w="100%"
									display="grid"
									placeContent="center"
								>
									<AnimatePresence exitBeforeEnter>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											key={executives[groupIdx].name}
											transition={{ duration: 0.3 }}
										>
											<Heading
												as="h3"
												size="md"
												color="brand.darkerBlue"
											>
												{executives[groupIdx].name}
											</Heading>
										</motion.div>
									</AnimatePresence>
								</Box>
							</motion.div>
						</SimpleGrid>
					</Center>
					<Heading fontSize={30} mb={5}>
						Executive Profiles
					</Heading>
					<Grid
						gap={1}
						templateColumns="repeat(auto-fit,minmax(200px,1fr))"
					>
						{executives[groupIdx].executives.map((staff) => {
							return (
								<StaffCard
									staff={staff}
									key={staff.image?.url || staff.name}
								/>
							);
						})}
					</Grid>

					<Divider bg="white" />

					<Box mt={5}>
						<Heading fontSize={30}>Board of Directors</Heading>
					</Box>
					<Table variant="simple" colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th>
									<Heading fontSize={17}>Name</Heading>
								</Th>
								<Th>
									<Heading fontSize={17}>Title</Heading>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{boardOfDirectors.executives.map((staff) => (
								<Tr key={staff.name} fontSize={20}>
									<Td fontWeight="bold">{staff.name}</Td>
									<Td lineHeight={1.4}>
										{replaceNewlines(staff.title)}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
					<Divider bg="white" />

					<VStack py={5}>
						<Heading fontSize={30}>Founders</Heading>
						<HStack
							py={2}
							spacing={{ base: 0, sm: 10 }}
							flexDir={{ base: "column", sm: "row" }}
						>
							<Text fontSize={20} fontWeight="bold">
								Ethan Wu
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Nathanael Ma
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Ethan Hsu
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Jason Mei
							</Text>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside pb={7}>
					<Divider bg="white" />
					<Flex
						textAlign={{ base: "center", sm: "left" }}
						justify="center"
						mt={5}
						flexDir={{ base: "column", sm: "row" }}
					>
						{governance.map((section: GovernanceSection) => {
							return (
								<Stack key={section.title} flex={1} my={3}>
									<Heading fontSize={20}>
										{section.title}
									</Heading>
									<Stack>
										{section.docs.map(
											(doc: GovernanceDocument) => {
												return (
													<NextLink
														key={doc.href}
														href={doc.href}
													>
														<Text>{doc.title}</Text>
													</NextLink>
												);
											}
										)}
									</Stack>
								</Stack>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}

const order = {
	"Corporate Officers": 0,
	"Vice Presidents": 1,
	Directors: 2,
};

export async function getServerSideProps() {
	const governance = await getGovernanceData();
	const executives = await getLeadership();

	// extract board of directors
	const boardIdx = executives.findIndex(
		(group) => group.name === "Board of Directors"
	);
	const [boardOfDirectors] = executives.splice(boardIdx, 1);

	executives.sort((a, b) => order[a.name] - order[b.name]);

	const props: LeadershipPageProps = {
		governance,
		executives,
		boardOfDirectors,
	};

	return { props };
}

function ExecutiveButton({ children, ...props }: BoxProps) {
	return (
		<Box
			as="button"
			px={12}
			py={3.5}
			transition="all 0.2s ease"
			fontSize="14px"
			fontWeight="semibold"
			background="transparent"
			color="#5A60ADCC"
			minW={205}
			{...props}
		>
			{children}
		</Box>
	);
}
