import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { io } from 'socket.io-client';
const BASE_URL = "http://localhost:4000"
export const TickersAPI = createApi({
    reducerPath: 'TickersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        GetTickers: builder.query({
            queryFn: () => ({ data: [] }),
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) {
                try {
                    await cacheDataLoaded;
                    const socket = io.connect('http://localhost:4000');
                    socket.emit('start');
                    socket.on("ticker", (response) => {
                        updateCachedData((draft) => {
                            draft.splice(0, draft.length, ...response);
                        });
                    });
                    await cacheEntryRemoved
                } catch { }


            },
        }),
    }),
    overrideExisting: false,
})

export const { useGetTickersQuery } = TickersAPI