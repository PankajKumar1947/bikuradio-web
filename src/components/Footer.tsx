export default function Footer() {
  return (
    <footer className="bg-black-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Biku Radio. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="text-pink-500 hover:underline">Privacy Policy</a>
          {' | '}
          <a href="#" className="text-pink-500 hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

