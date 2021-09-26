import {FormProps} from './FormProps'
import classNames from 'classnames'

const Form = ({children}: FormProps) => {
  return (
    <form
      className={classNames(
        'bg-white',
        'rounded-md',
        'm-2',
        'p-6',
        'w-full',
        'lg:w-1/2',
        'md:w-3/4'
      )}>
      {children}
    </form>
  )
}

export default Form
