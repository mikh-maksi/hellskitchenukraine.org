import { useState } from "react";

import { Turnstile } from "@marsidev/react-turnstile";

import "./ContactModal.css";

export default function ContactModal() {

  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [turnstileToken, setTurnstileToken] =
    useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("");

    if (!turnstileToken) {

      setStatus("Пройдіть CAPTCHA");

      return;
    }

    setLoading(true);

    try {

      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      data.append(
        "_subject",
        "Нова заявка з React сайту"
      );

      data.append(
        "cf-turnstile-response",
        turnstileToken
      );

      const response = await fetch(
        "https://formspree.io/f/mvzlnabn",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.ok) {

        setStatus(
          "Повідомлення успішно відправлено"
        );

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      } else {

        setStatus("Помилка відправки");

      }

    } catch (error) {

      setStatus("Помилка сервера");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      {/* Open button */}

      <button
        className="contact-open-btn"
        onClick={openModal}
      >
        Зв'язатися з нами
      </button>

      {/* Modal */}

      {isOpen && (

        <div
          className="contact-overlay"
          onClick={closeModal}
        >

          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="contact-close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <h2>Форма зворотного зв'язку</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Turnstile
                siteKey="0x4AAAAAADOu22s_fkUfXbNk"
                onSuccess={(token) => {
                  setTurnstileToken(token);
                }}
              />

              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Відправка..."
                  : "Відправити"}
              </button>

              {status && (
                <div className="contact-status">
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>
      )}

    </>
  );
}