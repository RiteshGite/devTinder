import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Feed = () => {
  const [error, setError] = useState();
  const fetchFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      console.log(res);
    } catch (err) {
      setError("You have seen all the Feed");
      toast.error("You have seen all the Feed");
    }
  }
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div>
      This is the feed
    </div>
  )
}

export default Feed;