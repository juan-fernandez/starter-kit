import * as module from 'module'

module.register('import-in-the-middle/hook.mjs', import.meta.url)