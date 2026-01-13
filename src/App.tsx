import { Gem, Shirt, ExternalLink } from 'lucide-react'

const crms = [
  {
    id: 1,
    name: 'Sourced Jewellers',
    description: 'Jewellery inventory, sales & customer management',
    url: 'https://sourced-jewellers.vercel.app',
    icon: Gem,
    gradient: 'from-amber-500/20 to-yellow-600/20',
    iconColor: 'text-amber-400',
  },
  {
    id: 2,
    name: 'Sourced Clothing',
    description: 'Clothing store inventory, POS & reporting',
    url: 'https://sourced-clothing.vercel.app',
    icon: Shirt,
    gradient: 'from-primary/20 to-primary-light/20',
    iconColor: 'text-primary',
  },
]

function App() {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="pt-8 pb-4 text-center">
        <img
          src="/new-logo.png"
          alt="Sourced"
          className="h-20 md:h-[125px] mx-auto mb-2"
        />
        <p className="text-gray-400 text-lg">Select CRM to continue</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
          {crms.map((crm) => {
            const IconComponent = crm.icon
            return (
              <a
                key={crm.id}
                href={crm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="crm-card group"
              >
                <div className={`
                  relative p-8 rounded-2xl border border-border bg-card
                  hover:border-primary/50 transition-all duration-300
                  animated-border
                `}>
                  {/* Corner dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/70 pulse-dot" />

                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${crm.gradient}
                    flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className={`w-8 h-8 ${crm.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                    {crm.name}
                    <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {crm.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Open CRM</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Background glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </a>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sourced. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
