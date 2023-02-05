import React from 'react'
import {useNavigate} from 'react-router-dom'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe, isApiKey}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
            Surprise Me
          </button>
        )}
        {isApiKey && (
          <button type='button' onClick={() => navigate('/tutorial')} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
            Get my API Key
          </button>
        )}
      </div>
      {isApiKey && (
          <p className='inline-block text-xs font-small text-gray-500'>Your API Key won't be stored in any database, this api key is for the free service</p>
      )}
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField