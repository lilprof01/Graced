import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Home } from '@/Pages/Main'
import { ScrollToTop } from '@/Components/UI'
import { useEffect } from 'react'
import { useThemeStore } from './Stores'
const App = () => {
  const fetchTheme = useThemeStore((state) => state.fetchTheme);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <>
    
    <Toaster />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App