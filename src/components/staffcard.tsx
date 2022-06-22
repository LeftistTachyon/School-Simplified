/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Heading,
	HStack,
	Icon,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	StackProps,
	Text,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import {
	FaLinkedinIn,
	FaInstagram,
	FaTwitter,
	FaFacebookSquare,
} from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { Executive } from "types";
import { parseText } from "util/parse_notion";
import Button from "./button";
import NextChakraLink from "./nextChakra";
// import { RiBoxingLine } from "react-icons/ri";

type StaffCardProps = {
	staff: Executive;
} & StackProps;

export default function StaffCard({
	staff: {
		name,
		image,
		title,
		email,
		linkedin,
		biography,
		twitter,
		facebook,
		instagram,
	},
	...props
}: StaffCardProps): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const contactMeChildren = [];
	if (email?.length) {
		contactMeChildren.push(
			<ContactMeIcon
				href={"mailto:" + email}
				icon={RiMailFill}
				key="mail"
			/>
		);
	}
	if (linkedin?.length) {
		contactMeChildren.push(
			<ContactMeIcon href={linkedin} icon={FaLinkedinIn} key="linkedin" />
		);
	}
	if (instagram?.length) {
		contactMeChildren.push(
			<ContactMeIcon
				href={instagram}
				icon={FaInstagram}
				key="instagram"
			/>
		);
	}
	if (twitter?.length) {
		contactMeChildren.push(
			<ContactMeIcon href={twitter} icon={FaTwitter} key="twitter" />
		);
	}
	if (facebook?.length) {
		contactMeChildren.push(
			<ContactMeIcon
				href={facebook}
				icon={FaFacebookSquare}
				key="facebook"
			/>
		);
	}

	const contactMeElement = contactMeChildren.length ? (
		<HStack justify="flex-start">{contactMeChildren}</HStack>
	) : null;

	const headingSize = useBreakpointValue({ base: "md", md: "lg" });

	return (
		<VStack
			p={4}
			m={1}
			spacing={2}
			maxW={{ base: 200, lg: 300 }}
			{...props}
		>
			{biography?.length ? (
				<Center
					p={17}
					backgroundColor="brand.transparent"
					rounded={50}
					transition="0.25s ease transform"
					_hover={{
						transform: "scale(0.95)",
						cursor: "pointer",
					}}
					onClick={onOpen}
				>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						style={{ aspectRatio: "1" }}
						src={image?.url ?? "/staff/default.png"}
						rounded={30}
					/>
				</Center>
			) : (
				<Center p={17} backgroundColor="brand.transparent" rounded={50}>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						rounded={30}
						style={{ aspectRatio: "1" }}
						src={image?.url ?? "/staff/default.png"}
						onClick={onOpen}
					/>
				</Center>
			)}
			<Box>
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>

			{contactMeElement}
			{biography?.length ? (
				<Modal
					isOpen={isOpen}
					onClose={onClose}
					motionPreset="slideInBottom"
					size="3xl"
					scrollBehavior="inside"
					isCentered
				>
					<ModalOverlay />
					<ModalContent bg="brand.darkerBlue">
						<ModalHeader />
						<ModalCloseButton />

						<ModalBody py={0}>
							<VStack
								spacing={5}
								px={{ base: 0, sm: 8 }}
								align="stretch"
							>
								<HStack
									flex={1}
									spacing={8}
									align="center"
									position="sticky"
									top={0}
									bg="brand.darkerBlue"
									pt={2}
									pb={6}
								>
									<Box
										rounded={30}
										style={{ aspectRatio: "1" }}
										flex={1}
										overflow="hidden"
									>
										<Image
											alt={"Picture of " + name}
											objectFit="cover"
											style={{ aspectRatio: "1" }}
											src={
												image?.url ??
												"/staff/default.png"
											}
										/>
									</Box>
									<VStack
										flex={3}
										align="stretch"
										textAlign="left"
									>
										<Heading size={headingSize}>
											About {name}
										</Heading>
										<Text as="i">{title}</Text>
										{contactMeElement}
									</VStack>
								</HStack>
								<Box
									flex={2}
									textAlign="left"
									overflowY="auto"
									mb={2}
								>
									{biography.map((s) =>
										React.cloneElement(parseText(s), {
											key:
												s.plain_text +
												JSON.stringify(s.annotations),
										})
									)}
								</Box>
							</VStack>
						</ModalBody>
						<ModalFooter>
							{/* <Button>Other action</Button> */}
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : null}
		</VStack>
	);
}

function ContactMeIcon({ icon, href, ...other }) {
	return (
		<NextChakraLink href={href} {...other}>
			<Center>
				<Icon
					as={icon}
					color="white"
					boxSize={6}
					_hover={{ color: "brand.gold" }}
					transition="color ease 0.2s"
				/>
			</Center>
		</NextChakraLink>
	);
}
