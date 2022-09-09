import { screen } from "@testing-library/react";
import React from "react";
import { renderComponentProvider } from "../../../Utilities/TestCase";
import AdminLogin from './AdminLogin';

describe("login form testing",() => {
    it("testing the id to be in the document",() => {
        renderComponentProvider(<AdminLogin />)

        
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    })

    it("test the buttonlist", async () => {
        renderComponentProvider(<AdminLogin />);
    
        const buttonList = await screen.findAllByRole("button");
    
        expect(buttonList).toHaveLength(1);
      });
    it("test the attribute",()=>{;
        renderComponentProvider(<AdminLogin />);
    
        const email = screen.getByPlaceholderText("Enter your email..");
        const password = screen.getByPlaceholderText("Enter your Password..")
    
        expect(email).toHaveAttribute("type","email");
        expect(password).toHaveAttribute("type","password");
      })
    
})