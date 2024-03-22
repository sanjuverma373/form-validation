import React, { useState } from 'react'

const Foamsec = () => {
        const [count, setCount] = useState(0)
  return (
    <div className=' d-flex align-items-center  justify-content-center  bg-dark-subtle  min-vh-100 ' >
      <div className="pt-5  box">
        <div className='pb-4'><h1>Form Validation</h1></div>
    <form className=' d-flex flex-column align-items-center ' action="submit">
      <h4>Name:</h4>
      <input type="text" placeholder="name"/>
      <h4 className=' pt-3'>ph no.:</h4>
      <input type="text" placeholder="ph no."/>
      <h4 className=' pt-3'>password:</h4>
      <input type="password" placeholder="password"/>
      <h4 className=' pt-3'>confrom-password:</h4>
      <input type="password" placeholder="confrom-password"/>
    </form>
    <div className='d-flex flex-column align-items-center'><button className='mt-4'>Submit</button></div>
</div>
    </div>
  )
}

export default Foamsec
