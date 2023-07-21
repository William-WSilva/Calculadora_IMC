import { useState, useEffect } from "react";
import styles from "./Calculadora.module.css";
// import logo from '../src/images/logoIMC.png';

const CalculadoraImc = () => {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultadoImc, setResultadoImc] = useState(0);
  
    // Função para calcular o IMC
    const calcularIMC = () => {
        if (altura > 0 && peso > 0) {
            const imc = peso / (altura * altura);
            setResultadoImc(imc.toFixed(2));
    
            // Condições para as respostas de acordo com o IMC calculado
            if (imc < 18.5) {
                setResultadoImc(`Abaixo do peso: ${imc.toFixed(2)}`);
            }
            else if (imc < 25) {
                setResultadoImc(`Peso saudável: ${imc.toFixed(2)}`);
            } 
            else if (imc < 30) {
                setResultadoImc(`Sobrepeso: ${imc.toFixed(2)}`);
            }
            else if (imc < 35) {
                setResultadoImc(`Obesidade Grau 1: ${imc.toFixed(2)}`);
            }
            else if (imc < 40) {
                setResultadoImc(`Obesidade Grau 2: ${imc.toFixed(2)}`);
            }
            else {
                setResultadoImc(`Obesidade Grau 3: ${imc.toFixed(2)}`);
            }
        }   
    }

    // useEffect para atualizar o resultado do IMC sempre que peso ou altura mudarem
    useEffect(() => {
      calcularIMC();
    }, [peso, altura]);

    return(
        <section className={styles.container}>
            <h1 className={styles.color_tema}>Calcular IMC</h1>
            <form className={styles.form}>
                
                <label htmlFor="altura"> Altura (ex: 1,50) </label>
                <input
                    type="number"
                    step=".01"
                    className={styles.input}
                    name="altura"
                    placeholder="Insira sua altura: 0,00"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />

                <label htmlFor="peso"> Peso (ex: 50,00) </label>
                <input
                    type="number"
                    step=".01"
                    className={styles.input}
                    name="peso"
                    placeholder="Insira o peso: 00,00"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />

                <h3 className={styles.color_tema}>Resultado IMC:</h3>
                <div className={styles.resultado}>
                    {resultadoImc}
                </div>
            </form>
            <img className={styles.logo} src='../src/images/logoIMC.png' alt="Logo imc"/>
        </section>
    )
}

export default CalculadoraImc;