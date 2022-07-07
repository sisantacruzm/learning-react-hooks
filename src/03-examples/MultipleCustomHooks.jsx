import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } =
        useCounter( 1 );

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data, isLoading, hasError } = useFetch( url );
    const { author, quote } = !!data && data[ 0 ];

    return (
        <>
            <h1>BreakindBad Quotes</h1>
            <hr/>
            { isLoading ? (
                <LoadingQuote/>
            ) : (
                <Quote author={ author } quote={ quote }/>
            ) }

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
                disabled={ isLoading }
            >
                Next quote
            </button>
        </>
    );
};
