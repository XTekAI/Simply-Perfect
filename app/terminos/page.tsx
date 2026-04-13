import type { Metadata } from 'next'
import Terminos from '../../src/PageTerminos'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Simply Perfect Honduras',
  description: 'Términos y condiciones de Simply Perfect Honduras.',
}

export default function TerminosPage() {
  return <Terminos />
}
