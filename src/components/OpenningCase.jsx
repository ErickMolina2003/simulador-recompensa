import './OpenningCase.css';
import { Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { SummaryModal } from './SummaryModal';

export function OpenningCase(objetos) {
  const [img, setImage] = useState({});
  const [objetoObtenido, setObjetoObtenido] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    objetos.objetos.sort(function (a, b) {
      return b.probabilidad - a.probabilidad;
    });

    setImage({
      blue: `<p id="0">${objetos.objetos[0]?.nombre}<p/><p>L ${objetos.objetos[0]?.precio}</p><p>${objetos.objetos[0]?.probabilidad}%</p>`,
      purple: `<p id="1">${objetos.objetos[1]?.nombre}<p/><p>L ${objetos.objetos[1]?.precio}</p><p>${objetos.objetos[1]?.probabilidad}%</p>`,
      pink: `<p id="2">${objetos.objetos[2]?.nombre}<p/><p>L ${objetos.objetos[2]?.precio}</p><p>${objetos.objetos[2]?.probabilidad}%</p>`,
      red: `<p id="3">${objetos.objetos[3]?.nombre}<p/><p>L ${objetos.objetos[3]?.precio}</p><p>${objetos.objetos[3]?.probabilidad}%</p>`,
      yellow: `<p id="4">${objetos.objetos[4]?.nombre}<p/><p>L ${objetos.objetos[4]?.precio}</p><p>${objetos.objetos[4]?.probabilidad}%</p>`,
    });
  }, [objetos]);

  function animateMarginLeft(element, targetMargin, duration, callback) {
    var startMargin = parseInt(getComputedStyle(element).marginLeft);
    var startTime = null;

    function easeInOutBack(t) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return t < 0.5
        ? (Math.pow(2 * t, 2) * ((c3 + 1) * 2 * t - c3)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c3 + 1) * (t * 2 - 2) + c3) + 2) / 2;
    }

    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;

      var elapsedTime = timestamp - startTime;
      var progress = Math.min(elapsedTime / duration, 1);
      var easingValue = easeInOutBack(progress);

      var newMargin = startMargin + (targetMargin - startMargin) * easingValue;

      element.style.marginLeft = newMargin + 'px';

      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        if (typeof callback === 'function') {
          callback();
        }
      }
    }

    requestAnimationFrame(animationStep);
  }

  function reset() {
    var cardList = document.querySelector('#cardList');
    cardList.innerHTML = '';

    for (var i = 0; i < 210; i++) {
      var card = document.createElement('div');
      card.className = 'card';
      card.id = 'itemNumber' + i;
      cardList.appendChild(card);

      var rand = random(1, 100);
      if (rand <= parseInt(objetos.objetos[0]?.probabilidad)) {
        card.style.backgroundImage = `url(${objetos.objetos[0]?.imagen})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.setAttribute('data-rarity', 'blue');
        card.innerHTML = img.blue;
      } else if (
        rand > parseInt(objetos.objetos[0]?.probabilidad) &&
        rand <=
          parseInt(objetos.objetos[0]?.probabilidad) +
            parseInt(objetos.objetos[1]?.probabilidad)
      ) {
        card.style.backgroundImage = `url(${objetos.objetos[1]?.imagen})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.setAttribute('data-rarity', 'purple');
        card.innerHTML = img.purple;
      } else if (
        rand >
          parseInt(objetos.objetos[0]?.probabilidad) +
            parseInt(objetos.objetos[1]?.probabilidad) &&
        rand <=
          parseInt(objetos.objetos[0]?.probabilidad) +
            parseInt(objetos.objetos[1]?.probabilidad) +
            parseInt(objetos.objetos[2]?.probabilidad)
      ) {
        card.style.backgroundImage = `url(${objetos.objetos[2]?.imagen})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.setAttribute('data-rarity', 'pink');
        card.innerHTML = img.pink;
      } else if (
        rand >
          parseInt(objetos.objetos[0]?.probabilidad) +
            parseInt(objetos.objetos[1]?.probabilidad) +
            parseInt(objetos.objetos[2]?.probabilidad) &&
        rand <
          parseInt(objetos.objetos[0]?.probabilidad) +
            parseInt(objetos.objetos[1]?.probabilidad) +
            parseInt(objetos.objetos[2]?.probabilidad) +
            parseInt(objetos.objetos[3]?.probabilidad)
      ) {
        card.style.backgroundImage = `url(${objetos.objetos[3]?.imagen})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.setAttribute('data-rarity', 'red');
        card.innerHTML = img.red;
      } else {
        card.style.backgroundImage = `url(${objetos.objetos[4]?.imagen})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.setAttribute('data-rarity', 'yellow');
        card.innerHTML = img.yellow;
      }
    }

    animateMarginLeft(
      document.querySelector('.card'),
      -1000,
      5000,
      easeInOutBack
    );
  }

  function openCase() {
    reset();
    var rand = random(1000, 20000);
    var childNumber = Math.floor(rand / 100) + 4;
    var timings = [
      'easeInOutBack',
      'easeOutExpo',
      'easeInOutBounce',
      'easeOutQuad',
      'swing',
      'easeOutElastic',
      'easeInOutElastic',
    ];
    var timing = timings[random(0, timings.length)];
    var reward = document
      .querySelector('#itemNumber' + childNumber)
      .getAttribute('data-rarity');

    animateMarginLeft(
      document.querySelector('.card'),
      -rand,
      5000,
      timing,
      easeInOutBack,
      function () {
        var cardNumberElement = document.querySelector(
          '#itemNumber' + childNumber
        );
        var imgElement = cardNumberElement.querySelector('img');
        var src = imgElement.getAttribute('src');

        cardNumberElement.style.background =
          'linear-gradient(#00bf09, #246b27)';

        var dialogMsg = document.querySelector('#dialog-msg');
        dialogMsg.innerHTML =
          'You have received ' +
          reward +
          ' item!' +
          '<br><img src=' +
          src +
          '>';

        var dialog = document.querySelector('#dialog');
        dialog.style.display = 'block';

        var receiveButton = document.createElement('button');
        receiveButton.textContent = 'Receive item';
        receiveButton.addEventListener('click', function () {
          dialog.style.display = 'none';
          // add resources
        });
        dialog.appendChild(receiveButton);
      }
    );

    var allCards = document.querySelectorAll('.card');
    for (var i = 0; i < allCards.length; i++) {
      // allCards[i].style.backgroundColor = 'red';
    }
    allCards[childNumber].style.backgroundColor = 'green';
    const newObjetoObtenido = allCards[childNumber].childNodes[0].id;
    objetos.objetos.forEach((objeto, index) => {
      if (index == newObjetoObtenido) {
        const nuevosObjetos = [...objetoObtenido, objeto];
        console.log(nuevosObjetos);
        setObjetoObtenido(nuevosObjetos);
        return;
      }
    });
    setShowModal(true);
  }

  function easeInOutBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return t < 0.5
      ? (Math.pow(2 * t, 2) * ((c3 + 1) * 2 * t - c3)) / 2
      : (Math.pow(2 * t - 2, 2) * ((c3 + 1) * (t * 2 - 2) + c3) + 2) / 2;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <div id='unbox-area'>
        <div className='arrow-down'></div>
        <div id='cardList'></div>
      </div>
      <Row className='justify-content-center mt-3'>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <Button variant='success' onClick={openCase}>
            Abrir
          </Button>
        </Col>
      </Row>
      <Row className='justify-content-center mt-3'>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <SummaryModal
            objetoObtenido={objetoObtenido}
            precioCaja={objetos.precioCaja}
            nombreCaja={objetos.nombreCaja}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </Col>
      </Row>
    </>
  );
}
