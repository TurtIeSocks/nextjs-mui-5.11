import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../lib/emotionCache'
import { theme } from '../lib/theme'

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <main role="main">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
