import reactLogo from './assets/React-icon.svg.png'

const reactLogoAlt = 'React Logo'
console.log(reactLogo)

function Practice2() {

 return (
    <>
      <img
        src = {reactLogo}
        alt = {reactLogoAlt}
        width = {256}
        height = {228}      
      />
    </>
  )
}

export default Practice2