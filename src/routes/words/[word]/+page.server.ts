import {error} from "@sveltejs/kit"
import type {PageServerLoad} from "./$types"

export const load: PageServerLoad = async function ({params, parent}) {
  try {
    const data = await parent()
    const word = data.words.find((c) => c.mandarin === params.word)
    if (!word) throw error(404)

    const chars = word.mandarin.split("").map((c) => {
      const char = data.chars.find((char) => char.mandarin === c)
      return char ?? c
    })
    return {word, chars}
  } catch (exception) {
    throw error(404)
  }
}
