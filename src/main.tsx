import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { AppRouter } from './router/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AppProvider>
)
