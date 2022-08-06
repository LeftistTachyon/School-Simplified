import { render } from "@testing-library/react";
import Home from "@pages/index";
import Volunteering from "@pages/volunteer";

it("renders all pages", () => {
	const HomePage = render(<Home />);
	const VolunteerPage = render(<Volunteering postings={[]} />);
	expect(HomePage).toMatchSnapshot();
	expect(VolunteerPage).toMatchSnapshot();
});
