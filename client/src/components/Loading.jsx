import React from 'react';
import Skeleton from '@mui/material/Skeleton';
const styleSkeleton = {
    borderRadius: "4px",
    marginTop: "10px"
}
const Loading = () => {
    return (
        <div>
            <Skeleton variant="rectangular" sx={styleSkeleton} width={500} height={50} />
            <Skeleton variant="rectangular" sx={styleSkeleton} width={500} height={50} />
            <Skeleton variant="rectangular" sx={styleSkeleton} width={500} height={50} />
            <Skeleton variant="rectangular" sx={styleSkeleton} width={500} height={50} />
        </div>
    );
}

export default Loading;
