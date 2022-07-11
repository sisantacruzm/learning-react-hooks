import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe( "Pruebas en el useCounter", () => {
    test( "debe de retornar los valores por defectos ", () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    } );

    test( "debe de generar el counter con el valor de 100", () => {

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    } );

    test( "debe de ingremente el contador", () => {

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment( 2 );
        } );

        expect( result.current.counter ).toBe( 103 );

    } );

    test( "debe de descrementar el contador", () => {

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement(5);
            decrement( 5 );
        } );

        expect( result.current.counter ).toBe( 90 );

    } );

    test( "debe de resetar el contador", () => {

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, increment, decrement, reset } = result.current;

        act( () => {
            increment( 5 );
            decrement( 2 );
            reset();
        } );

        expect( result.current.counter ).toBe( 100 );

    } );

} );