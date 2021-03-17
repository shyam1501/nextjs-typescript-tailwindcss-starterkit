import { render } from "@testing-library/react";
import SomeComp from "../components/Some";

describe("SomeComp", () => {
  it("renders Hello", () => {
    const { getByText } = render(<SomeComp />);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
