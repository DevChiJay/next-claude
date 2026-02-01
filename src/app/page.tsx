"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <nav className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="text-2xl font-bold text-white animate-fade-in">
            Logo
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Home
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              About
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6 pt-16">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Animated background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse-slower rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 h-96 w-96 animate-pulse-slowest rounded-full bg-pink-500/20 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="mb-6 animate-slide-up text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              Welcome to
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                The Future
              </span>
            </h1>
            <p className="mb-10 animate-slide-up-delay text-xl text-white/70 md:text-2xl" style={{ animationDelay: "0.2s" }}>
              Experience the next generation of web development
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center animate-slide-up-delay" style={{ animationDelay: "0.4s" }}>
              <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute left-10 top-1/4 h-4 w-4 animate-float rounded-full bg-purple-400/50" />
          <div className="absolute right-20 top-1/3 h-6 w-6 animate-float-delay rounded-full bg-pink-400/50" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 right-10 h-5 w-5 animate-float-delay rounded-full bg-blue-400/50" style={{ animationDelay: "2s" }} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-white/50">
              © 2024 Your Company. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-white/50 transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="text-white/50 transition-colors hover:text-white">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
