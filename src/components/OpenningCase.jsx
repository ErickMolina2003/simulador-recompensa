import './OpenningCase.css';
import Object1 from '../assets/object1.svg';
import Object2 from '../assets/object2.svg';
import Object3 from '../assets/object3.svg';
import Object4 from '../assets/object4.svg';
import Object5 from '../assets/object5.svg';
import { Button, Col, Row } from 'react-bootstrap';

export function OpenningCase() {
  var img = {
    blue: `<img src="${Object1}"/>`,
    purple: `<img src="${Object2}"/>`,
    pink: `<img src="${Object3}"/>`,
    red: `<img src="${Object4}"/>`,
    yellow: `<img src="${Object5}"/>`,
  };

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
      card.style.backgroundColor = 'lightblue';
      card.setAttribute('data-rarity', 'blue');
      card.id = 'itemNumber' + i;
      card.innerHTML = img.blue;
      cardList.appendChild(card);

      var rand = random(1, 10000) / 100;
      if (rand < 20) {
        card.style.backgroundColor = 'purple';
        card.setAttribute('data-rarity', 'purple');
        card.innerHTML = img.purple;
      } else if (rand < 5) {
        card.style.backgroundColor = 'hotpink';
        card.setAttribute('data-rarity', 'pink');
        card.innerHTML = img.pink;
      } else if (rand < 2) {
        card.style.backgroundColor = 'red';
        card.setAttribute('data-rarity', 'red');
        card.innerHTML = img.red;
      } else if (rand < 0.5) {
        card.style.backgroundColor = 'yellow';
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
      allCards[i].style.backgroundColor = 'red';
    }
    allCards[childNumber].style.backgroundColor = 'green';
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
    </>
  );
}
