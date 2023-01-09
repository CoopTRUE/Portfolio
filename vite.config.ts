import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import svg from '@poppanator/sveltekit-svg'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [sveltekit(), imagetools(), svg()],
}

export default config
