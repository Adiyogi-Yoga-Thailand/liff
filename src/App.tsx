import liff from "@line/liff"
import { Routes, Route } from "@solidjs/router"

import { getLiffId } from "./lib/api"
import Home from "./Home"
import Register from "./Register"

export default () => {
  void (async () => {
    try {
      const liffId = await getLiffId()
      if (liffId === null) {
        throw new Error("LIFF ID is null")
      } else {
        await liff.init({ liffId })
        console.log(liff.id)
      }
    } catch (e) {
      console.log(e)
    }
  })()

  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Routes>
  )
}
