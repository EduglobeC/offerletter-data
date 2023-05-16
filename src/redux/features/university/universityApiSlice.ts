import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const universityApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseUrl}/api/all-universities`,
		prepareHeaders(headers) {
			const token = null;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["University"],

	endpoints(builder) {
		return {
			createUniversity: builder.mutation({
				query: (body) => ({
					url: "",
					method: "POST",
					body: body,
				}),
				invalidatesTags: ["University"],
			}),

			updateUniversityFaq: builder.mutation({
				query: (body) => ({
					url: "/faq",
					method: "PUT",
					body: body,
				}),
				invalidatesTags: ["University"],
			}),
			updateUniversityProgram: builder.mutation({
				query: (body) => ({
					url: "/program-category",
					method: "PUT",
					body: body,
				}),
				invalidatesTags: ["University"],
			}),
		};
	},
});

export const { useCreateUniversityMutation, useUpdateUniversityFaqMutation, useUpdateUniversityProgramMutation } = universityApiSlice;
