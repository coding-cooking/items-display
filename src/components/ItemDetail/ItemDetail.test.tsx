import { fireEvent, render, screen } from "@testing-library/react";
import { PropertyContent } from "../PropertyContent/PropertyContent";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ItemDetail } from "./ItemDetail";

describe("test tab functionality in ItemDetail", () => {
    test("shows the property tab content by default", () => {
        render(<Provider store={store}><ItemDetail /></Provider>);

        const propertyContent = screen.getByTestId("data-properties");
        expect(propertyContent).toBeInTheDocument();
    });

    test("shows the image tab content when Image tab is clicked", () => {
        render(<Provider store={store}><ItemDetail /></Provider>);

        const imageTab = screen.getByText("Image");
        fireEvent.click(imageTab);

        const imageContent = screen.getByTestId("data-image");
        expect(imageContent).toBeInTheDocument();
    });
});