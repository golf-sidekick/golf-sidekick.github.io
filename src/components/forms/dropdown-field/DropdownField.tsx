import {ChangeEvent, useEffect, useState} from 'react'
import {DropdownFieldItem, DropdownFieldProps} from './DropdownFieldProps'

import DEFAULT_FILTER from './DEFAULT_FILTER'
import classNames from 'classnames'

const DropdownField = ({
  label,
  form,
  fieldName,
  source,
  containerClassName,
  filter = DEFAULT_FILTER,
  ...props
}: DropdownFieldProps) => {
  const [open, setOpen] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [state, {setValue}] = form
  const field = state[fieldName]
  const hasError = field.touched && !field.isValid
  const [term, setTerm] = useState(field.value)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)
  const focus = () => setOpen(true)
  const blur = () => !hasFocus && setOpen(false)
  const over = () => setHasFocus(true)
  const out = () => setHasFocus(false)
  const select =
    ({key, value}: DropdownFieldItem) =>
    () => {
      setValue(fieldName, key)
      setTerm(value)
      setOpen(false)
    }
  const items = source.filter(item => filter(term, item))

  useEffect(() => {
    const item = source.find(item => item.key === field.value)
    item && setTerm(item.value)
  }, [source, field.value])

  return (
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
      <input type="hidden" value="autocomplete hack" />
      <input
        {...props}
        type="text"
        className={classNames('input', 'input-bordered', {
          'input-error': hasError
        })}
        value={term}
        autoComplete={'off'}
        onChange={onChange}
        onFocus={focus}
        onBlur={blur}
      />
      {open && items.length > 0 && (
        <div className={classNames('relative')}>
          <ul
            onMouseOver={over}
            onMouseOut={out}
            className={classNames(
              'p-2',
              'shadow',
              'menu',
              'dropdown-content',
              'bg-base-100',
              'rounded-box',
              'absolute',
              'mh-64',
              'overflow-y-auto',
              'box-content'
            )}>
            {items.map(item => (
              <li key={item.key}>
                <a onClick={select(item)}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownField
