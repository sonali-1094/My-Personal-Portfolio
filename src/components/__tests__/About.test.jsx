import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "../About";

test("switches between skills and education tabs", async () => {
  const user = userEvent.setup();
  render(<About />);

  expect(screen.getByText(/technical skills/i)).toBeInTheDocument();
  expect(screen.queryByText(/zeal college of engineering and research/i)).not.toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /education/i }));
  expect(screen.getByText(/zeal college of engineering and research, pune/i)).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /skills/i }));
  expect(screen.getByText(/languages/i)).toBeInTheDocument();
});
