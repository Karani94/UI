import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, UserList }  from "./index";

const Main = () => {
  const users = useSelector((store) => store.user);

  return (
    <>
      <Link to={"/add-user"}>
        <Button>Add User</Button>
      </Link>

      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? 
          <UserList /> 
            : 
          <p className="text-center col-span-2 font-semibold text-gray-700">
            No User
          </p>
        }
      </div>
    </>
  );
}

export default Main;