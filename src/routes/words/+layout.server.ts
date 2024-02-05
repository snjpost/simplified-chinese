import type {LayoutServerLoad} from "./$types"

export const load: LayoutServerLoad = async ({parent}) => {
  try {
    const data = await parent()
    const {words} = data
    const titles = words.map((w) => w.mandarin)
    return {titles}
  } catch (exception) {
    console.error(exception)
    return {titles: []}
  }
}
