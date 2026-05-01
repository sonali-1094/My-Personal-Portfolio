import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import emailjs from "@emailjs/browser";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(),
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
  render(<Contact />);

  await user.type(screen.getByLabelText(/your name/i), "Sonali");
  await user.type(screen.getByLabelText(/your email/i), "sonali@example.com");
  await user.type(screen.getByLabelText(/your message/i), "Hello there");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(emailjs.send).not.toHaveBeenCalled();
  expect(screen.getByText(/contact form is temporarily unavailable/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /open email app/i })).toBeInTheDocument();
});

test("submits successfully when form is valid", async () => {
  const user = userEvent.setup();
  emailjs.send.mockResolvedValueOnce({ status: 200, text: "OK" });
  await renderContact();

  await user.type(screen.getByLabelText(/your name/i), "Sonali");
  await user.type(screen.getByLabelText(/your email/i), "sonali@example.com");
  await user.type(screen.getByLabelText(/your message/i), "Hello there");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument();
  expect(emailjs.send).toHaveBeenCalledWith(
    "service_test",
    "template_test",
    expect.objectContaining({
      user_name: "Sonali",
      user_email: "sonali@example.com",
      message: "Hello there",
      reply_to: "sonali@example.com",
    }),
    {
      publicKey: "public_test",
    }
  );
});

test("shows email fallback when EmailJS rejects the public key", async () => {
  const user = userEvent.setup();
  emailjs.send.mockRejectedValueOnce({
    text: "The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account",
  });
  await renderContact();

  await user.type(screen.getByLabelText(/your name/i), "Sonali");
  await user.type(screen.getByLabelText(/your email/i), "sonali@example.com");
  await user.type(screen.getByLabelText(/your message/i), "Hello there");
  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(
    await screen.findByText(/contact form setup needs a valid emailjs public key/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /open email app/i })).toHaveAttribute(
    "href",
    expect.stringContaining("mailto:sonalirpatil109@gmail.com")
  );
});
