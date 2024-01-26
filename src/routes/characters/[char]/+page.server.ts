import {error} from "@sveltejs/kit"
import type {PageServerLoad} from "../[char]/$types"

export const load: PageServerLoad = async function ({params, parent}) {
  try {
    const data = await parent()
    const char = data.chars.find((c) => c.mandarin === params.char)
    if (!char) throw error(404)
    return {char}
  } catch (exception) {
    throw error(404)
  }
}
