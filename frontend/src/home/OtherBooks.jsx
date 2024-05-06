import { useEffect, useState } from "react"
import BookCards from "../components/BookCards";
import BASE_URL from "../server";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/all-verified-books`).then(res => res.json()).then(data => setBooks(data.slice(13, data.length)));
    }, [])
    return (
        <div><BookCards books={books} headline="Other Books" /></div>
    )
}

export default OtherBooks