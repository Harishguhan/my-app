import { screen } from "@testing-library/react";
import React from "react";
import { renderComponentProvider } from "../../Utilities/TestCase";
import RegisterForm from "./RegisterForm";

describe("register form", () => {
  it(" Register Form", async () => {
    renderComponentProvider(<RegisterForm />);

    const username = screen.getByTestId("username");
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");
    const confirmpassword = screen.getByTestId("confirmpassword");

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmpassword).toBeInTheDocument();
  });


  it("Button List", async () => {
    renderComponentProvider(<RegisterForm />);

    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });


  it("Attibute check",() => {
    renderComponentProvider(<RegisterForm />);
    const username = screen.getByPlaceholderText("Enter your Username");
    const email = screen.getByPlaceholderText("Enter your email");
    const password = screen.getByPlaceholderText("Enter your Password");
    const ConfirmPassword = screen.getByPlaceholderText("Enter your ConfirmPassword");

    expect(username).toHaveAttribute("type","text");
    expect(email).toHaveAttribute("type","email")
    expect(password).toHaveAttribute("type","password");
    expect(ConfirmPassword).toHaveAttribute("type","password");
    
  });
});
