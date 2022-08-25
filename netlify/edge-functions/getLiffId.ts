import { Context } from "netlify:edge"
// import ky from "https://esm.sh/ky@0.31.1"

export default (request: Request, context: Context) => {
  return new Response(JSON.stringify({ LIFF_ID: "1657274546-ZWA6kAAa" }))
}
