'use client'
import { Base64 } from "js-base64";
import { useParams } from "next/navigation"
import { useEffect, useRef } from "react";

export default function Page() {
  const linkRef = useRef()
  const {phoneNumberBase64} = useParams()
  const phoneNumber = Base64.decode(phoneNumberBase64)

  useEffect(() => {
    if(confirm('Do you like to get number?')){
      linkRef.current.click()
    } else {
      alert('Good luck!')
    }
  }, [])

    return (
      <a style={{ visibility: 'hidden' }} ref={linkRef} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    )
  }