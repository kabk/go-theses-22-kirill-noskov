const isSafari = ():boolean => {
    if(typeof navigator !== 'undefined'){
        return (navigator.vendor.match(/apple/i) || "").length > 0
    } else {
        return false
    }
  }

  export default isSafari