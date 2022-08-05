import {
	AcademicServices,
	Chapters,
	GettingStarted,
	Intro,
	ProgrammingSimplified,
	Projects,
	Testimonial
} from "@components/home";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
	// const [isModalOpen, setModalOpen] = useState(true);
	return (
		<>
			<Head>
				<title>School Simplified | Home Page</title>
			</Head>
			{/* <PopUp /> */}
			<motion.div
				initial="initial"
				whileInView="onView"
				variants={fadeIn()}
			>
				<Intro />
			</motion.div>
			<GettingStarted />
			<AcademicServices />
			<Projects />
			<Chapters />
			<ProgrammingSimplified />
			<Testimonial />

			{/* <Modal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Notice</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						Our Discord servers were recently hacked, and the School
						Simplified server should be back up within 48 hours. We
						are sorry for the inconvenience.
					</ModalBody>

					<ModalFooter>
						<Button onClick={() => setModalOpen(false)}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal> */}
		</>
	);
}
