"use client"

import { Base64 } from "js-base64";
import { useState } from "react";
import { validatePhone } from "./utils/validatePhone";

export default function Home() {
  const [phoneNumberWithURLBase64, setPhoneNumberWithURLBase64] = useState('')

  const generateBase64 = (e) => {
    e.preventDefault()
    const phoneNumber = e.target.phoneNumber.value

    const phoneNumberBase64 = Base64.encodeURI(phoneNumber)

    if(validatePhone(phoneNumber)){
      setPhoneNumberWithURLBase64(Base64.encode(`${window.location.host}/${phoneNumberBase64}`))
    } else {
      alert('The phone number is not valid!')
    }
  }

  return (
    <main>
      <h1>NextJS App</h1>
      <form onSubmit={generateBase64}>
      <h2>Get Started</h2>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" name="phoneNumber" id="phoneNumber"/>
        <button type="submit">Generate Code</button>
      </form>

      <p>{phoneNumberWithURLBase64}</p>
    </main>
  )
}
