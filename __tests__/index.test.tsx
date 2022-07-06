import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

// NOTE: This test will intentionally fail since the name is not within any button element.

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("button", {
			name: /What is a Project?/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
