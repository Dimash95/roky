export interface NewsResponse {
  response: {
    results: {
      id: string;
      webPublicationDate: string;
      webTitle: string;
      fields: {
        thumbnail: string;
        bodyText: string;
      };
    }[];
  };
}
