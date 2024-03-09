import Image from "next/image";
import styles from "./page.module.css";
import ChatPage from "./components/ChatPage/ChatPage";

export default function Home() {
  return (
    <main>
      <ChatPage />
    </main>
  );
}
