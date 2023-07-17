import React, {useState} from 'react'
import picture from "../assets/icon-arrow.png"
import '/Users/decagn/Desktop/age-calculator-vite/age-calculator/age-calculator/src/components/body.css'

export default function Body() {

    const [age, setAge] = useState({years: "--", months: "--", days: "--"})

    const [right, setRight] = useState(true)

    
    function errorFunc() {
      const today = new Date();
      const thisYear = today.getFullYear();
      const thisMonth = today.getMonth()
      const { years } = age;
      const { months }= age;
    
      if (parseInt(years) > thisYear) {
        setRight(false);
      } else {
        setRight(true);
      }

      if (parseInt(months) > thisMonth){
        setRight(false);
      } else {
        setRight(true);
      }
    }
    
    
    const year = age.years
    const month = age.months
    const day = age.days

    const [inputDay, setInputDay] = useState('')
    const [inputMonth, setInputMonth] = useState('')
    const [inputYear, setInputYear] = useState('')

    function calculateAge() {
        const today = new Date
        const birthDate = new Date(inputYear, inputMonth - 1, inputDay);
    const yearsDiff = today.getFullYear() - birthDate.getFullYear();
    const monthsDiff = today.getMonth() - birthDate.getMonth();
    const daysDiff = today.getDate() - birthDate.getDate();

    let adjustedYears = yearsDiff;
    let adjustedMonths = monthsDiff;
    let adjustedDays = daysDiff;
    if (daysDiff < 0) {
        adjustedMonths--;
        adjustedDays += getLastDayOfMonth(birthDate.getMonth(), birthDate.getFullYear());

      }

      if (monthsDiff < 0) {
        adjustedYears--;
        adjustedMonths += 12;
      }
      setAge({ years: adjustedYears, months: adjustedMonths, days: adjustedDays });
      errorFunc();
     
    }
    function getLastDayOfMonth(month, year) {
        const date = new Date(year, month + 1, 0);
        return date.getDate();
      }


  return (
    <div className='body'>
    <div className='input'>
     <label>DAY</label> 
     <input type='text' placeholder='DD' value={inputDay} onChange={e=>setInputDay(e.target.value)}  className={right ? "correct": "error"}></input>
     </div>
     <div className='input'>
     <label>MONTH</label> 
     <input type='text' placeholder='MM' value={inputMonth} onChange={e=>setInputMonth(e.target.value)} className={right ? "correct": "error"}></input>
     </div>
     <div className='input'>
     <label>YEAR</label> 
     <input type='text' placeholder='YYYY' value={inputYear} onChange={e=>setInputYear(e.target.value)} className={right ? "correct": "error"}></input>
     </div>
     <button onClick={calculateAge}>CALCULATE</button>
    
     <div className='arrow-line'>
     <div className='hr'></div>
    <div className='img'><img src={picture}></img></div>
     </div>
<h1><span className='span'>{year}</span> years</h1>
<h1><span className='span'>{month}</span> months</h1>
<h1><span className='span'>{day}</span> days</h1>
    </div>
  )
}
