import { FiClock, FiCheckCircle } from "react-icons/fi"
import { PiForkKnife } from "react-icons/pi"

import { Container } from "./styles.js"

import { useState, useEffect } from 'react' 

export function IconsPayment() {
    const [currentIcon, setCurrentIcon] = useState(0);

    const icons = [<FiClock/>, <FiCheckCircle/>, <PiForkKnife />];

    useEffect(() => {
        if (currentIcon < icons.length - 1) {
          const interval = setInterval(() => {
            setCurrentIcon((prevIcon) => prevIcon + 1);
          }, 3000);
    
          return () => clearInterval(interval)
        }
      }, [currentIcon, icons.length])
    
    return (
        <Container>
          {icons[currentIcon]}
          {icons[0] === icons[currentIcon] && <p>Waiting for payment at the cashier</p>}
          {icons[1] === icons[currentIcon] && <p>Approved payment</p>}
          {icons[2] === icons[currentIcon] && <p>Order delivered</p>}
        </Container>
    )
}
