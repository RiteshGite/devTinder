import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Chat = () => {
    const { targetUserId } = useParams();
    const connections = useSelector((store) => store.connections);
    const targetUser = connections.find((conn) => conn._id === targetUserId);

    const [message, setMessage] = useState("");

    return (
      <div className="h-screen pt-16 py-22">
        <div className="h-full max-w-4xl mx-auto bg-zinc-900 relative">
          {/* header of chat */}
          <div className="flex items-center gap-4 p-4 border-b border-gray-700">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={`${targetUser.photoUrl}`} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {targetUser.firstName} {targetUser.lastName}
              </h2>
            </div>
          </div>
          {/* messages area */}
          <div></div>
          {/* input area */}
          <div className="p-4 flex items-center gap-2 border-t border-gray-700 absolute bottom-0 left-0 right-0">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-4 rounded-lg bg-gray-800"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    );
};

export default Chat;
