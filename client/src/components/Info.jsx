import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { saveColor } from '../common/SetColor';

const styleBox = {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: "10px",
    position: "relative"
}

const Info = ({ data, name, dynamicColor }) => {
    const [prevValue, setValue] = useState("")
    const [Color, setColor] = useState("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => saveColor(prevValue, setValue, setColor, data), [data])
    return (
        <Box sx={styleBox}>
            <Typography variant="subtitle1" sx={{ position: "relative", left: "10px", fontWeight: "700" }} component="div">
                {name}:
            </Typography>
            <Typography variant="subtitle1" color={dynamicColor && Color} sx={{ position: "absolute", right: "10px", fontWeight: "700" }} component="div">
                {data}
            </Typography>
        </Box>
    );
}

export default Info;
