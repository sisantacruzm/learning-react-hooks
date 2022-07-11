import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { act } from "react-dom/test-utils";

const initialValue = {
    name : "Fernando",
    email: "fernando@google.com",
};

describe( "Prueba de useForm", () => {

    test( "debe de regresar los valores por defecto", () => {
        const { result } = renderHook( () => useForm( initialValue ) );
        expect( result.current ).toEqual( {
                name         : initialValue.name,
                email        : initialValue.email,
                formState    : initialValue,
                onInputChange: expect.any( Function ),
                onResetForm  : expect.any( Function ),
            },
        );
    } );

    test( "debe de realizar el cambio del valor en formulario", () => {

        const newValue = "Juan";
        const { result } = renderHook( () => useForm( initialValue ) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange( { target: { name: "name", value: newValue } } );
        } );

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    } );

    test( "debe de realizar el reset en el formulario", () => {

        const newValue = "Juan";
        const { result } = renderHook( () => useForm( initialValue ) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange( { target: { name: "name", value: newValue } } );
            onResetForm();
        } );

        expect( result.current.name ).toBe( initialValue.name );
        expect( result.current.formState.name ).toBe( initialValue.name );
    } );

} );