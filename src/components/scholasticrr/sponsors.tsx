/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import type { Sponsor } from "types";

const sponsors: Sponsor[] = [
	// {
	// 	image: "/scholasticrr/sponsors/mlh-logo-color.svg",
	// 	link: "https://mlh.io/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/inspiritai.png",
	// 	link: "https://www.inspiritai.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/slingshotlogo.png",
	// 	link: "https://slingshotahead.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/replitdark.svg",
	// 	link: "https://replit.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/echoar.png",
	// 	link: "https://www.echoar.xyz/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/AoPSLogo.png",
	// 	link: "https://artofproblemsolving.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/digitalocean.png",
	// 	link: "https://www.digitalocean.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/1password.png",
	// 	link: "https://1password.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/taskade.png",
	// 	link: "https://www.taskade.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/wolframsponsor.png",
	// 	link: "https://www.wolfram.com/language/",
	// },
	// {
	// 	image: "https://www.stickergiant.com/data/StickerGiant-Logo-Print-Ready-PNG__5d28c91416376.png",
	// 	link: "https://www.stickergiant.com/event-coupons",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/gather.png",
	// 	link: "https://gather.town/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/magoosh.png",
	// 	link: "https://magoosh.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/interviewcake.png",
	// 	link: "https://www.interviewcake.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/hyperx.png",
	// 	link: "https://www.hyperxgaming.com/unitedstates/us",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/producthunt.png",
	// 	link: "https://www.producthunt.com/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/echo3D.png",
	// 	link: "https://www.echo3d.co/",
	// },
	// {
	// 	image: "/scholasticrr/sponsors/geeksforgeeks.png",
	// 	link: "https://www.geeksforgeeks.org/",
	// },
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
					<Text margin={5}>TBD</Text>
				</ContainerInside>
			</Container>
		</>
	);
}
