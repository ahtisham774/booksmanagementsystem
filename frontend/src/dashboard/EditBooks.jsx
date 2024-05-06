import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import { useLoaderData, useParams } from 'react-router-dom'
import BASE_URL from '../server'
const EditBooks = () => {
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price } = useLoaderData();
    const bookCategories = [
        "Fiction",
        "Mystery",
        "Programming",
        "Historical Fiction",
        "Young Adult",
        "Sci-Fi",
        "Fantasy",
        "Horror",
        "Biography",
        "Autobiography",
        "History",
        "Self-Help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ];
    const [selectedBookCategory, setSelectedBookCategory] = useState(category);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const bookDescription = form.bookDescription.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookPDFURL = form.bookPDFURL.value;
        const price = form.price.value;
        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price, status: "unverified"
        }
        fetch(`${BASE_URL}/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book updated successfully!!!")

        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Edit the Book Details</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap  gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput name="bookTitle" id="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput name="authorName" id="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
                    </div>

                </div>

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput name="imageURL" id="imageURL" type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Category" />
                        </div>
                        <Select id="inputState" name="category" onChange={(event) => { setSelectedBookCategory(event.target.value) }} defaultValue={selectedBookCategory} required className='w-full rounded'>

                            {bookCategories.map(categ => {
                                return <option key={categ} value={categ}>{categ}</option>
                            }
                            )}

                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Description" />
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" placeholder="Add a description" defaultValue={bookDescription} required className='w-full' rows={4} />
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                        </div>
                        <TextInput name="bookPDFURL" id="bookPDFURL" type="text" defaultValue={bookPDFURL} placeholder="Book PDF URL" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Price" />
                        </div>
                        <TextInput name="price" id="price" type="number" defaultValue={price} placeholder="Price" required />
                    </div>
                </div>
                <Button type="submit" className='mt-5'>Save</Button>
            </form>
        </div>
    )
}

export default EditBooks