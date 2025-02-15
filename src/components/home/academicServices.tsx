import {
	Box,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { slideInLeft, slideInRight } from "@styles/animations";
import { motion } from "framer-motion";

type CardProps = {
	title: string;
	content: string;
	timmySrc: string;
	onLeft: boolean;
	href: string;
};

const cardProps: CardProps[] = [
	{
		title: "Notes",
		content:
			"Master your classes with our extensive notes. We release new notes every week, so even if we do not have what you need now, they may be added in the future! ",
		timmySrc: "/timmy/17_cowboy.png",
		onLeft: false,
		href: "/notes",
	},
	{
		title: "Essay Revision",
		content:
			"Hard classes? Scholarship Essays? A creative paper? Not a problem. Our essay revision services are open to everyone year-round!",
		timmySrc: "/timmy/29_cowboy.png",
		onLeft: false,
		href: "/essay",
	},
	{
		title: "Tutoring",
		content:
			"Sign up for private tutoring sessions, personalized and offered by top notch students for every subject you need!",
		timmySrc: "/timmy/16_cowboy.png",
		onLeft: true,
		href: "/tutoring",
	},
	{
		title: "School Help",
		content:
			"Homework can be challenging, but with our homework help service, you can get your questions answered 24/7 with help through private messaging!",
		timmySrc: "/timmy/24_cowboy.png",
		onLeft: true,
		href: "/discord",
	},
];

export default function AcademicServices(): JSX.Element {
	return (
		<Container
			id="acad"
			bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
			py={16}
		>
			<ContainerInside overflow="hidden" textAlign="left">
				<Flex flexDir="column" align="stretch">
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInLeft()}
					>
						<Heading size="lg">Academic Services</Heading>
						<Heading size="md" fontWeight="normal">
							Digital Program
						</Heading>
						<Text mt={6} textAlign="justify">
							We provide a broad selection of free resources
							including tutoring, essay revision, notes,
							standardized testing preparation, college
							preparation, and many more. Additionally, with an
							international community of over 60,000 students,
							anyone can find a home at School Simplified.
						</Text>
					</motion.div>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						mt={8}
						spacingX={26}
						spacingY={39}
					>
						{cardProps.map((cardProp) => (
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={
									cardProp.onLeft
										? slideInLeft()
										: slideInRight()
								}
								key={cardProp.title}
							>
								<Card {...cardProp} key={cardProp.title} />
							</motion.div>
						))}
					</SimpleGrid>
				</Flex>
			</ContainerInside>
		</Container>
	);
}

function Card(props: CardProps): JSX.Element {
	return (
		<NextChakraLink
			href={props.href}
			display="block"
			transition="transform 0.2s ease-in"
			_hover={{
				transform: "scale(0.95)",
			}}
			h="100%"
		>
			<VStack
				rounded={5}
				bg="#5A60ADCC"
				align="stretch"
				overflow="hidden"
				spacing={22}
				h="100%"
			>
				<Box px={8} py={4} bg="#5A60AD">
					<Heading size="md">{props.title}</Heading>
				</Box>
				<Stack
					direction={props.onLeft ? "row-reverse" : "row"}
					pl={props.onLeft ? 2 : 22}
					pr={props.onLeft ? 22 : 2}
					flex={1}
				>
					<Text pb={4}>{props.content}</Text>
					<Image
						src={props.timmySrc}
						alt={
							"Timmy that accompanies the " +
							props.title +
							" section of academic sources."
						}
						alignSelf="flex-end"
						maxW="45%"
					/>
				</Stack>
			</VStack>
		</NextChakraLink>
	);
}
