import React from "react"; 
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import { describe, test, expect } from "vitest";

describe("Home Component", () => {
  test("renders the first activity initially", () => {
    render(<Home />);

    const heading = screen.getByText(/I love Coding/i);
    expect(heading).toBeInTheDocument();
  });

  test("changes the activity when the button is clicked", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /What else do I enjoy doing/i });
    fireEvent.click(button);
    expect(screen.getByText(/Playing Racing Car Games/i)).toBeInTheDocument();
  });
});
