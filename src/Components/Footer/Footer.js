import React from "react";
import "./footerStyles.scss";

export default function Footer() {
    return (
        <footer>
            {"Coded with "}
            <span className="love">&#9829;</span>
            {" by "}
            <a
                href="https://github.com/AbhishekJoshi07"
                rel="noreferrer"
                target="_blank"
                alt="about Abhishek Joshi"
                title="about Abhishek Joshi"
            >
                Abhishek Joshi
            </a>
        </footer>
    );
}
