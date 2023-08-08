import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCampaignData() {
  const [data, setData] = useState();

  useEffect(() => {
    async function handleFetchData() {
      const res = await axios.get("https://backend-app-3662c6e6c455.herokuapp.com/api/categories");
      setData(res?.data);
    }
    handleFetchData();
  }, []);
  return { data };
}
