export interface PostResponse {
  response: {
    content: {
      webTitle: string;
      webPublicationDate: string;
      webUrl: string;
      fields: {
        thumbnail: string;
        bodyText: string;
      };
    };
  };
}
