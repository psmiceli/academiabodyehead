//Texto animado

const initTypingAnimation = () => {
    const titulo1 = document.querySelector('#id-titulo-intro')
  
    const typingAnimation = (element) => {
  
        if (element == titulo1) {
            element.innerHTML = 'Academia, nutrição, psicologia, esportes e muito mais... '
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''
  
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })
  
        } else {
            element.innerHTML = ''
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''
  
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })
  
        }
        
    }
  
    typingAnimation(titulo1)
  
  }
  
  initTypingAnimation()