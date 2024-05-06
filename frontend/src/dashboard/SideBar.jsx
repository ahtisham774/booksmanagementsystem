import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import userImage from "../assets/profile.jpg"
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../contexts/AuthProvider';
import admin from "../admin"

const SideBar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Sidebar aria-label="Sidebar with content separator example">
                <div className='flex'> {user?.photoURL && <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="picture">

                </Sidebar.Logo>}
                    <p className='mb-10 my-5'>{user?.displayName ? user?.displayName : user?.email}</p>
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={HiUser}>
                            <Link to="/">Home</Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiChartPie}>
                            <Link to="/user/dashboard">Dashboard</Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiOutlineCloudUpload}>
                            <Link to="/user/dashboard/upload">Upload Book</Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiInbox}>
                            <Link to="/user/dashboard/manage">Manage Books</Link>
                        </Sidebar.Item>
                        {(user?.email == admin) && <Sidebar.Item icon={HiInbox}>
                            <Link to="/user/dashboard/manage-all">Manage All Books</Link>
                        </Sidebar.Item>}

                        <Sidebar.Item icon={HiShoppingBag}>
                            <Link to="/shop">Shop</Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiArrowSmRight}>
                            <Link to="/login">Sign In</Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiTable}>
                            <Link to="/logout">Log Out</Link>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>

                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SideBar