import React, { useState } from 'react';
import { Container } from "./styles/container";
import Lista from "./components/Lista";
import InsertField from "./components/InsertField";
import Display from "./components/Display";

function App() {
  const [zetas, setZetas] = useState([])
  const getZeta = () => {
      setZetas([zetaLogic(), ...zetas])
  }
  const zetaLogic = () => {
      let number = Number(document.getElementById('number').value);
      let fibonacciSequence = [1, 1];
      let pos = 1;
      let firstNumber = null;
      let secondNumber = null;
      while (true){  
          firstNumber = fibonacciSequence[pos-1];
          secondNumber = fibonacciSequence[pos];
          if(firstNumber + secondNumber < number){
              let sum = Number(firstNumber + secondNumber);
              fibonacciSequence.push(sum);
              pos ++;
          } else break;
      } 
      let count = 0;
      let curSeq = [];
      for(let i = fibonacciSequence.length - 1; i>=0; i--){
          let curNumber = fibonacciSequence[i];
          if(count + curNumber <= number){
              count += curNumber;
              curSeq.push(curNumber);
          }
          if(count === number){
              return {number: number, zeta: curSeq.length, nums: curSeq};
          }
      }
  }
  return (
    <div>
      <Container>
        <InsertField getZeta={getZeta}/>
        <Display zeta={zetas[0]} />  
      </Container>
      <Container id="content-top">
        <Lista zetas={zetas} />    
      </Container>
    </div>
  );
}

export default App;
