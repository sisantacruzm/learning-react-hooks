import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock( "../../src/hooks/useFetch" );
jest.mock( "../../src/hooks/useCounter" );

describe( "Prueba en <MultipleCustomHooks />", () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue( {
        counter  : 1,
        increment: mockIncrement,
    } );

    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test( "debe de mostrar el componente por defecto", () => {

        useFetch.mockReturnValue( {
            data     : null,
            isLoading: true,
            hasError : null,
        } );

        render( <MultipleCustomHooks/> );

        expect( screen.getByText( "BreakindBad Quotes" ) );
        expect( screen.getByText( "Loading..." ) );

        const nextButton = screen.getByRole( "button", {
                name: "Next quote",
            },
        );
        expect( nextButton.disabled ).toBeTruthy();
        // screen.debug();
    } );

    test( "debe de mostrar un Quote", () => {

        useFetch.mockReturnValue( {
            data     : [ { author: "Fernando", quote: "Hola mundo" } ],
            isLoading: false,
            hasError : null,
        } );

        render( <MultipleCustomHooks/> );
        expect( screen.getByText( "Hola mundo" ) ).toBeTruthy();
        expect( screen.getByText( "Fernando" ) ).toBeTruthy();

        const nextButton = screen.getByRole( "button", {
                name: "Next quote",
            },
        );
        expect( nextButton.disabled ).toBeFalsy();

        // screen.debug();
    } );

    test( "debe de llamar la función de incrementar", () => {

        useFetch.mockReturnValue( {
            data     : [ { author: "Fernando", quote: "Hola mundo" } ],
            isLoading: false,
            hasError : null,
        } );

        render( <MultipleCustomHooks/> );

        const nextButton = screen.getByRole( "button", {
                name: "Next quote",
            },
        );

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    } );

} );