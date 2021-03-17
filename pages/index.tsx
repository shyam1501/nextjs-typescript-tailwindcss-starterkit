import Head from "next/head";
import Dashboard from "../components/Dashboard";
import SignIn from "../components/Login";
import styles from "../styles/Home.module.css";

const isLoggedIn = true;

export default function Home() {
  return isLoggedIn ? <SignIn /> : <Dashboard />;
}
