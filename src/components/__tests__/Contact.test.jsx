import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

vi.mock("emailjs-com", () => ({
  default: {
    sendForm: vi.fn().mockResolvedValue({}),
  },
}));

async function renderContact() {
  vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "service_test");
  vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "template_test");
  vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "public_test");
  vi.resetModules();
  const { default: Contact } = await import("../Contact");
  return render(<Contact />);
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

test("shows unavailable message when EmailJS env vars are missing", async () => {
  const user = userEvent.setup();
  vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "");
  vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "");
  vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");
  vi.resetModules();
  const { default: Contact } = await import("../Contact");
  const { default: emailjs } = await import("emailjs-com");
  render(<Contact />);

  await user.type(screen.getByLabelText(/your name/i), "Sonali");
  await user.type(screen.getByLabelText(/your email/i), "sonali@example.com");
  await user.type(screen.getByLabelText(/your message/i), "Hello there");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(emailjs.sendForm).not.toHaveBeenCalled();
  expect(screen.getByText(/contact form is temporarily unavailable/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /open email app/i })).toBeInTheDocument();
});

test("submits successfully when form is valid", async () => {
  const user = userEvent.setup();
  await renderContact();
  const { default: emailjs } = await import("emailjs-com");
  emailjs.sendForm.mockResolvedValueOnce({});

  await user.type(screen.getByLabelText(/your name/i), "Sonali");
  await user.type(screen.getByLabelText(/your email/i), "sonali@example.com");
  await user.type(screen.getByLabelText(/your message/i), "Hello there");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument();
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
});
