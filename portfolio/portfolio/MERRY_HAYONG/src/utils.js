export const getImageUrl = (path) =>
 new URL(`../assets/${path}`, import.meta.url).href;