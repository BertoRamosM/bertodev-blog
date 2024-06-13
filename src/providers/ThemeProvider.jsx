'use client'
import { ThemeContext } from '@/app/context/ThemeContext';
import React, { useContext } from 'react'

const ThemeProvider = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}></div>
  )
}

export default ThemeProvider