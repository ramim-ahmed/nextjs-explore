import User from "../User/User";

const Users = ({ data }) => {

  return(
        <div>
            {data.map(user => (
                <User
                   key={user.id}
                   user={user}
                 />
            ))}
        </div>
  );
};

export default Users;
