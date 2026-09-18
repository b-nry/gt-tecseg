/* Configuração da zxcvbn-ts */

import { ZxcvbnFactory } from '@zxcvbn-ts/core'
import {
  adjacencyGraphs,
  dictionary as commonDictionary,
} from '@zxcvbn-ts/language-common'
import {
  dictionary as portugueseDictionary,
  translations as portugueseTranslations,
} from '@zxcvbn-ts/language-pt-br'

export const zxcvbn = new ZxcvbnFactory({
  translations: portugueseTranslations,
  graphs: adjacencyGraphs,
  dictionary: {
    ...commonDictionary,
    ...portugueseDictionary,
  },
})
