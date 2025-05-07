"use client";

import { useActionState } from "react";
import { signup } from "../actions/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Checkboxes from "./checkbox";
import BasicRating from "./rating";

interface CustomModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function CustomModal({
  showModal,
  setShowModal,
}: CustomModalProps) {
  const [state, action, pending] = useActionState(signup, undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const handleSubmit = () => {
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    toast.info("register success!!!");
    console.log(">>>> check, ", name, email, password);
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassWord("");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            {/* Modal Header */}
            <div className="px-4 py-2 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Register</h3>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={handleClose}
              >
                ×××
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <form action={action}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {state?.errors?.name && (
                    <p className="mt-2 text-sm text-red-600">
                      {state.errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {state?.errors?.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {state.errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    type="password"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {state?.errors?.password && (
                    <div className="mt-2 text-sm text-red-600">
                      <p>Password must:</p>
                      <ul className="list-disc pl-5">
                        {state.errors.password.map((error) => (
                          <li key={error}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleSubmit()}
                  disabled={pending}
                  type="submit"
                  className={`w-full px-4 py-2 text-white font-semibold bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                    pending ? "bg-gray-300 cursor-not-allowed" : ""
                  }`}
                >
                  Register
                </button>
              </form>
            </div>
            <Checkboxes />
            <BasicRating />
            {/* Modal Footer */}
            {/* <div className="px-4 py-2 border-t border-gray-200 flex justify-end gap-2"></div> */}
          </div>
        </div>
      )}
    </>
  );
}
