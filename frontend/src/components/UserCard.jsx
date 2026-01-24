import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  if (!user) return null;

  const {
    _id,
    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl,
    skills = [],
  } = user;

  const handleButtonClick = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true },
      );
      dispatch(removeFromFeed(_id));
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="h-56">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
          <div className="badge badge-secondary">{age}</div>
        </h2>

        <p className="text-sm capitalize text-gray-300">{gender}</p>

        <p className="text-sm text-gray-300">{about}</p>

        <div className="flex flex-wrap gap-2 pt-4">
          {Array.isArray(skills) &&
            skills.map((skill, index) => (
              <span key={index} className="badge badge-outline">
                {skill}
              </span>
            ))}
        </div>

        <div className="card-actions justify-between pt-4">
          <button
            className="btn btn-error btn-sm"
            onClick={() => {
              handleButtonClick("ignored", _id);
            }}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              handleButtonClick("interested", _id);
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
