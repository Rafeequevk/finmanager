import React, { useState } from 'react'


const Income = () => {

const [income, setIncome]= useState('')
const [total , setTotal] = useState (0)


const handleSubmit= (e)=>{
e.preventDefault()
setTotal (total+Number(income))
setIncome('')
}

  return (
    <div className="text-center mt-10">
    <h1 className="text-4xl font-bold">Income Page</h1>
    <h1>total Income = {total}</h1>
    <p className="mt-4">Here you can manage your Income!</p>

    <form onSubmit={handleSubmit}>
      <label>Enter Your Income</label>
      <input className=' border border-b-2 rounded w-max' type="number" value={income}  onChange={(e)=>{setIncome(e.target.value)}}/>
      <button type="submit" onClick={handleSubmit}>+ADD</button>
    </form>
  </div>
  )
}

export default Income