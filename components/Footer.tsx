export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">Sam Lappan</p>
            <p className="mt-1 text-sm text-gray-600">
              AI Web Developer. I turn manual processes into simple tools.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a href="mailto:lappansam001@gmail.com" className="text-gray-700 transition-colors hover:text-blue-600">lappansam001@gmail.com</a>
            <a href="tel:+61401443188" className="text-gray-700 transition-colors hover:text-blue-600">0401 443 188</a>
            <div className="mt-2 flex gap-4">
              <a href="https://www.linkedin.com/in/sam-lappan-325023242/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 transition-opacity hover:opacity-70">LinkedIn</a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-400">© {new Date().getFullYear()} Sam Lappan. Built with Next.js.</p>
      </div>
    </footer>
  );
}