import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { saveColor} from '../common/SetColor';
import Info from './Info';
import CardMain from './CardMain';

const Ticker = ({ data }) => {
    const [prevValue, setValue] = useState("")
    const [Color, setColor] = useState("")
    const [isInfo, setInfo] = useState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => saveColor(prevValue, setValue, setColor, data.price), [data.price])
    return (
        <>
            <CardMain ticker={data.ticker} price={data.price} priseColor={Color} setInfo={setInfo} isInfo={isInfo} />
            {isInfo && <Card sx={{ display: 'flex', flexDirection: 'column', width: "500px", marginTop: "5px", position: "relative", paddingTop: "5px" }}>
                <Info data={data.exchange} name={"Exchange"} />
                <Info data={data.change} name={"Change"} dynamicColor={true} />
                <Info data={data.change_percent + "%"} name={"Change percent"} dynamicColor={true} />
                <Info data={data.dividend} name={"Dividend"} dynamicColor={true} />
                <Info data={data.last_trade_time} name={"Last trade time"} />
            </Card>}
        </>
    );
}

export default Ticker;
