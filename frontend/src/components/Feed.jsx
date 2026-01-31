import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Shimmer from "./Simmer";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const getFeed = async () => {
    try {
      if (feed) return;
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data?.feed || null));
      setLoading(false);
    } catch (err) {
      if (err) {
        return <Navigate to="/error" />;
      }
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if (loading && !feed)
    return (
      <div className="p-6 sm:p-16 flex justify-center items-center min-h-screen">
        <Shimmer count={1} />
      </div>
    );

  if (!feed || !feed.length) {
    return (
      <div className="p-6 sm:p-16 flex flex-col justify-center items-center min-h-screen text-center">
        <h2 className="font-semibold text-xl sm:text-2xl">
          No new profiles right now
        </h2>
        <p className="text-base-content/60 mt-2">
          Check back later — we’re constantly adding new developers.
        </p>
      </div>
    );

  }

  return (
    <div className="flex justify-center items-center px-4 py-10 sm:py-24 min-h-screen">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
