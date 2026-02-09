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
    memberships,
  } = user;

  // ================= MEMBERSHIP LOGIC =================
  const isGold = memberships?.Gold?.active;
  const isSilver = memberships?.Silver?.active;

  // ================= HANDLERS =================
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
    <div
      className={`card w-full max-w-sm sm:w-80 bg-base-200 transition-all duration-300
        ${
          isGold
            ? "border-2 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.7)] hover:shadow-[0_0_35px_rgba(234,179,8,0.9)]"
            : isSilver
              ? "border-2 border-gray-300 shadow-[0_0_20px_rgba(209,213,219,0.7)] hover:shadow-[0_0_28px_rgba(209,213,219,0.9)]"
              : "shadow-xl"
        }
      `}
    >
      <figure className="h-48 sm:h-56">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl">
          {firstName} {lastName}
          {age && <div className="badge badge-secondary">{age}</div>}
        </h2>

        <p className="text-xs sm:text-sm capitalize text-gray-300">{gender}</p>

        <p className="text-sm text-gray-300">{about}</p>

        <div className="flex flex-wrap gap-2 pt-4">
          {Array.isArray(skills) &&
            skills.map((skill, index) => (
              <span key={index} className="badge badge-outline">
                {skill}
              </span>
            ))}
        </div>

        <div className="card-actions flex flex-col sm:flex-row gap-2 sm:justify-between pt-4">
          <button
            className="btn btn-error btn-sm w-full sm:w-auto"
            onClick={() => handleButtonClick("ignored", _id)}
          >
            Ignore
          </button>

          <button
            className="btn btn-primary btn-sm w-full sm:w-auto"
            onClick={() => handleButtonClick("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
