import { useContext, useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import { AuthContext } from '../contexts/AuthProvider';
import BASE_URL from '../server';

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Mystery",
        "Programming",
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
    const { user } = useContext(AuthContext)
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const bookDescription = form.bookDescription.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookPDFURL = form.bookPDFURL.value;
        const price = form.price.value;
        const status = "unverified";
        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price, status, user: user?.email
        }
        fetch(`${BASE_URL}/upload-book`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book uploaded successfully!!!")
            form.reset();
        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap  gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput name="bookTitle" id="bookTitle" type="text" placeholder="Book name" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput name="authorName" id="authorName" type="text" placeholder="Author Name" required />
                    </div>

                </div>

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput name="imageURL" id="imageURL" type="text" placeholder="Book Image URL" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Category" />
                        </div>
                        <Select id="inputState" name="category" onChange={(event) => { setSelectedBookCategory(event.target.value) }} value={selectedBookCategory} required className='w-full rounded'>
                            {bookCategories.map(category => <option key={category} value={category}>{category}</option>)}

                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Description" />
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" placeholder="Add a description" required className='w-full' rows={4} />
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                        </div>
                        <TextInput name="bookPDFURL" id="bookPDFURL" type="text" placeholder="Book PDF URL" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Price" />
                        </div>
                        <TextInput name="price" id="price" type="number" placeholder="Price" required />
                    </div>
                </div>
                <Button type="submit" className='mt-5'>Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBook