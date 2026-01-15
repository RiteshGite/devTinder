import { User, Users, Inbox, LogOut} from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-6">
      <div className="flex-1">
        <a href="/" className="flex items-center gap-3 cursor-pointer w-fit">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
              <img src="/DevLogo.png" alt="DevTinder Logo" />
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Dev<span className="text-primary">Tinder</span>
          </h2>
        </a>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost avatar p-0">
          <div className="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring-2 ring-offset-2">
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              alt="User Avatar"
            />
          </div>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-44 rounded-box bg-base-100 shadow"
        >
          <li>
            <a className="hover:bg-primary hover:text-primary-content">
              <User />
              Profile
            </a>
          </li>
          <li>
            <a className="hover:bg-primary hover:text-primary-content">
              <Users />
              Connections
            </a>
          </li>
          <li>
            <a className="hover:bg-primary hover:text-primary-content">
              <Inbox />
              Requests
            </a>
          </li>
          <li>
            <a className="text-error hover:bg-error hover:text-error-content">
              <LogOut />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
