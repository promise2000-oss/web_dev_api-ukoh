export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Edward Okigbo. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="mailto:edwardokigbo@gmail.com" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/edwardokigbo" target="_blank" rel="noreferrer" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/edwardokigbo" target="_blank" rel="noreferrer" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
            X
          </a>
        </div>
      </div>
    </footer>
  )
}
