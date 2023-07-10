import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NavUserPortrait from "../../../app/components/navigation/NavUserPortrait";
import { SessionProvider, signOut } from "next-auth/react";
import { Session } from "next-auth";

describe("Render Signed In User ", () => {
  let sessionMock: Session;
  beforeEach(() => {
    sessionMock = {
      user: {
        id: "",
        name: "Juan Pablo Valdez Torres",
        email: "cv.juanp@gmail.com",
        image:
          "https://lh3.googleusercontent.com/a/AAcHTtdThkU_GMGO7-WJeldMTjErKfash5fiq5tKPh2TGQ=s96-c",
        _id: "647f7e5cb6ad6267deb94993",
        rol: "user",
        cash: 8,
        items: [],
      },
      expires: "2023-07-08T18:54:59.041Z",
    };
    render(
      <SessionProvider session={sessionMock}>
        <NavUserPortrait />
      </SessionProvider>
    );
  });

  it("renders without errors", () => {
    // Assert that no errors occurred during rendering
    const errorElement = screen.queryByRole("alert");
    expect(errorElement).toBeNull();
  });

  it("displays singed-in users name", () => {
    const greeting = screen.getByText(/Hi Juan/);
    expect(greeting).toBeInTheDocument();
  });
  it("displays singed-in users img", () => {
    const picture = screen.getByAltText("Your Profile Image");
    expect(picture).toBeInTheDocument();
  });
  it("displays the correct sign button", () => {
    const signOutBtn = screen.getByRole("button", { name: "Sign Out" });
    expect(signOutBtn).toBeInTheDocument();
  });
});

describe("render card of unauthenticated users", () => {
  beforeEach(() => {
    render(
      <SessionProvider session={null}>
        <NavUserPortrait />
      </SessionProvider>
    );
  });
  it("renders without errors", () => {
    // Assert that no errors occurred during rendering
    const errorElement = screen.queryByRole("alert");
    expect(errorElement).toBeNull();
  });
  it("displays the correct text", () => {
    const signInText = screen.getByText(/You are not Signed in/);
    expect(signInText).toBeInTheDocument();
  });
  it("displays the correct sign button", () => {
    const signOutBtn = screen.getByRole("button", { name: "Sign In" });
    expect(signOutBtn).toBeInTheDocument();
  });
});
