const isSafari = ():boolean => {
    return (navigator.vendor.match(/apple/i) || "").length > 0
  }

  export default isSafari