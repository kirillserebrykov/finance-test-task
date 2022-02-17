import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const styleCard = {
    display: 'flex',
    width: "500px",
    height: "50px",
    marginTop: "10px",
    position: "relative"
}
const styleBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px"
}


const CardMain = ({ ticker, price, priseColor, setInfo, isInfo }) => {
    const openClose = () => {
        if (isInfo) return setInfo(false)
        else return setInfo(true)
    }
    return (
        <Card sx={styleCard}>
            <Box sx={styleBox}>
                <Typography variant="subtitle1" color="#00000" component="div" sx={{ fontWeight: "700" }}>
                    <span>{ticker}</span>
                </Typography>
                <Typography variant="subtitle1" color={priseColor && priseColor} sx={{ position: "absolute", right: "10px", fontWeight: "700" }} component="div">
                    <span>{price}$</span>
                    <IconButton onClick={openClose} aria-label="inf" component="span">
                        <ArrowDropDownIcon />
                    </IconButton>
                </Typography>
            </Box>
        </Card>
    );
}

export default CardMain;
