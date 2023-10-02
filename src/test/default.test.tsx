import { render, screen } from "@testing-library/react";
import App from "../App";

test("Initial test", () => {
  render(<App />);

  const paragraph = screen.getByText(
    "Click on the Vite and React logos to learn more"
  );

  expect(paragraph).toBeInTheDocument();
});
