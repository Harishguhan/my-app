import { render, screen } from "@testing-library/react";
import React from "react";
import { renderComponentProvider } from "../../Utilities/TestCase";
import Login from "./Login";

describe("Test the Login Form", () => {
  it("test the content", () => {
    renderComponentProvider(<Login />);

    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("test the buttonlist", async () => {
    renderComponentProvider(<Login />);

    const buttonList = await screen.findAllByRole("button");

    expect(buttonList).toHaveLength(1);
  });


  it("test the attribute",()=>{;
    renderComponentProvider(<Login />);

    const email = screen.getByPlaceholderText("Enter your email address");
    const password = screen.getByPlaceholderText("Enter your password")

    expect(email).toHaveAttribute("type","email");
    expect(password).toHaveAttribute("type","password");
  })
});
