import { Heading, Wrap, Box, useDisclosure } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import SimplihacksCard from "./simplihackscard";

type Team = {
	name: string;
	title: string;
	img: string;
	bio: string;
};

const guestSpeakers: Team[] = [
	{
		name: "Armell Talla",
		title: "Finding your Passion in Tech Workshop",
		img: "/simplihacks/guestspeakers/ArmellTalla.png",
		bio: "Armel Talla is a rising junior at the University of Texas at Austin, pursuing a B.S. in Computer Science and Mathematics. He interned at Google during his freshman summer and returned to intern at YouTube this summer. Outside of school, Armel is the co-host of the Adapt Or Die Podcast, President of Texas Blockchain, and the co-founder of Clips AI, an early-stage startup.",
	},
	{
		name: "Harpreet Dhillion",
		title: "Intro to Cloud Engineering",
		img: "/simplihacks/guestspeakers/HarpreetDhillion.png",
		bio: "I’ve worked as a Site Reliability Engineer for the past 4 years after graduating college. My responsibilities as an engineer include: building and maintaining cloud infrastructure, developing solutions to improve the reliability of systems, and troubleshooting issues at all layers of a system. SREs are expected to be skilled software engineers and quick-thinking problem solvers. I originally taught myself how to code at 16 and have been doing it ever since",
	},
	{
		name: "Ethan Labelson",
		title: "Intro to Deep Learning with Tensorflow",
		img: "/simplihacks/guestspeakers/EthanLabelson.png",
		bio: "I have worked on projects involving tensorflow for 2 years now. In particular, my works focuses on the usage of CNNs. My first project implemented CNNs for detection of DDoS attacks. Most recently, I have worked the past year in the Koo Lab at Cold Spring Harbor Laboratory. At the lab, I worked to advance deep learning algorithms used for the prediction of regulatory genomic function. I also have a workshop paper accepted to the NeurIPS AI for Science Workshop (https://openreview.net/forum?id=LGgo0wPM2MF). Furthermore, I have presented work at other quantitative and computational genomics workshops.",
	},
];

export default function Speakers(): JSX.Element {
	const { onOpen } = useDisclosure();

	return (
		<>
			<Container pb="60px" mt="50px" bg="brand.transparent">
				<ContainerInside>
					<Heading m={5}>Special Guest Speakers</Heading>
					<Wrap
						justify="center"
						spacing={4}
						mx={{ base: 0, lg: 100, xl: 200 }}
					>
						{guestSpeakers.map((member) => {
							return (
								<Box onClick={onOpen}>
									<SimplihacksCard
										title={member.title}
										name={member.name}
										img={member.img}
										key={member.name}
									/>
								</Box>
							);
						})}
					</Wrap>
				</ContainerInside>
			</Container>
			{/* {bio?.length && (
				<BioModal
					{...{
						isOpen,
						onClose,
						name,
						img,
						headingSize,
						title,
						bio,
					}}
				/>
			)} */}
		</>
	);
}

// type BioModalProps = {
// 	isOpen: boolean;
// 	onClose: () => void;
// 	name: string;
// 	img: string;
// 	headingSize: string;
// 	title: string;
// 	bio: any[];
// };

// function BioModal({
// 	isOpen,
// 	onClose,
// 	name,
// 	img,
// 	headingSize,
// 	title,
// 	bio,
// }: BioModalProps): JSX.Element {
// 	return (
// 		<Modal
// 			isOpen={isOpen}
// 			onClose={onClose}
// 			motionPreset="slideInBottom"
// 			size="3xl"
// 			scrollBehavior="inside"
// 			isCentered
// 		>
// 			<ModalOverlay />
// 			<ModalContent bg="brand.darkerBlue">
// 				<ModalHeader />
// 				<ModalCloseButton />

// 				<ModalBody py={0}>
// 					<VStack spacing={5} px={{ base: 0, sm: 8 }} align="stretch">
// 						<HStack
// 							flex={1}
// 							spacing={8}
// 							align="center"
// 							position="sticky"
// 							top={0}
// 							bg="brand.darkerBlue"
// 							pt={2}
// 							pb={6}
// 						>
// 							<Box
// 								rounded={30}
// 								style={{ aspectRatio: "1" }}
// 								position="relative"
// 								flex={1}
// 								overflow="hidden"
// 								display="grid"
// 								placeContent="stretch"
// 							>
// 								<Image
// 									width="100%"
// 									height="100%"
// 									placeholder="blur"
// 									alt={"Picture of " + name}
// 									objectFit="cover"
// 									style={{ aspectRatio: "1" }}
// 									src={img}
// 								/>
// 							</Box>
// 							<VStack flex={3} align="stretch" textAlign="left">
// 								<Heading size={headingSize}>
// 									About {name}
// 								</Heading>
// 								<Text as="i">{title}</Text>
// 							</VStack>
// 						</HStack>
// 						<Box flex={2} textAlign="left" overflowY="auto" mb={2}>
// 							{bio.map((s) => {
// 								s.bio;
// 							})}
// 						</Box>
// 					</VStack>
// 				</ModalBody>
// 				<ModalFooter>
// 					{/* <Button>Other action</Button> */}
// 					<Button onClick={onClose}>Close</Button>
// 				</ModalFooter>
// 			</ModalContent>
// 		</Modal>
// 	);
// }
