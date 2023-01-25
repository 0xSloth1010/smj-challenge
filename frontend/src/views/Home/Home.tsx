import { useCallback, useState } from 'react'

import { HardDrive } from 'react-feather'

import { Faq } from 'components/Faq'
import { getUrlWithSlug } from 'services/api'
import { useApp } from 'store/app/hooks'

export const Home = () => {
  const [url, setUrl] = useState('')
  const { history, getTinyUrl } = useApp()

  const handleGenerate = useCallback(() => {
    getTinyUrl(url)
  }, [url, getTinyUrl])

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex items-center space-x-2">
        <span className="text-3xl text-white">Tiny URL Generator</span>
      </div>

      <div className="flex space-x-2 w-full">
        <input
          className="p-2 w-full rounded-xl outline-none border border-solid border-white bg-gray-dark text-white"
          placeholder="Paste your long URL to shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="rounded-xl bg-orange px-4" onClick={handleGenerate}>
          Generate
        </button>
      </div>

      {history.length ? (
        <div className="flex flex-col w-full border border-solid border-gray-light border-opacity-50 rounded-xl">
          {history.map((item, index) => (
            <>
              <div
                key={item.slug}
                className="flex items-center justify-between p-4">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-cyan">{item.url}</span>
                </a>

                <a
                  href={getUrlWithSlug(item.slug)}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="text-cyan">{getUrlWithSlug(item.slug)}</span>
                </a>
              </div>
              {index !== history.length - 1 && (
                <div className="w-full h-[1px] bg-gray-light bg-opacity-50" />
              )}
            </>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col w-full border border-solid border-gray-light border-opacity-50 space-y-4 rounded-xl p-8">
          <HardDrive size={48} strokeWidth={1} color="#fff" />
          <span className="text-gray-light">No previous records</span>
        </div>
      )}
      <Faq />
    </div>
  )
}
