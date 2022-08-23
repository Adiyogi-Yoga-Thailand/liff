import { Routes, Route } from "@solidjs/router"

import Home from "./Home"
import Register from "./Register"

export default () => (
  <Routes>
    <Route path="/" component={Home} />
    <Route path="/register" component={Register} />
  </Routes>
)
