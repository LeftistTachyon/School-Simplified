import { Flex, Heading, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import ProjectCard from "@components/simplihacks/projectcard";
import { ProjectWinner } from "types";

const winners: ProjectWinner[] = [
	{
		names: "TJ Bai",
		title: "Pool",
		prize: "1st Place Overall Winner",
		link: "https://devpost.com/software/pool-8k9dvi",
		img: "/simplihacks/winners/pool.png",
	},
	{
		names: "Jeremy Moon",
		title: "EcoTheater",
		prize: "2nd Place Overall Winner",
		link: "https://devpost.com/software/ecotheater",
		img: "/simplihacks/winners/EcoTheater.png",
	},
	{
		names: "Eric Li, Gautham Venkateshwaran ",
		title: "The Trees",
		prize: "3rd Place Overall Winner",
		link: "https://devpost.com/software/the-trees",
		img: "/simplihacks/winners/trees.png",
	},
	{
		names: "Aditya Kharote, Varun Koranne, Shreyash Dhamane, Noman Khan",
		title: "WeChange",
		prize: "1st College Overall Winner",
		link: "https://devpost.com/software/wechange-l8vo1s",
		img: "/simplihacks/winners/wechange.png",
	},
	{
		names: "Baron Liu, Jeremy Su, Emily Su, Avery Zeng",
		title: "Nourpact",
		prize: "2nd College Overall Winner",
		link: "https://devpost.com/software/nourpact",
		img: "/simplihacks/winners/nourpact.png",
	},
	{
		names: "Grace Gong, Azfar Mohamed, Aditya Bilawar, Duy Nguyen",
		title: "Climate Connect",
		prize: "3rd College Overall Winner",
		link: "https://devpost.com/software/climate-connect-qwxgtl",
		img: "/simplihacks/winners/climateconnect.png",
	},
	{
		names: "Christopher Cao, Raymond Huang, Shourya Chhabra, Shreyas Nair",
		title: "WikiEnv",
		prize: "Best Social Cause",
		link: "https://devpost.com/software/wikienv",
		img: "/simplihacks/winners/WikiEnv.png",
	},
	{
		names: "Laeek Ahmed, Shruti satheesh, Prashanthini Sundar, Partiv Aravind",
		title: "Envirometics",
		prize: "Best UI/UX",
		link: "https://devpost.com/software/envirometics",
		img: "/simplihacks/winners/Envirometics.png",
	},
	{
		names: "Aaron Tang",
		title: "Atmos",
		prize: "Best Solo Project",
		link: "https://devpost.com/software/atmos-hwzi09",
		img: "/simplihacks/winners/Atmos.png",
	},
];

export default function Winners(): JSX.Element {
	return (
		<Container
			bg="linear-gradient(180deg, #7683E7 0%, #A8B2FF 100%);"
			py="50px"
		>
			<ContainerInside>
				<VStack align="start">
					<Heading fontSize="35px" my={7}>
						Winners from June 2022
					</Heading>
					<Flex w="100%" justify="center" flexWrap="wrap">
						{winners.map((project, i: number) => {
							return (
								<ProjectCard
									names={project.names}
									title={project.title}
									prize={project.prize}
									link={project.link}
									img={project.img}
									key={i}
								/>
							);
						})}
					</Flex>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
