import { Linkedin, Twitter } from 'react-feather'

import logo from 'assets/images/logo.svg'

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-32">
      <img src={logo} alt="logo" />
      <div className="flex items-center space-x-4">
        <a
          href="https://twitter.com/realsupermojo"
          target="_blank"
          rel="noopener noreferrer">
          <Twitter strokeWidth={1} color="#fff" />
        </a>
        <a
          href="https://www.linkedin.com/company/supermojo/"
          target="_blank"
          rel="noopener noreferrer">
          <Linkedin strokeWidth={1} color="#fff" />
        </a>
      </div>
    </div>
  )
}
