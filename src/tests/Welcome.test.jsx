import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../assets/components/Welcome";

describe("initial mounting", () => {
    it("checks if Welcome is mounted correctly", () => {
        render(<Welcome />);
        const welcomeAlert = screen.getByRole("alert");
        expect(welcomeAlert).toBeInTheDocument();
    });
});
