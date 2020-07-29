const getTypeFromUrl = () => {
  return window.location.pathname.split("/")[1] === "fire" ? "fire" : "water"
}

export default getTypeFromUrl