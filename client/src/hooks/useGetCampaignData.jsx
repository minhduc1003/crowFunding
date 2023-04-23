import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCampaignData() {
  const [data, setData] = useState();

  useEffect(() => {
    async function handleFetchData() {
      const res = await axios.get("http://localhost:4000/api/categories");
      setData(res?.data);
    }
    handleFetchData();
  }, []);
  return { data };
}
