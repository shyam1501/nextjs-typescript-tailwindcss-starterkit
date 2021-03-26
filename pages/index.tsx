import Dashboard from "../components/Dashboard";
import SignIn from "../components/Login";

const isLoggedIn = true;

export default function Home() {
  return isLoggedIn ? <SignIn /> : <Dashboard />;
}
