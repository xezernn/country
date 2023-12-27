import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../../Context/DataContext';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Loading from '../Main/Loading';
import ErrorPage from '../ErrorPage';
import { Theme } from '../../Context/ThemeContext';

function Element() {
    const data = useContext(Data);
    const { id } = useParams();
    const [country, setCountry] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const {dark} =useContext(Theme)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

                if (!response.ok) { throw new Error(`HTTP xətası! Status: ${response.status}`) }
                const data = await response.json();
                setCountry(data[0]);
            } catch (error) {
                setError(error);
            } finally {
                setLoad(false);
            }
        };

        fetchData();
    }, [id]);

    // useEffect(() => {
    //     try {
    //         fetch("https://restcountries.com/v3.1/alpha/${id}")
    //             .then(res => {
    //                 if (!res.ok) { console.error(`HTTP xətası! Status: ${res.status}`) }
    //                 res.json()
    //             }).then(data => setCountry(data[0]))
    //     } catch {
    //         setError(error);
    //     } finally {
    //         setLoad(false);
    //     }
    // }, [])

    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
            {load && <div className={' flex h-[71vh] w-full justify-center items-center ' +(dark ? "bg-gray-100 text-black" : "dark:bg-gray-900")} ><Loading /></div>}
            {country.length !== 0 &&
                <section className={dark ? "bg-gray-200 text-black " : "text-gray-400 bg-gray-900 body-font"}>
                    <div className="container mx-auto flex px-5 py-24 h-[71vh] md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className={"title-font sm:text-4xl text-3xl mb-2 font-medium " + (dark ? "text-black" : "text-white")}>{country?.name?.common}
                                <p className='text-lg'>  Paytaxtı:  {country?.capital}</p>
                            </h1>
                            <p className="mb-2 leading-relaxed">
                                Danışılan dillər:
                                {country?.languages && " " + Object.values(country?.languages).join(", ")}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                <b>Əskinazları</b>: {country?.currencies !== undefined ? ` ${Object.values(country?.currencies)[0].name} və onun qısaltması ${Object.keys(country?.currencies)[0]} ` : ""}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                <b>Regionu</b>: {country?.region}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                <b>Ümumi Sahısi</b>: {country?.area}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                <b>Əhalisi</b>: {country?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                <b>Saat qurşağı</b>: {country?.timezones.join(", ")}
                            </p>
                            <div className="flex justify-start gap-[8px] flex-wrap">
                                {country?.borders !== undefined ?
                                    country?.borders.map(item => <Link to={`/all/${item}`} key={nanoid()} className="inline-flex  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">{item}</Link>)
                                    :
                                    <p>Ada ölkəsidir, yani qonşusu yoxdur!</p>
                                }
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={country?.flags?.svg} />
                        </div>
                    </div>
                </section>
            }

        </>
    )

}

export default Element