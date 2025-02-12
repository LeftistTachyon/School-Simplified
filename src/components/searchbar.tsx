import {
	Center,
	Icon,
	Input,
	InputGroup,
	InputGroupProps,
	InputLeftElement,
	InputRightElement,
	Spinner,
	useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchbarProps = {
	callback?: (arg0: string) => any;
	size?: string;
} & InputGroupProps;

/**
 * Creates a Searchbar with the given SearchbarProps
 * @param {SearchbarProps} props the props to pass to the component, namely, an optional callback function (a function that accepts a string) and optional size
 * @param {(searchTerm: string) => any} props.callback an optional function that is called when the search should be be performed with the string passed as the argument
 * @param {string} props.size the relative size to make this searchbar
 * @returns the Searchbar component
 */
export default function Searchbar({
	callback,
	...functionlessProps
}: SearchbarProps): JSX.Element {
	const [searchWait, setSearchWait] = useState<ReturnType<
		typeof setTimeout
	> | null>(null);
	const [loading, setLoading] = useBoolean(false);

	return (
		<InputGroup {...functionlessProps}>
			{/* size={props.size} is already included */}
			<InputLeftElement
				pointerEvents="none"
				children={
					<Icon
						as={FaSearch}
						boxSize={
							functionlessProps.size === "lg" ||
							functionlessProps.size === "xl"
								? 5
								: 3
						}
					/>
				}
				height="100%"
			/>
			<Input
				placeholder={functionlessProps.placeholder ?? "Search"}
				bg="brand.transparent"
				borderRadius="full"
				size={functionlessProps.size ?? "lg"}
				onChange={(e) => {
					if (searchWait) clearTimeout(searchWait);
					setLoading.on();
					setSearchWait(
						setTimeout(() => {
							// console.log("Invoked with " + e.target.value);
							setSearchWait(null);
							setLoading.off();
							if (callback) callback(e.target.value.trim());
						}, 500)
					);
				}}
			/>
			<InputRightElement
				pointerEvents="none"
				children={
					<Center h="100%">
						<Spinner size={functionlessProps.size} />
					</Center>
				}
				display={loading ? "block" : "none"}
			/>
		</InputGroup>
	);
}
