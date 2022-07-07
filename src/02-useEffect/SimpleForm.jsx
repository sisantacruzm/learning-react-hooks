import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [ formState, setFormState ] = useState( {
        username: "strider",
        email   : "mi@email.com",
    } );

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value,
        } );
    };

    // Se utiliza para ejecutar una sola vez, al renderizar
    useEffect( () => {
        // console.log('useEffect fue llamado, callback');
    }, [] );

    // Se dispara por cada cambia en el useEffect
    useEffect( () => {
        // console.log('formState ha cambiado');
    }, [ formState ] );

    // Se dispara por cada property en el useEffect,
    // obviamente tambien cambio el anterior.
    useEffect( () => {
        // console.log('Email ha cambiado');
    }, [ email ] );

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="tu@email.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            { username === "strider2" && <Message/> }
        </>
    );
};
