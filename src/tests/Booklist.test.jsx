import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Booklist from "../assets/components/Booklist";
import fantasy from "../assets/json/fantasy.json";

describe("number of cards", () => {
    it("checks if cards in Booklist are of the correct number", () => {
        render(<Booklist list={fantasy} reloadComment={0} />);
        return screen
            .findAllByTestId("card")
            .then((cards) => expect(cards).toHaveLength(fantasy.length));
    });
});
