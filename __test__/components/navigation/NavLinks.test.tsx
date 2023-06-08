import NavLink from "../../../components/NavLink";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { render, screen } from "@testing-library/react";

describe("NavLink", () => {
  it("renders a link with an icon", () => {
    const href = "/cart";
    const description = "ShoppingCart";
    render(
      <NavLink href={href} icon={ShoppingCartIcon} description={description} />
    );
    const svg = screen.getByTitle(description);
    const link = svg.parentElement?.parentElement?.parentElement;
    expect(svg).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
  });
});
