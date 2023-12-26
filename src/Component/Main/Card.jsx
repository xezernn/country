import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Theme } from '../../Context/ThemeContext'

function Card({name,capital,flags, cca3}) {
    const {dark} =useContext(Theme)
    return (
        <Link to={`/all/${cca3}`} rel="noopener noreferrer"  className={"max-w-sm mx-auto group hover:no-underline focus:no-underline "+ (dark ? "bg-gray-100 text-black" : "dark:bg-gray-900")}>
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={flags.svg} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{name.common}</h3>
                <span className="text-xs dark:text-gray-400">{capital !== undefined && capital.map(item => item)}</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    )
}

export default Card