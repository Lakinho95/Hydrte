import Header from '../components/layout/Header'
import Okvir from '../components/layout/Okvir'
import Box from '../components/layout/Info/Box'
import Glavno from '../components/layout/Glavno/Glavno'
import Navbar from '../components/layout/Navbar'
import Dosada from '../components/layout/Glavno/Dosada'
import Fifa from '../components/layout/Glavno/Fifa'
import Torba from '../components/layout/Glavno/Torba'
import Velicina from '../components/layout/Glavno/Velicine'
import Pitanja from '../components/layout/Glavno/Pitanja'
import Pozadina from '../components/layout/Pozadina'
import Misija from '../components/layout/Misija'
import { useEffect } from 'react'

export default function Home() {
  
  return (
    <div>
      <Okvir>
        <Navbar />
        <Glavno>
          <Dosada />
          <Fifa />
          <Torba />
          <Velicina />
          <Pitanja />
        </Glavno>
        <Pozadina />
        <Misija />
      </Okvir> 
    </div>
  )
}