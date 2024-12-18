
export default function Hero() {
  return (
    <section className=" px-4">
      <div className=" mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-500">Biku Radio</h1>
          <p className="text-xl mb-6">Your ultimate React Native radio streaming application</p>
          <p className="mb-8">Experience seamless radio streaming with genre selection, artist-based exploration, favorites management, and trending stations.</p>
          <a href="#" className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors">
            Download Now
          </a>
        </div>
        <div className="md:w-1/2">
        <video src="https://github.com/user-attachments/assets/ef0c4a56-7fdb-4e8b-8502-19719858fd61" controls width={300}       
            className="mx-auto"></video>
        </div>
      </div>
    </section>
  )
}

