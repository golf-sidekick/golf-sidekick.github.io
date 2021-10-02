const isNumber = (value: string) => {
  return value !== undefined && !isNaN(+value)
}

export default isNumber
