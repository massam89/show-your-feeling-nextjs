'use client'
import { Base64 } from "js-base64";
import { useParams } from "next/navigation"
import { useEffect } from "react";

export default function Page() {
  const {phoneNumberBase64} = useParams()
  const phoneNumber = Base64.decode(phoneNumberBase64)

  useEffect(() => {
    if(confirm('Do you like to get number?')){
      const phoneLink = document.createElement('a');
      phoneLink.href = `tel:${phoneNumber}`;
      document.body.appendChild(phoneLink);
      phoneLink.click();
      document.body.removeChild(phoneLink);
    } else {
      alert('Good luck!')
    }
  }, [])

    return (
      <></>
    )
  }