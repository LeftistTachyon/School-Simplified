import { FAQ, Hero, Sponsors, Staff, Winners } from "@components/simplihacks";

export default function simpliHacks(): JSX.Element {
	return (
		<>
			<Hero />
			<Winners />
			<FAQ />
			<Sponsors />
			<Staff />
		</>
	);
}
