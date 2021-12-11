
const User = ({user}) => {
    const {name, email,} = user;
    return (
        <div className="border p-3 m-3 cursor-pointer">
            <h3>{name}</h3>
            <p className="text-secondary">{email}</p>
        </div>
    );
};

export default User;