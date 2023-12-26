import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 rounded-full dark:text-gray-900">
                            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <Link  href="">By Xezer Novruz</Link>
                        </li>
                        <li>
                            <Link  href="#">Privacy</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap items-center pl-3 mt-0 space-x-4 sm:space-x-8">
                    <li>
                        <a arget='_blanc' href="https://www.instagram.com/xezernn/">Instagram</a>
                    </li>
                    <li>
                        <Link href="#">Facebook</Link>
                    </li>
                    <li>
                        <a target='_blanc'  href="https://twitter.com/xezern0">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer