import { useState } from "react";
import { useMemo } from "react";

export const CalculoPesadoApp = () => {
  
  
  const [show, setShow] = useState(true)
  const [numList, setNumList] = useState([2,3,4,5,6,7,8,9])

  const getCalculo = (numList) => useMemo(() =>{
    console.log("Calculando...")
    return numList.reduce((a,b) => a*b)
  }, [numList])
  
const addNumber = () => {

    setNumList([...numList, numList[numList.length - 1] + 1])

}

    return (
   <>
   <h2>Calculos</h2>
   <h4>El calculo es:{getCalculo(numList)} </h4>
   {show && <h6>Los numeros base son: {numList}</h6> }

   <button className="btn btn-info" onClick = {() => setShow(!show)}>{show ? 'Ocultar Calculo' : 'Mostrar Calculo'}</button>

   <button className="btn btn-danger" onClick = {() => addNumber() }>Agregar mas numeros</button>
   </>
  )
}
