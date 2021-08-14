import React from 'react';
function Input({stacked, label, id, value, onChange, type, placeholder, border}) {
  return(
    <div className={`flex w-full ${(stacked) ? 'flex-col space-y-2': 'flex-row space-x-5 items-center justify-start'} `}>
      <label className={`${stacked ? '': 'pr-2'} font-base text-black w-1/2`} htmlFor={id}>{label}</label>
      <input placeholder={placeholder} className={`border py-1 ${border ? 'border-indigo-500': 'border-black'} font-light ${stacked ? 'h-9': 'h-7 w-3/4 '} rounded-md focus:outline-none pl-2 `} id={id} variant='stacked' value={value} onChange={onChange} type={type} ></input>
    </div>
  )
}

export default Input;