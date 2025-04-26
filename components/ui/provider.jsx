'use client'
import { Provider } from "@/components/ui/provider"
import { defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <Provider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </Provider>
  )
}
