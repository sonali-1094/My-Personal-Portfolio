import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PortfolioAssistant from "../PortfolioAssistant";

test("answers questions from Sonali portfolio data", async () => {
  const user = userEvent.setup();
  render(<PortfolioAssistant />);

  await user.click(screen.getByRole("button", { name: /open ai assistant/i }));
  await user.click(screen.getByRole("button", { name: /what projects have you built/i }));

  expect(screen.getByText(/ai financial planner/i)).toBeInTheDocument();
  expect(screen.getByText(/sigmavalue real estate chatbot/i)).toBeInTheDocument();

  await user.type(screen.getByLabelText(/ask about sonali/i), "What tech do you know?");
  await user.click(screen.getByRole("button", { name: /send question/i }));

  expect(screen.getByText(/her main stack is mern/i)).toBeInTheDocument();
  expect(screen.getByText(/react\.js/i)).toBeInTheDocument();
});
