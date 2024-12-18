import Link from 'next/link'

export default function Header() {
  return (
    <header className="hidden sm:block bg-black-900 text-white px-4 sm:px-0 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          Biku Radio
        </Link>
        <nav className='hidden md:block'>
          <ul className="flex space-x-4 text-sm">
            <li><Link href="#features" className="hover:text-pink-500 transition-colors">Features</Link></li>
            <li><Link href="#screenshots" className="hover:text-pink-500 transition-colors">Screenshots</Link></li>
            <li><Link href="#dependencies" className="hover:text-pink-500 transition-colors">Dependencies</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

