import {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react'

import {Autocomplete} from '@react-google-maps/api'
import {PlaceFieldProps} from './PlaceFieldProps'
import classNames from 'classnames'
import getPlace from './getPlace'

const PlacesField = ({
  label,
  form,
  fieldName,
  containerClassName,
  onPlaceChanged,
  ...props
}: PlaceFieldProps) => {
  const [state, {setValue}] = form
  const field = state[fieldName]
  const [term, setTerm] = useState(field.value)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)
  const hasError = field.touched && !field.isValid
  const autoComplete = useRef<google.maps.places.Autocomplete | undefined>()

  const onSetAutoComplete = useCallback(
    (e: google.maps.places.Autocomplete) => {
      autoComplete.current = e
    },
    []
  )

  const onSelect = useCallback(() => {
    if (!autoComplete.current) return
    const result = autoComplete.current.getPlace()
    setValue(fieldName, result.name)
    onPlaceChanged && onPlaceChanged(getPlace(result))
  }, [onPlaceChanged, setValue, fieldName])

  useEffect(() => {
    setTerm(field.value)
  }, [field])

  return (
    <Autocomplete onLoad={onSetAutoComplete} onPlaceChanged={onSelect}>
      <div
        className={classNames(
          'form-control',
          'w-full',
          'md:w-1/2',
          containerClassName
        )}>
        {label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          {...props}
          type="text"
          className={classNames('input', 'input-bordered', {
            'input-error': hasError
          })}
          value={term}
          onChange={onChange}
        />
      </div>
    </Autocomplete>
  )
}

export default PlacesField
