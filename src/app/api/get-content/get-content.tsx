import axios from "axios";

export const getContent = async () => {
  const response = await axios.get(
    "https://content.guardianapis.com/search?api-key=703bf184-c4d8-4f55-a8ea-6a1d23f487e3"
  );
  console.log(response.data);
  return response.data;
};
