import React from 'react';
import { useGetTickersQuery } from '../BLL/getRequests'
import Loading from './Loading'
import Ticker from './Tickers'
const TickerContainer = () => {
    const { data } = useGetTickersQuery()
    const Tickers = data && data.map((data, i) => {
        return <Ticker key={i} data={data} />
    })
    return <>
        {Tickers}
        {(!data || !data[0]) && <Loading />}

    </>

}

export default TickerContainer;
