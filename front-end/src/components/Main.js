import SideBar from "./SideBar";
import ChatView from "./ChatView";
import { useEffect, useState } from "react";
import { ChatContextProvider } from "../context/chatContext";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiKey = window.localStorage.getItem("api-key");
    if (!apiKey) {
      setModalOpen(true);
    }
  }, []);
  return (
    <ChatContextProvider>
      <div className="flex transition duration-500 ease-in-out">
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};
{
  /* <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal> */
}
export default Main;
