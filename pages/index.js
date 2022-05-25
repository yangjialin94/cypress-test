import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">
        <a id="about">About</a>
      </Link>
    </nav>
  )
}
