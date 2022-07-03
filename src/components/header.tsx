import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

type MenuItem = {
	name: string;
	children?: MenuItem[];
	href?: string;
	isBold?: boolean;
};

const menuItems: MenuItem[] = [
	// {
	// 	name: "Home",
	// 	href: "/",
	// },
	{
		name: "About Us",
		children: [
			{
				name: "Community",
				href: "/community",
			},
			// {
			// 	name: "Events",
			// 	href: "/events",
			// },
			// {
			// 	name: "Our Organizations",
			// 	href: "/organizations",
			// },
			{
				name: "Partners",
				href: "/partners",
			},
			{
				name: "Leadership",
				href: "/leadership",
			},
			{
				name: "FAQ",
				href: "/faq",
			},
			// {
			// 	name: "Social Media",
			// 	href: "/links",
			// },
			{
				name: "Legal",
				href: "/legal",
			},
		],
	},
	// {
	// 	name: "Blog",
	// 	href: "/blog",
	// },
	{
		name: "Resources",
		children: [
			{
				name: "Notes",
				href: "/notes",
			},
			{
				name: "Tutoring",
				href: "/tutoring",
			},
			{
				name: "Essay Revision",
				href: "/essay",
			},
			// {
			// 	name: "SAT Prep",
			// 	href: "/sat",
			// },
			{
				name: "Homework Help",
				href: "/discord",
			},
			{
				name: "Blog",
				href: "/blog",
			},
			{
				name: "Research",
				href: "/research",
			},
		],
	},
	{
		name: "Programs",
		children: [
			{
				name: "Projects",
				href: "/projects",
			},
			{
				name: "Chapters",
				href: "/chapter",
			},
			{
				name: "Student Activities",
				href: "/activities",
			},
			{
				name: "Programming Simplified",
				href: "/programming",
			},
			// {
			// 	name: "Accelerate Your Organization",
			// 	href: "/accelerate",
			// },
		],
	},
	{
		name: "Volunteer",
		href: "/volunteer",
	},
	{
		name: "Contact Us",
		href: "/contact",
	},
	{
		name: "Donate",
		href: "/donate",
		isBold: true,
	},
];

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	// const [bannerVisible, setBannerVisible] = useState(true);

	return (
		<Container
			as="header"
			w="100%"
			// position="fixed"
			position="sticky"
			top={0}
			zIndex={1000}
			bg="brand.transparent"
			backdropFilter="blur(12px)"
			// top={bannerVisible ? { base: 14, md: 8 } : 0}
			// filter="blur(24px)"
		>
			<ContainerInside maxW="none" mx={0}>
				{/* {bannerVisible && (
					<Flex
						bgColor="#FFAC33"
						color="black"
						py={1}
						px={2}
						w="100%"
						// position="fixed"
						zIndex={1000}
						// top={0}
					>
						<Spacer />
						<Text as="b" fontWeight={700}>
							SimpliHacks 2.0 Registration is Officially Open!{" "}
							<NextLink
								href="/simplihacks"
								_hover={{ color: "white" }}
							>
								<Text as="u">Click here to sign up!</Text>
							</NextLink>
						</Text>
						<Spacer />
						<Button
							justifySelf="flex-end"
							bgColor="transparent"
							p={0}
							style={{ aspectRatio: "1" }}
							size="xs"
							onClick={() => setBannerVisible(false)}
						>
							X
						</Button>
					</Flex>
				)} */}
				<Flex
					justify="space-between"
					align="center"
					flexDir={{ base: "column", lg: "row" }}
					py={3}
					px="25px"
					mx="auto"
					maxW="1200px"
				>
					<NextLink href="/" mb={{ base: 2, lg: 0 }}>
						<Flex justify="center" align="center">
							<Image
								src="/ss_logo_final_svg.svg"
								width={30}
								height={30}
								alt="logo"
							/>
							<Heading size="md" color="white" ml={2.5}>
								School Simplified
							</Heading>
						</Flex>
					</NextLink>
					<HStack
						spacing={3}
						fontSize={{
							base: 11,
							sm: 14,
							md: null,
						}}
						flexWrap="wrap"
						justifyContent="center"
					>
						{menuItems.map((menuItem) =>
							menuItem.children ? (
								<Box key={menuItem.name}>
									<DropdownMenu menuItem={menuItem} />
								</Box>
							) : (
								<NextLink
									href={menuItem.href}
									key={menuItem.name}
								>
									{menuItem.isBold ? (
										<b>{menuItem.name}</b>
									) : (
										menuItem.name
									)}
								</NextLink>
							)
						)}
					</HStack>
				</Flex>
			</ContainerInside>
		</Container>
	);
}

const graceTime = 50;

function DropdownMenu({ menuItem }: { menuItem: MenuItem }): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

	let timeout: NodeJS.Timeout;

	const onMouseEnter = (): void => {
		if (timeout) {
			clearTimeout(timeout);
		}
		onOpen();
	};

	const onMouseLeave = (): void => {
		timeout = setTimeout(() => {
			onClose();
		}, graceTime);
	};

	return (
		<Menu isOpen={isOpen} key={menuItem.name}>
			<MenuButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{menuItem.isBold ? <b>{menuItem.name}</b> : menuItem.name}
			</MenuButton>
			<MenuList
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onMouseLeave}
			>
				{menuItem.children.map((child) => (
					<NextLink
						href={child.href}
						_hover={{ background: "white-400" }}
						key={child.name}
					>
						<MenuItem>
							{child.isBold ? <b>{child.name}</b> : child.name}
						</MenuItem>
					</NextLink>
				))}
			</MenuList>
		</Menu>
	);
}
