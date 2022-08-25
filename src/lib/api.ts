import ky, { KyResponse } from "ky"

const val = {
  HOST: `${window.location.protocol}://${window.location.hostname}`,
  EDGE_FUCTIONS: {
    FUCTIONS_PATH: "/.netlify/functions",
    getLiffId: "/edge/getLiffId",
  },
}

async function callApiFunction<T>(endpint: string): Promise<[KyResponse, T]> {
  const response = await ky.get(val.HOST + val.EDGE_FUCTIONS.FUCTIONS_PATH + endpint)
  if (response.ok) {
    return [response, await response.json<T>()]
  } else {
    return [response, null]
  }
}

async function getLiffId(): Promise<string> {
  interface ILiffIdJson {
    LIFF_ID: string
  }
  const [, json] = await callApiFunction<ILiffIdJson>(val.EDGE_FUCTIONS.getLiffId)
  if (json !== null) {
    return json.LIFF_ID
  } else {
    return null
  }
}

export { val, getLiffId }
