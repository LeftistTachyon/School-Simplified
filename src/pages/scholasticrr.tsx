import { FAQ, Hero, Sponsors, Staff } from "../components/scholasticrr";

export default function scholasticRR(): JSX.Element {
	return (
		<>
			<Hero />
			<FAQ />
			<Sponsors />
			<Staff />
		</>
	);
}

export function getStaticProps() {
	return {
		// returns the default 404 page with a status code of 404 in production
		notFound: process.env.NODE_ENV === "production" || "development",
	};
}
