import React, { useContext } from 'react'
import { Data } from '../../Context/DataContext'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { Theme } from '../../Context/ThemeContext';

const Random = React.memo(() => {
    const data = useContext(Data)
    const {dark} = useContext(Theme)
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomData = data[rand(0, data.length - 1)]

    return (
        <Link to={`all/${randomData?.cca3}`} rel="noopener noreferrer"  className={"block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "+ (dark ? "bg-gray-100 text-black" : "dark:bg-gray-900")   }>
            <img src={randomData?.flags.svg} alt={randomData?.flags.alt} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{randomData?.name.common}</h3>
                <span className="text-xs dark:text-gray-400">Paytaxt: {randomData?.capital.map(item=> item)}</span>
                <p>Yerləşdiyi qitə: {randomData?.region}</p>
                <p>{ randomData?.name.common}-in əhalisi: {randomData?.population}</p>
			
                {randomData?.borders !== undefined ?
                    <p>Onun qonşuları:
                        {
                            randomData?.borders?.map(item => <Link to={item} key={nanoid()} rel="noopener noreferrer" className="inline-block px-2 py-1 text-sm font-semibold rounded-md my-1 mx-2 dark:bg-violet-400 dark:text-gray-900">{item}</Link>)
                        }

                    </p>
                    :
                    <p>Ada ölkəsidir, yani qonşusu yoxdur!</p>
                }
            </div>
        </Link>
    )
})

export default Random