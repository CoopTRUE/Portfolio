// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

declare module '*&webp' {
  const src: string
  export default src
}

declare module '*&meta' {
  export const src: string // URL of the generated image
  export const width: number // Width of the image
  export const height: number // Height of the image
  export const format: string // Format of the generated image

  // The following options are the same as sharps input options
  export const space: string // Name of colour space interpretation
  export const channels: number // Number of bands e.g. 3 for sRGB, 4 for CMYK
  export const density: number //  Number of pixels per inch
  export const depth: string // Name of pixel depth format
  export const hasAlpha: boolean // presence of an alpha transparency channel
  export const hasProfile: boolean // presence of an embedded ICC profile
  export const isProgressive: boolean // indicating whether the image is interlaced using a progressive scan
}
