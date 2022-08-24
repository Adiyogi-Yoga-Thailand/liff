import liff from "@line/liff"
import { Routes, Route } from "@solidjs/router"

import Home from "./Home"
import Register from "./Register"

export default async () => {
  await liff.init({
    liffId: process.env.LIFF_ID, // Use own liffId
  })
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Routes>
  )
}
