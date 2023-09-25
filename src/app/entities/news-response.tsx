export interface NewsResponse {
  response: {
    results: {
      id: string;
      webUrl: string;
      webPublicationDate: string;
      webTitle: string;
    }[];
  };
}
