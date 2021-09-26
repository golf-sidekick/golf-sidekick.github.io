import isEmailAddress from './isEmailAddress'

test('valid input is accepted', () => {
  // Act
  const actual = isEmailAddress('test@test.com')

  // Assert
  expect(actual).toBeTruthy()
})

test('invalid input is not accepted', () => {
  // Act
  const actual = isEmailAddress('test')

  // Assert
  expect(actual).toBeFalsy()
})
