import isNumber from './isNumber'

test('valid input is accepted', () => {
  // Act
  const actual = isNumber('1')

  // Assert
  expect(actual).toBeTruthy()
})

test('invalid input is not accepted', () => {
  // Act
  const actual = isNumber('a')

  // Assert
  expect(actual).toBeFalsy()
})
