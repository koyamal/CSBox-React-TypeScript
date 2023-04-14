import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Get Data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Error in Get Data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          {userProfiles.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
    </div>
  );
}
