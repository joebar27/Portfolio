import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import Navbar from "../layout/Navbar";

import "../App.css";
import "./style/Contact.css";

init("user_g91W5jE7P5SBY4F5M4X76");

function Contact() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById("not-mail");
        let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regexMail)) {
            mail.style.display = "none";
            return true;
        } else {
            mail.style.display = "block";
            mail.style.animation = "dongle 1s";
            setInterval(() => {
                mail.style.display = "none";
            }, 2000);
            return false;
        }
    };

    const failMessage = (msg) => {
        let formMess = document.querySelector(".form-message");

        formMess.innerHTML = msg;
        formMess.style.opacity = "1";
        formMess.style.background = "#272b30";

        document.getElementById("name").classList.add("error");
        document.getElementById("message").classList.add("error");
        document.getElementById("email").classList.add("error");
    };

    const succesMessage = () => {
        let formMess = document.querySelector(".form-message");

        formMess.innerHTML =
            "Message envoyé ! Je vous recontacte dès que possible";
        formMess.style.opacity = "1";
        formMess.style.background = "#5cffee";

        document.getElementById("name").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        document.getElementById("email").classList.remove("error");

        setTimeout(() => {
            formMess.style.opacity = "0";
        }, 5000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && isEmail() && message) {
            sendFeedback("template_igiigwx", {
                name,
                company,
                phone,
                email,
                message,
            });
        } else {
            failMessage("Merci de remplir correctement les champs requis *");
        }
    };

    const sendFeedback = (templateId, variables) => {
        emailjs
            .send("Gmail", templateId, variables)
            .then((res) => {
                succesMessage();
                setName("");
                setCompany("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {
                failMessage("Une erreur s'est produite, veuillez réessayer.");
            });
    };

    return (
        <div id="contact" className="d-flex flex-wrap justify-content-center col-12 color-2">
            <Navbar />

            <div className="d-flex col-10 col-lg-6 justify-content-center mb-3">
                
                <form className="d-flex flex-wrap justify-content-center contact-form">
                    <h2 className="d-flex justify-content-center col-6 mt-2 mt-lg-5">
                        Contactez-moi
                    </h2>
                    <div className="d-flex flex-wrap form-content">
                        <input className="d-flex col-10 p-2"
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="nom *"
                            value={name}
                            autoComplete="off"
                        />
                        <input className="d-flex col-10 p-2"
                            type="text"
                            id="company"
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="société"
                            value={company}
                        />
                        <input className="d-flex col-10 p-2"
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="téléphone"
                            value={phone}
                        />
                        <div className="email-content d-flex col-12">
                            <label id="not-mail">Email non valide</label>
                            <input className="d-flex col-12 p-2"
                                type="mail"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email *"
                                value={email}
                                autoComplete="off"
                            />
                        </div>
                        <textarea className="d-flex col-10 p-2"
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="message *"
                            value={message}
                        />
                    </div>
                    <input
                        className="button p-0 col-12"
                        type="button"
                        value="Envoyer"
                        onClick={handleSubmit}
                    />
                    <div className="d-flex flex-wrap justify-content-center align-content-center">
                        <p className="d-flex form-message m-0 p-3"></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
