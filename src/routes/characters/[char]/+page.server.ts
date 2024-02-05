import {error} from "@sveltejs/kit"
import type {PageServerLoad} from "../[char]/$types"

export const load: PageServerLoad = async function ({params, parent}) {
  try {
    const data = await parent()
    const char = data.chars.find((c) => c.mandarin === params.char)
    if (!char) throw error(404)

    const components = `${char.radical}${char.components}`
    const charComponents = components.split("").map((component) => {
      const char = data.chars.find((char) => char.mandarin === component)
      return char ?? component
    })
    return {char, charComponents}
  } catch (exception) {
    throw error(404)
  }
}
