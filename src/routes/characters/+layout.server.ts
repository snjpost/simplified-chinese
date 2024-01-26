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

export const load: Load = async ({fetch, setHeaders}) => {
  try {
    setHeaders({
      Accept: "text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8"
    })
    const response = await fetch("../api/characters.json")
    const chars = (await response.json()) as Array<Char>
    const titles = chars.map((c) => c.mandarin)
    return {chars, titles}
  } catch (exception) {
    console.error(exception)
    return {chars: [], titles: []}
  }
}
