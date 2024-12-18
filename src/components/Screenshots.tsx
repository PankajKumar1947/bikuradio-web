
const screenshots = [
  {
    src: 'https://github.com/user-attachments/assets/71a94d59-4ef2-4a2d-a4e2-e5570cd2799f', 
    alt: 'Biku Radio Screenshot 1'
  },
  {
    src: 'https://github.com/user-attachments/assets/c5cb2501-91ad-47cd-9b40-1ad5fe281baa', 
    alt: 'Biku Radio Screenshot 2'
  },
  {
    src: 'https://github.com/user-attachments/assets/6fb2926d-ab27-429b-af4c-fda1c4c6a7b0', 
    alt: 'Biku Radio Screenshot 3'
  },
  {
    src: 'https://github.com/user-attachments/assets/19f8e711-543c-4a53-b908-0711373c56d5', 
    alt: 'Biku Radio Screenshot 4'
  },
  {
    src: 'https://github.com/user-attachments/assets/11fcdedd-7e2b-4dfd-be21-906192cf474d', 
    alt: 'Biku Radio Screenshot 5'
  },
  {
    src: 'https://github.com/user-attachments/assets/bdb4cc2a-7e16-4c92-9365-3041e34da587', 
    alt: 'Biku Radio Screenshot 6'
  },
  {
    src: 'https://github.com/user-attachments/assets/462e8549-0473-4d0f-8471-9ec50b359e7e', 
    alt: 'Biku Radio Screenshot 7'
  },
  {
    src: 'https://github.com/user-attachments/assets/a34b7424-736d-4993-b1e7-9e7ccdc42816', 
    alt: 'Biku Radio Screenshot 8'
  },
  {
    src: 'https://github.com/user-attachments/assets/f5b9aaea-8b93-456b-b182-62646f4ddeaf', 
    alt: 'Biku Radio Screenshot 9'
  },
  {
    src: 'https://github.com/user-attachments/assets/d0da0c3f-3061-4445-bd2e-5a00e1f3267d', 
    alt: 'Biku Radio Screenshot 10'
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">App Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative  overflow-hidden rounded-lg">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

