'use client'

import { Base64 } from "js-base64";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Page() {
  const {phoneNumberBase64} = useParams()
  const [isShow, setIsShow] = useState(false)
  const phoneNumber = Base64.decode(phoneNumberBase64)

  useEffect(() => {
    if(confirm('Do you like to get number?')){
      setIsShow(true)
    } else {
      window.close()
    }
  }, [])

    return (
      isShow && <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    )
  }