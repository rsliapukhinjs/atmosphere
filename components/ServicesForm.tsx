"use client";

import React from "react";
import { useToast } from "@chakra-ui/react";

const ServicesForm = () => {
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
      className="p-8 flex flex-col lg:flex-row items-center gap-4 rounded-lg border-2 text-sky-50 bg-sky-800 w-full xl:w-2/3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 w-full">
        <select
          name="service"
          id="service"
          className="opacity-70 text-sky-800 text-xs lg:text-lg"
          placeholder="Вид работ"
          required
        >
          <option hidden>Вид услуг</option>
          <option value="Инвентаризация и нормативы ПДВ">
            Инвентаризация и нормативы ПДВ
          </option>
          <option value="Вентсистемы и ГОУ">Вентсистемы и ГОУ</option>
          <option value="Проектная документация">Проектная документация</option>
          <option value="Расчет СЗЗ, шума, НМУ">Расчет СЗЗ, шума, НМУ</option>
          <option value="Обращение с отходами">Обращение с отходами</option>
          <option value="Измерения в обасти ООС">Измерения в обасти ООС</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          id="phone"
          className="opacity-70 text-sky-800 text-xs lg:text-lg"
          name="phone"
          placeholder="Телефон"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs lg:text-lg"
      >
        Заказать
      </button>
    </form>
  );
};

export default ServicesForm;
