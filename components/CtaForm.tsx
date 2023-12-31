"use client";

import React from "react";
import { useToast } from "@chakra-ui/react";

const CtaForm = () => {
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "d44f4053-26a5-40bd-afe9-7c81f9a10243");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      toast({
        title: "Данные отправлены!",
        description: "Мы свяжемся с вами в ближайшее время",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const toast = useToast();

  return (
    <form
      className="p-8 flex flex-col items-start gap-4 rounded-lg text-sm lg:text-md border-2 text-sky-50 bg-sky-800 w-full xl:w-2/3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name">Ваше имя:</label>
        <input
          type="text"
          id="name"
          className="opacity-70 text-sky-800"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="phone">Телефон:</label>
        <input
          type="text"
          id="phone"
          className="opacity-70 text-sky-800"
          name="phone"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="opacity-70 text-sky-800"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          className="opacity-70 text-sky-800"
          name="message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-block px-4 py-2 mt-2  bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg self-center"
      >
        Связаться
      </button>
    </form>
  );
};

export default CtaForm;
