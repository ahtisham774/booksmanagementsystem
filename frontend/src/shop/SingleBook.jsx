import { useLoaderData } from "react-router-dom"

function SingleBook() {
    const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();
    return (
        <div className="mt-28 px-4 lg:px-24">
            <img src={imageURL} alt=" " className="h-96" />
            <h2 className="pt-3 pb-1 font-bold">{bookTitle}</h2>
            <p>{bookDescription}</p>
        </div>
    )
}

export default SingleBook