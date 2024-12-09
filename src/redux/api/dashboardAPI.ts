import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BarChartResponse, LineChartResponse, PieChartResponse, StatsResponse } from "../../types/api-types";

export const dashboardAPI = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/dashboard/`,
    }),
    endpoints: (builder) => ({
        // stats 
        stats: builder.query<StatsResponse, string>({
            query: (id) => `stats?id=${id}`,
            keepUnusedDataFor: 0,
        }),

        // pie chart
        pieChart: builder.query<PieChartResponse, string>({
            query: (id) => `pie?id=${id}`,
            keepUnusedDataFor: 0,
        }),

        // Bar chart
        barChart: builder.query<BarChartResponse, string>({
            query: (id) => `bar?id=${id}`,
            keepUnusedDataFor: 0,
        }),

        // Line chart
        lineChart: builder.query<LineChartResponse, string>({
            query: (id) => `line?id=${id}`,
            keepUnusedDataFor: 0, // cashing nhi ho isliye ye likha hua hai.
        }),
    }),
});

export const { useStatsQuery, usePieChartQuery, useBarChartQuery, useLineChartQuery} = dashboardAPI;