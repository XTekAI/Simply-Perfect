import type { Metadata } from 'next'
import Privacidad from '../../src/PagePrivacidad'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Simply Perfect Honduras',
  description: 'Política de privacidad de Simply Perfect Honduras.',
}

export default function PrivacidadPage() {
  return <Privacidad />
}
