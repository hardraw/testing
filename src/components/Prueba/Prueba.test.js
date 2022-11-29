import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import Prueba from "./Prueba";

test('render component', ()=>{
    render(<Prueba/>);
    screen.debug;
    const text = screen.getByText(/Hola/i);
    expect(text).toBeInTheDocument();

})