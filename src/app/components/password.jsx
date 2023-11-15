'use client'
import { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import Input from '../components/input';
import Label from './inputlabel';


export default function Password({password}) {
    const [icon, setIcon] = useState(false)
    const toggleEye = () => {
        setIcon(!icon);
      };
  return (
    <>
        <div id="pass" className="flex flex-col gap-1 relative">
            <Label target="password" label={password}/>
            < Input class="contact-input" type={icon ? "text" : "password"} />
            <div onClick={toggleEye} className="absolute right-2 top-[50%]  text-lgray text-2xl cursor-pointer md:top-[55%]">
                {icon ? <ImEye /> : <ImEyeBlocked />} 
            </div>
        </div>
    </>
  )
}
