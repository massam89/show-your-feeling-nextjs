'use client'
import { Base64 } from "js-base64";
import { useParams } from "next/navigation"
import { useEffect } from "react";

export default function Page() {
  const {phoneNumberBase64} = useParams()
  const phoneNumber = Base64.decode(phoneNumberBase64)

  useEffect(() => {
    if(confirm('Do you like to get number?')){
      window.location.href = `tel:${phoneNumber}`
    } else {
      alert('Good luck!')
    }
  }, [])

    return (
      <></>
    )
  }