"use client"
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./Toogle.module.css";

const Toogletheme = () => {
    const [theme, setTheme] = useState("light");

    //   useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", theme);
    //   }, []);


    // Load saved theme
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };



    return (
        <button className={styles.toggleBtn} onClick={toggleTheme}>
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default Toogletheme;
