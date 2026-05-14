import { Turnstile } from '@marsidev/react-turnstile';
import React, { useState } from 'react';

import styles from './ContactModal.module.css';

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState('');

  const [turnstileToken, setTurnstileToken] =
    useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    setStatus('');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    setStatus('');

    if (!turnstileToken) {
      setStatus('Пройдіть CAPTCHA');

      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      data.append('name', formData.name);

      data.append('email', formData.email);

      data.append('message', formData.message);

      data.append(
        '_subject',
        'Нова заявка з React сайту',
      );

      data.append(
        'cf-turnstile-response',
        turnstileToken,
      );

      const response = await fetch(
        'https://formspree.io/f/mvzlnabn',
        {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (response.ok) {
        setStatus(
          'Повідомлення успішно відправлено ',
        );

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTurnstileToken('');
      } else {
        setStatus('Помилка відправки');
      }
    } catch (error) {
      setStatus('Помилка сервера');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={styles.openBtn}
        onClick={openModal}
      >
        Зв'язатися з нами
      </button>

      {isOpen && (
        <button
          type="button"
          className={styles.overlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeModal}
            >
              ×
            </button>

            <h2 className={styles.title}>
              Форма зворотного зв'язку
            </h2>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
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
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading
                  ? 'Відправка...'
                  : 'Відправити'}
              </button>

              {status && (
                <div className={styles.status}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </button>
      )}
    </>
  );
};