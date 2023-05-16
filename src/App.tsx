import { useState } from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { ApplicationFeeRange, CategoriesOfPrograms, Faq, Intakes, Logo, QualifyingExams, SchoolPhotos, TopFiveCourses, WorldRanking } from './pages'
import { Toggle } from './component/ui'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={`${theme} flex flex-col items-center justify-center w-full py-40 min-h-screen`}>

      <Toggle setTheme={setTheme} theme={theme} />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/application-fee-range" element={<ApplicationFeeRange />} />
        <Route path='/top-five-courses' element={<TopFiveCourses />} />
        <Route path="/world-ranking" element={<WorldRanking />} />
        <Route path='/logo' element={<Logo />} />
        <Route path="/intakes" element={<Intakes />} />
        <Route path="/school-photos" element={<SchoolPhotos />} />
        <Route path="/qualifying-exams" element={<QualifyingExams />} />
        <Route path="/categories-of-all-programs" element={<CategoriesOfPrograms />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App