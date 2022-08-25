import ky, { KyResponse } from "ky"

const val = {
  FUCTIONS_PATH: ".netlify/functions/",
  EDGE_FUCTIONS: {
    getLiffId: "edge/getLiffId",
  },
}

async function callApiFunction<T>(endpint: string, edge = true): Promise<[KyResponse, T]> {
  const response = await ky.get((edge ? "" : val.FUCTIONS_PATH) + endpint)
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
