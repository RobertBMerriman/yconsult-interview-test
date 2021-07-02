import { GenericStyleSheet, Styles } from './types'

export const createSharedStyles: GenericStyleSheet = <T>(styles: Styles<T>) =>
  styles
