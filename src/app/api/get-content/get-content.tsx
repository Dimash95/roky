import axios from "axios";

const apiKey = "703bf184-c4d8-4f55-a8ea-6a1d23f487e3";

export const getContent = async (
  query: string,
  page: number,
  pageSize: string,
  sortBy: string
) => {
  const response = await axios.get(
    `https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${apiKey}`,
    // "https://content.guardianapis.com/search?api-key=703bf184-c4d8-4f55-a8ea-6a1d23f487e3",
    {
      params: {
        q: query,
        page: page,
        "page-size": pageSize,
        "order-by": sortBy,
      },
    }
  );
  return response.data;
};
