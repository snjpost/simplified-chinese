import type {Load} from "@sveltejs/kit"

interface Char {
  mandarin: string
  pinyin: string
  english: string
  radical: string
  components: string
  section: number
  unit: number
}

interface Word {
  mandarin: string
  pinyin: string
  english: string
}

export const load: Load = async ({fetch, setHeaders}) => {
  try {
    setHeaders({
      Accept: "*/*"
    })
    const responseCharacters = await fetch("../api/characters.json")
    const chars = (await responseCharacters.json()) as Array<Char>

    const responseWords = await fetch("../api/words.json")
    const words = (await responseWords.json()) as Array<Word>

    return {chars, words}
  } catch (exception) {
    console.error(exception)
    return {chars: [], words: []}
  }
}
