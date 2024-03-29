import type {LayoutServerLoad} from "./$types"

export const load: LayoutServerLoad = async ({parent}) => {
  try {
    const data = await parent()
    const {chars} = data
    const titles = chars.map((c) => c.mandarin)
    return {titles}
  } catch (exception) {
    console.error(exception)
    return {titles: []}
  }
}
