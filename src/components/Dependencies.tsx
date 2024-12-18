const dependencies = [
  { name: 'react-native', version: '0.68.2', description: 'Framework for building native mobile apps' },
  { name: 'react-native-track-player', version: '2.0.0', description: 'Audio player library for React Native' },
  { name: 'react-redux', version: '7.2.6', description: 'State management library' },
  { name: 'redux-persist', version: '6.0.0', description: 'Persist and rehydrate Redux store' },
  { name: '@react-native-firebase/analytics', version: '12.0.0', description: 'Firebase analytics integration' },
  { name: '@react-native-firebase/app', version: '12.0.0', description: 'Firebase app configuration' },
  { name: '@react-native-firebase/firestore', version: '12.0.0', description: 'Firestore database integration' },
  { name: 'react-native-vector-icons', version: '9.1.0', description: 'Customizable icons for React Native' },
  { name: 'react-native-splash-screen', version: '3.2.0', description: 'Splash screen management' },
]

export default function Dependencies() {
  return (
    <section id="dependencies" className="py-20 px-4 bg-black-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Dependencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dependencies.map((dep) => (
            <div key={dep.name} className="bg-gray-800 p-6 rounded-lg border border-pink-500">
              <h3 className="text-xl font-semibold mb-2 text-pink-500">{dep.name}</h3>
              <p className="text-sm text-gray-400 mb-2">Version: {dep.version}</p>
              <p className="text-gray-300">{dep.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

