import { TextStyle, ViewStyle } from 'react-native'

export type Size = 's' | 'm' | 'l'
export type ButtonSize = Size | 'fullWidth'

export type Styles<T> = {
  [K in keyof T]: ViewStyle | TextStyle
}
export type GenericStyleSheet = <T>(et: Styles<T>) => Styles<T>
