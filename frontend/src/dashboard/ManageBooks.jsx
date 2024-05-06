import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Spinner, Table } from 'flowbite-react';
import { AuthContext } from '../contexts/AuthProvider';
import BASE_URL from '../server';

const ManageBooks = () => {
    const { user, loading } = useContext(AuthContext);
    const [allBooks, setAllBooks] = useState([]);


   

    function handleDelete(id) {
        fetch(`${BASE_URL}/book/${id}`, {
            method: "DELETE",

        }).then(res => res.json()).then(data => {
            alert("Book deleted successfully!!!")

        })

    }

    if (loading) {
        return <div className='text-center'><Spinner /></div>
    }
    if (user) {
        useEffect(() => {
            fetch(`${BASE_URL}/all-books/${user?.email}`).then(res => res.json()).then(data => setAllBooks(data));
        }, [])

        return (
            <div className='px-4 my-12'>
                <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
                <Table className='lg:w-[1180px]'>
                    <Table.Head>
                        <Table.HeadCell>S. No.</Table.HeadCell>
                        <Table.HeadCell>Book name</Table.HeadCell>
                        <Table.HeadCell>Author Name</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            allBooks.map(({ _id, bookTitle, authorName, category, status, price }, index) =>
                                <Table.Row key={_id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {bookTitle}
                                    </Table.Cell>
                                    <Table.Cell>{authorName}</Table.Cell>
                                    <Table.Cell>{category}</Table.Cell>
                                    <Table.Cell>${price}</Table.Cell>

                                    <Table.Cell className={(status == "verified") ? "text-green-500" : "text-red-500"}>{status}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/user/dashboard/edit-book/${_id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(_id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                                    </Table.Cell>
                                </Table.Row>)
                        }
                    </Table.Body>

                </Table>


            </div>
        )
    }
}

export default ManageBooks