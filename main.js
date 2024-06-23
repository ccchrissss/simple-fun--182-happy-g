function gHappy(str) {
  
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === 'g' 
        && str[i - 1] !== 'g' 
        && str[i + 1] !== 'g') {

      return false

    }
    
  }
  
  return true
}


// parameters: str
// return: boolean
// e.g. gHappy('ggoodd god almighty')
// false


// loop through str
// if str[i] equals 'g' then we'll check if str[i] - 1 or str[i] + 1 also equals 'g'
// is that's true then we'll just continue
// if that's false then we'll return false
// return true