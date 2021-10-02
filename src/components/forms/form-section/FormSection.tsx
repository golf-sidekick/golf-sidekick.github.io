import {FormSectionProps} from './FormSectionProps'
import classNames from 'classnames'

const FormSection = ({children, title, index = '-'}: FormSectionProps) => {
  return (
    <div className={classNames('mt-5')}>
      <h2 className={classNames('p-2', 'flex', 'flex-row', 'items-center')}>
        <div
          className={classNames(
            'border',
            'rounded-full',
            'h-10',
            'w-10',
            'text-center',
            'justify-center',
            'items-center',
            'flex',
            'mr-4'
          )}
        >
          {index}
        </div>
        <span>{title}</span>
      </h2>
      <div className={classNames('border-t', 'ml-16')}>{children}</div>
    </div>
  )
}

export default FormSection
