import { getUserData } from "@/utils/api";
import { UserProfile } from "../components/misc/UserProfile";

const UserPage = async () => {
  const user = await getUserData();
  console.log(user)
  return (
    <UserProfile user={user}/>
  );
};

export default UserPage;
