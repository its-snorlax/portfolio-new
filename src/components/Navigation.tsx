<nav className="flex justify-center items-center w-full">
  <ul className="flex space-x-8 md:space-x-12">
    {[
      { name: 'Skills', href: '#skills' },
      { name: 'Education', href: '#education' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' }
    ].map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</nav> 