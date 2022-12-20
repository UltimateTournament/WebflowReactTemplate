import { useEffect, useState } from "react"

export default function Hello() {

  const [cnt, setCnt] = useState(0)

  return (
    <button onClick={() => {
      setCnt(cnt+1)
    }}>Click me I am better {cnt}</button>
  )
}
