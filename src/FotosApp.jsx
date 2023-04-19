import { Foto } from './components/Foto';
import { LoadingPhoto } from './components/LoadingPhoto';
import { useCounter } from './hooks/useCounter';
import { useFetch } from './hooks/useFetch';
export const FotosApp = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
        `https://jsonplaceholder.typicode.com/photos?id=${counter}`
    );
    console.log(data);
    const { albumId, id, title, url, thumbnailUrl } = !!data && data[0];
    return (
        <>
            <h1>Fotos de colores</h1>
            <hr />
            {/* {isLoading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                data.map((quote) => (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote.quote}</p>
                        <footer className="blockquote-footer">
                            {quote.author}
                        </footer>
                    </blockquote>
                ))
            )} */}
            {isLoading ? (
                <LoadingPhoto />
            ) : (
                data.map((foto) => <Foto foto={foto} />)
            )}

            <button
                className="btn btn-secondary"
                onClick={() => increment()}
                disabled={isLoading}>
                More Cuotes
            </button>
        </>
    );
};
