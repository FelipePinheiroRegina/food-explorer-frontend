import { FaCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from "react-icons/md"

import { Container, SelectBox, OptionsContainer, Option } from "./styles.js"

import { useState } from 'react'

export function SelectStatus({ isAdmin, statusValue, Order, updateStatus}){
  const options = [
    { value: 'Pending',   iconClass: 'Pending'   },
    { value: 'Preparing', iconClass: 'Preparing' },
    { value: 'Delivered', iconClass: 'Delivered' },
  ]

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false)
    updateStatus(Order.code, option.value)
  }

  const handleOpenIfAdmin = () => {
    if(!isAdmin) return

    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <SelectBox onClick={handleOpenIfAdmin} $isAdmin={isAdmin}>
        <div className='box-inline'>
            <FaCircle size={8} className={statusValue} />
            {statusValue}
        </div>
        
        {isAdmin === true && <MdKeyboardArrowDown cursor="pointer" size={24}/>}
      </SelectBox>

      <OptionsContainer open={isOpen}>
        {options.map(option => (
          <Option key={option.value} onClick={() => handleOptionClick(option)}>
            <FaCircle className={option.iconClass}  size={8}/>
            {option.value}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  )
}

