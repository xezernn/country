import React, { useContext, useState } from 'react'
import { Data } from '../Context/DataContext'
import { useParams } from 'react-router-dom'
import Card from './Main/Card'
import { nanoid } from 'nanoid'
import { Theme } from '../Context/ThemeContext'
import ErrorPage from './ErrorPage'

function Region() {
    const data = useContext(Data)
    const { dark } = useContext(Theme)
    const { region } = useParams()
    const filteredData = data.filter(item => item.region === region);
    if (filteredData.length === 0) {
        return (<ErrorPage />)
    }
    return (
        <section className={" text-center " + (dark ? "bg-gray-200 text-black" : "dark:bg-gray-800")}>
            <h1 className=" mx-auto font-bold leadi sm:text-5xl">{region} qitəsindəki bütün ölkələr <br />
            </h1>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid text-ini justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        filteredData
                            ?.map(item => <Card key={nanoid()} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Region