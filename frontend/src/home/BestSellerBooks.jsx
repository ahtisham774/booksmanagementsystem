import { useEffect, useState } from "react"
import BookCards from "../components/BookCards";
import BASE_URL from "../server";

function BestSellerBooks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/all-verified-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 9)));
    }, [])
    return (
        <div><BookCards books={books} headline="Best Seller Books" /></div>
    )
}

export default BestSellerBooks