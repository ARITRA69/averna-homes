"use client";
import React, { useState } from "react";
import Parallax from "./Parallax";

type Field = {
  label: string;
  placeholder: string;
};

const fields: Field[] = [
  {
    label: "First name*",
    placeholder: "First name",
  },
  {
    label: "Last name*",
    placeholder: "Last name",
  },
  {
    label: "Your email*",
    placeholder: "eg. name@email.com",
  },
  {
    label: "Your phone*",
    placeholder: "eg. 0412 345 678",
  },
  {
    label: "Your block location*",
    placeholder: "eg. Applecross",
  },
];

const Footer = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="sticky bottom-0">
      {/* <Parallax offset={50}> */}
      <div className="h-full bg-neutral-950 w-full text-neutral-50">
        <div className="w-11/12 mx-auto md:py-10 h-full flex flex-col justify-between">
          <h1 className="text-5xl font-light py-6">Contact Us.</h1>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-20 xl:gap-x-80 h-full">
            <div className="w-full h-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 font-light">
                  {fields.map((field, index) => (
                    <div className="flex flex-col" key={index}>
                      <label>{field.label}</label>
                      <input
                        className="border-b w-full bg-transparent h-12 placeholder:text-xs placeholder:tracking-wider focus:outline-none"
                        placeholder={field.placeholder}
                        name={`input_${index}`}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col space-y-6 w-full">
                    <label>Your message*</label>
                    <textarea
                      className="border-b w-full bg-transparent md:h-24 placeholder:text-xs placeholder:tracking-wider focus:outline-none"
                      placeholder="Let's talk about yout dream home."
                    />
                  </div>
                  <button
                    className="uppercase h-max w-max text-lg py-2 px-6 rounded-full border"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full h-max space-y-10 md:space-y-24">
              <div className="flex items-start gap-x-20 xl:gap-x-40">
                <h3 className="text-xl hidden sm:block">CONTACT</h3>
                <p className="flex flex-col items-start text-sm md:text-lg">
                  <span>(08) 9373 3999</span>
                  <span>jamie@avernahomes.com.au</span>
                </p>
              </div>
              <div className="flex items-start gap-x-40">
                <h3 className="text-xl hidden sm:block">OFFICE</h3>
                <p className="flex flex-col items-start text-sm md:text-lg">
                  <span>Level 1, 54 Belgravia Street,</span>
                  <span>Belmont, WA 6104</span>
                </p>
              </div>
              <div className="flex items-start gap-x-40">
                <h3 className="text-xl hidden sm:block">SOCIAL</h3>
                <p className="flex flex-col items-start text-sm md:text-lg">
                  <span>Instagram</span>
                  <span>Facebook</span>
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-8xl py-6 tracking-tighter hidden">
            Averna Homes
          </h1>
          <h3 className="text-3xl font-light hidden md:block">
            Individual home builders.
          </h3>
        </div>
      </div>
      {/* </Parallax> */}
      <div className="w-full mx-auto py-3 text-center text-[10px] md:text-sm bg-neutral-50 text-neutral-950">
        © 2023 Averna Homes. All Rights Reserved. Site by Start Digital
      </div>
    </div>
  );
};

export default Footer;
