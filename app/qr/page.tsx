import type { Metadata } from 'next'
import QRLinktree from '../../src/QRLinktree'

export const metadata: Metadata = {
  title: 'Simply Perfect | Links',
  description: 'Todos nuestros links en un solo lugar — Simply Perfect Honduras',
}

export default function QRPage() {
  return <QRLinktree />
}
