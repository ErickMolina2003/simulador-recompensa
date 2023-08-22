import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./HowItWorks.css";

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="how-it-works-content">
              <h2>¿Cómo funciona?</h2>
              <p style={{ color: "black" }}>
                El Simulador de Recompensas es una herramienta interactiva que
                te permite experimentar la emoción de abrir cajas virtuales para
                ganar diversos objetos. A medida que abres cajas, puedes obtener
                una variedad de objetos con diferentes probabilidades de
                ocurrencia. Veamos en detalle cómo funciona este emocionante
                simulador, la información de modelo y la explicación de
                probabilidad para obtener cada objeto:
              </p>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apertura de Cajas y Objetos
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Selecciona una caja virtual para abrir. Cada caja tiene
                        un costo de apertura. El costo de apertura de cada caja
                        se muestra en la parte inferior de la caja.
                      </li>
                      <li>
                        Cada caja contiene un conjunto de objetos con distintas
                        probabilidades de ocurrencia. Al abrir una caja, ganarás
                        uno de los objetos de acuerdo con su probabilidad.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Resumen de Objetos Obtenidos
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Después de abrir varias cajas, el simulador te
                        proporcionará un resumen de todos los objetos obtenidos
                        en cada intento. Puedes ver el resumen de cada caja en
                        la esquina superior izquierda de la caja.
                      </li>
                      <li>
                        Este resumen te mostrará la cantidad y tipo de objetos
                        ganados, permitiéndote evaluar tus resultados, y dandote
                        la cantidad de ganancia o perdidas de todo lo obtenido.
                      </li>
                      <li>
                        El resumen total te brinda una visión general de tus
                        ganancias y pérdidas a lo largo de tus intentos de abrir
                        cajas.
                      </li>
                      <li>
                        Puedes ver cómo se compara lo que has ganado con lo que
                        has invertido y determinar tu éxito en el simulador.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Proporción entre gastos e ingresos de cada caja
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Para evaluar tu rendimiento, el simulador calcula la
                        proporción entre gastos e ingresos en cada resumen.
                      </li>
                      <li>
                        Esta proporción se obtiene mediante la fórmula:
                        Proporción entre gastos e ingresos = (Total de gastos /
                        Total de ingresos) * 100.
                      </li>
                      <li>
                        Cuanto más cerca esté el resultado del 1%, mejor será tu
                        ganancia. Si el valor supera el 100%, significa pérdida.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <h4>Estadísiticas</h4>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Probabilidad de Objetos</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Los usuarios pueden calcular la probabilidad de obtener
                        todos los objetos de una caja dado un número de
                        intentos.
                      </li>
                      <li>
                        Establece la cantidad de objetos (Se espera un enter
                        luego de digitar la cantidad), el número de intentos y
                        la probabilidad de ocurrencia de cada objeto
                      </li>
                      <li>
                        Se utiliza la fórmula de la distribución binomial
                        negativa para obtener resultados precisos:
                        <ul>
                          <li>
                            <strong>
                              P(X ≥ 1 en n ensayos) = 1 - P(X = 0 en n ensayos)
                            </strong>{" "}
                            Donde P(X = 0 en n ensayos) se calcula utilizando la
                            fórmula de la distribución binomial negativa:{" "}
                            <strong>
                              P(X = k en n ensayos) = (n - 1 + k) C k * p^k * (1
                              - p)^(n - 1)
                            </strong>
                          </li>
                          <li>
                            Donde: <strong>k</strong> es el número de éxitos (en
                            este caso, k = 0 para calcular la probabilidad de
                            que no aparezca el objeto), <strong>n</strong> es el
                            número total de intentos y <strong>p</strong> es la
                            probabilidad de ocurrencia del objeto en un solo
                            intento
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Margen de Valor de una Caja
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Esta función permite simular el margen de valor entre lo
                        obtenido y lo retribuido de una caja.
                      </li>
                      <li>
                        Define el número de veces que se abrirá la caja, la
                        cantidad de objetos (Se espera un enter luego de digitar
                        la cantidad), el precio total de la caja y luego el
                        precio como la probabilidad de ocurrencia de cada
                        objeto.
                      </li>
                      <li>
                        El simulador calculará lo obtenido, retribuido y el
                        margen de ganancia o pérdida basado en la probabilidad
                        de ocurrencia y el precio de los objetos.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <h4>Información del modelo</h4>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Tipos de modelo del simulador
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>Dinámicos: </strong>El simulador representa
                        sistemas que evolucionan con el tiempo. A medida que el
                        usuario abre cajas y obtiene objetos, el sistema simula
                        cómo las decisiones de apertura de cajas afectan los
                        resultados.
                      </li>
                      <li>
                        <strong>Probabilístico (Estocástico):</strong> El
                        simulador utiliza componentes aleatorios en la
                        generación de objetos de recompensa. La probabilidad de
                        obtener diferentes objetos se basa en sus tasas de
                        ocurrencia, lo que implica una naturaleza probabilística
                        en la generación de resultados.
                      </li>
                      <li>
                        <strong>Discreto:</strong> Dado que el simulador se
                        centra en abrir cajas y obtener objetos en momentos
                        específicos, se podría considerar un modelo discreto.
                        Cada apertura de caja representa un evento separado, y
                        las decisiones de los usuarios se toman en momentos
                        discretos.
                      </li>
                      <li>
                        <strong>Descriptivo:</strong> El simulador se enfoca en
                        describir el comportamiento y los resultados del proceso
                        de apertura de cajas y obtención de objetos. No toma
                        decisiones por el usuario ni busca optimizar ningún
                        aspecto del proceso, sino que proporciona información
                        sobre cómo se desarrolla el sistema.
                      </li>
                      <li>
                        <strong>De Ciclo Abierto:</strong> En el simulador de
                        recompensas, las decisiones de los usuarios para abrir
                        cajas y obtener objetos no se ven afectadas por las
                        salidas anteriores. Cada apertura de caja es un evento
                        independiente, y las recompensas obtenidas en una
                        apertura no influyen en las decisiones futuras.
                      </li>
                      <li>
                        <strong>Matemáticos:</strong> Aunque el simulador
                        incorpora elementos visuales para representar las cajas
                        y los objetos, se basa en componentes matemáticos para
                        determinar las probabilidades de obtener diferentes
                        objetos y calcular las proporciones entre gastos e
                        ingresos.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
