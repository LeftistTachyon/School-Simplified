/* eslint-disable import/no-default-export */
import { Box, Heading, Image, Text, VStack, WrapItem } from "@chakra-ui/react";

type SimplihacksCard = {
	name: string;
	title: string;
	img: string;
};

export default function SimplihacksCard({
	title,
	name,
	img,
}: SimplihacksCard): JSX.Element {
	return (
		<WrapItem>
			<VStack maxW={150} spacing={6}>
				<Box
					p={3}
					backgroundColor="brand.transparent"
					rounded={32}
					shadow="lg"
				>
					<Image
						rounded={20}
						alt={`Image of ${name}, the ${title}`}
						src={img}
						style={{ aspectRatio: "1" }}
						objectFit="cover"
						objectPosition="center"
					/>
				</Box>
				<VStack>
					<Heading fontSize={18}>{name}</Heading>
					<Text m={0}>{title}</Text>
				</VStack>
			</VStack>
		</WrapItem>
	);
}
