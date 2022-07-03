/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { Sponsor } from "types";

const sponsors: Sponsor[] = [
	{
		image: "/simplihacks/sponsors/mlh-logo-color.svg",
		link: "https://mlh.io/",
	},
	// {
	// 	image: "/simplihacks/sponsors/inspiritai.png",
	// 	link: "https://www.inspiritai.com/",
	// },
	{
		image: "/simplihacks/sponsors/slingshotlogo.png",
		link: "https://slingshotahead.com/",
	},
	{
		image: "/simplihacks/sponsors/replitdark.svg",
		link: "https://replit.com/",
	},
	// {
	// 	image: "/simplihacks/sponsors/echoar.png",
	// 	link: "https://www.echoar.xyz/",
	// },
	{
		image: "/simplihacks/sponsors/AoPSLogo.png",
		link: "https://artofproblemsolving.com/",
	},
	// {
	// 	image: "/simplihacks/sponsors/digitalocean.png",
	// 	link: "https://www.digitalocean.com/",
	// },
	{
		image: "/simplihacks/sponsors/1password.png",
		link: "https://1password.com/",
	},
	{
		image: "/simplihacks/sponsors/taskade.png",
		link: "https://www.taskade.com/",
	},
	{
		image: "/simplihacks/sponsors/wolframsponsor.png",
		link: "https://www.wolfram.com/language/",
	},
	{
		image: "https://www.stickergiant.com/data/StickerGiant-Logo-Print-Ready-PNG__5d28c91416376.png",
		link: "https://www.stickergiant.com/event-coupons",
	},
	// {
	// 	image: "/simplihacks/sponsors/gather.png",
	// 	link: "https://gather.town/",
	// },
	// {
	// 	image: "/simplihacks/sponsors/magoosh.png",
	// 	link: "https://magoosh.com/",
	// },
	// {
	// 	image: "/simplihacks/sponsors/interviewcake.png",
	// 	link: "https://www.interviewcake.com/",
	// },
	{
		image: "/simplihacks/sponsors/hyperx.png",
		link: "https://www.hyperxgaming.com/unitedstates/us",
	},
	// {
	// 	image: "/simplihacks/sponsors/producthunt.png",
	// 	link: "https://www.producthunt.com/",
	// },
	{
		image: "/simplihacks/sponsors/echo3D.png",
		link: "https://www.echo3d.co/",
	},
	{
		image: "/simplihacks/sponsors/geeksforgeeks.png",
		link: "https://www.geeksforgeeks.org/",
	},
];

export default function Sponsors(): JSX.Element {
	return (
		<>
			<Container py={19} bg="brand.transparent">
				<ContainerInside>
					<Heading as="h1" m={5}>
						Event Sponsors
					</Heading>
					<Wrap justify="center" spacing={8}>
						{sponsors.map((sponsor) => (
							<WrapItem key={sponsor.image}>
								<NextLink href={sponsor.link}>
									<Image
										display="block"
										width="300px"
										src={sponsor.image}
									/>
								</NextLink>
							</WrapItem>
						))}
					</Wrap>
				</ContainerInside>
			</Container>
		</>
	);
}
