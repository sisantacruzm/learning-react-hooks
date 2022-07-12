import { todoReducer } from "../../src/08-useReeducer/todoReducer";

describe( "Pruebas del todoReducer", () => {

    const initialState = [
        {
            id         : 1,
            description: "Demo Todo",
            done       : false,
        },
    ];

    test( "debe de regresar el estado inicial", () => {

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );

    } );

    test( "debe de agregar el todo", () => {

        const action = {
            type   : "[TODO] Add Todo",
            payload: {
                id         : 2,
                description: "Nuevo todo No.2",
                done       : false,
            },
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    } );

    test( "debe de eliminar un TODO", () => {

        const action = {
            type   : "[TODO] Remove Todo",
            payload: 1,
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );

    } );

    test( "debe de realizar el toggle del todo", () => {

        const action = {
            type   : "[TODO] Toggle Todo",
            payload: 1,
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 1 );
        expect( newState[ 0 ].done ).toBeTruthy();

    } );

} );