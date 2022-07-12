import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe( "Pruebas en el componente de HomePage", () => {

    const user = {
        id   : 123,
        name : "Juan",
        email: "juan@google.com",
    };

    test( "debe de mostrar el componente sin el usuario", () => {

        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage/>
            </UserContext.Provider>,
        );

        const preTag = screen.getByLabelText( "pre" );
        expect( preTag.innerHTML ).toBe( "null" );
        // screen.debug();

    } );

    test( "debe de mostrar el componente con el usuario", () => {

        render(
            <UserContext.Provider value={ { user } }>
                <HomePage/>
            </UserContext.Provider>,
        );

        const preTag = screen.getByLabelText( "pre" );
        expect( JSON.parse( preTag.innerHTML ) ).toEqual( user );
        // screen.debug();

    } );

} );