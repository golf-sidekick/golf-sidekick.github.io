const isEmailAddressRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isEmailAddress = (value: string) => {
  if (!value) return true
  return isEmailAddressRegex.test(value.toLowerCase())
}

export default isEmailAddress
