import App from "App";
import { renderWithProviders } from "Utils/testing";

describe("<App /> Tests", () => {
  test("Component should render", () => {
    renderWithProviders(<App />);
  });
});
