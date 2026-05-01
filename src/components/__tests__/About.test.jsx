import { render, screen } from "@testing-library/react";
import About from "../About";

test("renders the redesigned about highlights and informative sections", () => {
  render(<About />);

  expect(screen.getByText(/i build simple, useful web experiences/i)).toBeInTheDocument();
  expect(screen.getByText(/projects built/i)).toBeInTheDocument();
  expect(screen.getByText(/current focus/i)).toBeInTheDocument();
  expect(screen.getByText(/unique feature ideas/i)).toBeInTheDocument();
  expect(screen.getByText(/zeal college of engineering and research, pune/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /start a conversation/i })).toHaveAttribute("href", "#contact");
});
