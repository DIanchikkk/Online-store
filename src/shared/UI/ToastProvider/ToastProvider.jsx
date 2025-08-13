// ToastProvider.jsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // базовые стили библиотеки
import './ToastProvider.css'; // твои кастомные стили

export function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnHover={false}
      draggable={false}
      theme="colored"
    />
  );
}
