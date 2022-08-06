import { Box, Heading, Image, Text, VStack, WrapItem } from "@chakra-ui/react";

type ScholasticRRCard = {
	name: string;
	title: string;
	img: string;
};

export default function ScholasticRRCard({
	name,
	title,
	img,
}: ScholasticRRCard): JSX.Element {
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
						style={{
							aspectRatio: "1",
							width: "100%",
							height: "100%",
						}}
						objectFit="cover"
						objectPosition="center"
					/>
				</Box>
				<VStack>
					<Heading fontSize={18}>{name}</Heading>
					<Text m={0}> {title} </Text>
				</VStack>
			</VStack>
		</WrapItem>
	);
}
