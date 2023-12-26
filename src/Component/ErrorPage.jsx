import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Theme } from '../Context/ThemeContext'

function ErrorPage() {
    const {dark} =useContext(Theme)
    return (
        <section className={"flex items-center h-full p-16 " + (dark ? "bg-gray-200 text-black text-black" : "dark:bg-gray-900 dark:text-gray-100")}>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Axtarışınız üzrə nəticə tapılmadı...</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">Aşağıdakı düyməni klikləyərək Əsas Səhifəyə qayıda bilərsiz.</p>
                    <Link rel="noopener noreferrer" to="" className={"px-8 py-3 font-semibold rounded "+ (dark ? "bg-indigo-500 text-white" : "dark:bg-violet-400 dark:text-gray-900")}>Əsas Səhifəyə Keçid</Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage