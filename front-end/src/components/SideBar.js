import React, { useState, useContext, useEffect } from "react";
import {
  MdClose,
  MdMenu,
  MdAdd,
  MdOutlineVpnKey,
  MdAdminPanelSettings,
} from "react-icons/md";

import { ChatContext } from "../context/chatContext";
import DarkMode from "./DarkMode";
import Modal from "./Modal";
import Setting from "./Setting";
import { GiArtificialHive } from "react-icons/gi";
import Admin from "./Admin";
import { Link } from "react-router-dom";

/**
 * A sidebar component that displays a list of nav items and a toggle
 * for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [clearMessages] = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const clearChat = () => clearMessages();

  return (
    <section className={` ${open ? "w-64" : "w-16"} sidebar`}>
      <div className="sidebar__app-bar flex justify-between">
        <div
          className={`sidebar__app-logo ${
            !open && "scale-0 hidden"
          } flex gap-2`}
        >
          <GiArtificialHive style={{ fontSize: 30 }} />
          <h1 className={`sidebar__app-title ${!open && "scale-0 hidden"}`}>
            My AI
          </h1>
        </div>

        <div className={`sidebar__btn-close`} onClick={() => setOpen(!open)}>
          {open ? (
            <MdClose className="sidebar__btn-icon" />
          ) : (
            <MdMenu className="sidebar__btn-icon" />
          )}
        </div>
      </div>
      <div className="nav">
        <span
          className="border nav__item border-neutral-600"
          onClick={clearChat}
        >
          <div className="nav__icons">
            <MdAdd />
          </div>
          <h1 className={`${!open && "hidden"}`}>New chat</h1>
        </span>
      </div>

      <div className="nav__bottom">
        <div onClick={() => <Admin />} className="nav">
          <span htmlFor="setting-modal" className="nav__item">
            <div className="nav__icons ">
              <MdAdminPanelSettings />
            </div>
            <h1>
              <Link to="/admin">Admin</Link>
            </h1>
          </span>
        </div>
        <DarkMode open={open} />
        <div onClick={() => setModalOpen(true)} className="nav">
          <span htmlFor="setting-modal" className="nav__item">
            <div className="nav__icons">
              <MdOutlineVpnKey />
            </div>
            <h1 className={`${!open && "hidden"}`}>OpenAI Key</h1>
          </span>
        </div>
      </div>
      <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
    </section>
  );
};

export default SideBar;
