import { RadioIcon, MusicalNoteIcon, HeartIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  { icon: RadioIcon, title: 'Live Streaming', description: 'Listen to your favorite radio stations live' },
  { icon: MusicalNoteIcon, title: 'Genre & Artist Selection', description: 'Explore stations by genre or artist' },
  { icon: HeartIcon, title: 'Favorites', description: 'Save and manage your favorite stations' },
  { icon: MagnifyingGlassIcon, title: 'Search', description: 'Find specific stations or content' },
  { icon: ChartBarIcon, title: 'Trending & Popular', description: 'Discover what\'s hot and trending' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-black-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-6 rounded-lg">
              <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

