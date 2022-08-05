import {
	FAQ,
	Hero,
	Sponsors,
	Staff,
	Winners,
	Speakers,
} from "@components/simplihacks";

export default function simpliHacks(): JSX.Element {
	return (
		<>
			<Hero />
			<Winners />
			<FAQ />
			<Sponsors />
			<Staff />
			<Speakers />
		</>
	);
}
