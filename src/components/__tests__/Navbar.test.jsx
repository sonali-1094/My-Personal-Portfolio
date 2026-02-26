import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
}

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver;
});

function LayoutWithSections() {
  return (
    <>
      <Navbar />
      <header id="home" />
      <section id="about" />
      <section id="experience" />
      <section id="skills" />
      <section id="services" />
      <section id="projects" />
      <section id="contact" />
    </>
  );
}

test("toggles mobile menu and closes after nav click", async () => {
  const user = userEvent.setup();
  render(<LayoutWithSections />);

  const menuButton = screen.getByRole("button", { name: /toggle navigation/i });
  expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await user.click(menuButton);
  expect(menuButton).toHaveAttribute("aria-expanded", "true");

  await user.click(screen.getByRole("link", { name: /about me/i }));
  expect(menuButton).toHaveAttribute("aria-expanded", "false");
});
