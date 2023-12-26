import React, { useContext, useEffect, useState } from 'react'
import Random from './Random'
import Card from './Card'
import { Data } from '../../Context/DataContext'
import { nanoid } from 'nanoid'
import Search from '../Search/Search'

function Main() {
    const [block, setBlock] = useState(true)
    const [count, setCount] = useState(12)
    const [search, setSearch] = useState("")
    const data = useContext(Data)
    return (
        <main>
            <section className={`dark:bg-gray-800 dark:text-gray-100 pt-8 `}>
                {
                    <div style={{ maxHeight: !block ? "200px" : "0", transition: ".7s ease-in-out" }} className=' overflow-hidden max-w-[400px] mx-auto '>
                        <Search setSearch={setSearch} />
                    </div>
                }
                {search === "" &&  <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-16 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl">Ölkə axtarışına <br />
                        <span className="dark:text-violet-400"> Xoş gəlmisiniz</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Aşağıdakı linkdən bütün ölkələri axtara və onlar haqqında ətraflı məlumat tapa bilərsiniz!</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={() => { setBlock(!block) }} className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Axtarmağa Başla!  </button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Biz kimik?</button>
                    </div>
                </div>}
            </section>
            <section className={`dark:bg-gray-800 dark:text-gray-100 pt-8 min-h-[61vh]`}>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                     {search === "" &&  <Random />}
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            data
                            .filter(item => item.name.common.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))
                                .slice(0, count)?.map(item => <Card key={nanoid()} {...item} />)
                        }
                    </div>
                    <div className="flex justify-center">
                        {search === "" && <button disabled={count >= data.length} type="button" onClick={() => { setCount(count + 9) }} className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400 disabled:bg-slate-400 disabled:text-black disabled:cursor-no-drop">Daha çox ölkə...</button>
                    }</div>
                </div>
            </section>
        </main>
    )
}

export default Main