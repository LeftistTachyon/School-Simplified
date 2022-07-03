/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Heading,
	HStack,
	Icon,
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
import Image from "next/image";
import React from "react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { Executive, FileObj } from "types";
import { parseText } from "util/parse_notion";
import Button from "./button";
import NextChakraLink from "./nextChakra";
// import { RiBoxingLine } from "react-icons/ri";

const blurDataURL =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE5SURBVChTFZDLTsJQFEVXbwVKi4I6McHowPj/M2f8hIkaxQQftNTSUnr77u3Dy3Cf7LPO3sdYrZ6GkdEzGCb5MUIeQtI8Y764wnEcEGNUVXDWKUXXt1SqZbNes1u/IbQ2ZwtuHx5ZLu8wTQNRVyXHJGEfRviuy1z03F9eYA8tnrfD8//IihLh2FMsa0Lf94iu51prZ3TGfDrBGY8wDLAdG5HmOappMPXktGBPJtxo4sw+p2sUJ2fTdIgsKzS6oiwKfT5GFg256vDjlMNRsvMDtu4OIQTUdU0QhrxvfvkIJLIWfLoh3l9EfEyA4UTM2Ho+r88vFJWOYM34inOCJCWtFb8/Hq4fIrZbn6/NN8E+om6hESMOrWAYW+SlNroBSVLoMlJSamquX6DagSAtKTuQOnsiM2pdKIol/52AyDKHj3ObAAAAAElFTkSuQmCC";

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
		personalWebsite,
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
	if (personalWebsite?.length) {
		contactMeChildren.push(
			<ContactMeIcon
				href={personalWebsite}
				icon={VscGlobe}
				key="personalWebsite"
			/>
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
						style={{ aspectRatio: "1", borderRadius: 30 }}
						src={image?.url ?? "/staff/default.png"}
						layout="intrinsic"
						width="100%"
						height="100%"
						placeholder="blur"
						blurDataURL={blurDataURL}
					/>
				</Center>
			) : (
				<Center p={17} backgroundColor="brand.transparent" rounded={50}>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						style={{ aspectRatio: "1", borderRadius: 30 }}
						src={image?.url ?? "/staff/default.png"}
						layout="intrinsic"
						width="100%"
						height="100%"
						placeholder="blur"
						blurDataURL={blurDataURL}
					/>
				</Center>
			)}
			<Box>
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>

			{contactMeElement}
			{biography?.length && (
				<BiographyModal
					{...{
						isOpen,
						onClose,
						name,
						image,
						headingSize,
						title,
						contactMeElement,
						biography,
					}}
				/>
			)}
		</VStack>
	);
}

type BiographyModalProps = {
	isOpen: boolean;
	onClose: () => void;
	name: string;
	image: FileObj;
	headingSize: string;
	title: string;
	contactMeElement: JSX.Element;
	biography: any[];
};

function BiographyModal({
	isOpen,
	onClose,
	name,
	image,
	headingSize,
	title,
	contactMeElement,
	biography,
}: BiographyModalProps): JSX.Element {
	return (
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
					<VStack spacing={5} px={{ base: 0, sm: 8 }} align="stretch">
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
								position="relative"
								flex={1}
								overflow="hidden"
								display="grid"
								placeContent="stretch"
							>
								<Image
									layout="intrinsic"
									width="100%"
									height="100%"
									placeholder="blur"
									blurDataURL={blurDataURL}
									alt={"Picture of " + name}
									objectFit="cover"
									style={{ aspectRatio: "1" }}
									src={image?.url ?? "/staff/default.png"}
								/>
							</Box>
							<VStack flex={3} align="stretch" textAlign="left">
								<Heading size={headingSize}>
									About {name}
								</Heading>
								<Text as="i">{title}</Text>
								{contactMeElement}
							</VStack>
						</HStack>
						<Box flex={2} textAlign="left" overflowY="auto" mb={2}>
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
