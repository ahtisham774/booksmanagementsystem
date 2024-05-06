import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';
import BASE_URL from "../server";
import { Link } from "react-router-dom";

function Shop() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/all-verified-books`).then(res => res.json()).then(data => setBooks(data))
    }, [])
    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>
            <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {
                    books.map(({ imageURL, _id, bookTitle, bookDescription }) => <Card
                        key={_id}
                        className="max-w-sm "
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={imageURL}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {bookTitle}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {bookDescription.substring(0, 110) + "..."}
                        </p>
                        <button className="bg-blue-700 font-semibold text-white py-2 rounded"><Link to={`/book/${_id}`}>Buy Now</Link></button>
                    </Card>)
                }
            </div>
        </div>
    )
}

export default Shop