import {
  DropdownField,
  Form,
  FormSection,
  TextAreaField,
  TextField,
  getFormData,
  isEmailAddress,
  isFormValid,
  isNumber,
  notNullOrEmpty,
  numberConverter,
  useForm
} from 'components/forms'

import classNames from 'classnames'
import {countries} from 'typed-countries'
import {useHistory} from 'react-router-dom'

const countriesSource = countries.map(country => ({
  key: country.iso,
  value: country.name
}))

const AddCourseScreen = () => {
  const history = useHistory()
  const form = useForm({
    name: {
      value: '',
      validators: [notNullOrEmpty]
    },
    description: {
      value: '',
      validators: [notNullOrEmpty]
    },
    emailAddress: {
      value: '',
      validators: [notNullOrEmpty, isEmailAddress]
    },
    telephoneNumber: {
      value: '',
      validators: [notNullOrEmpty]
    },
    streetNumber: {
      value: '',
      validators: [notNullOrEmpty]
    },
    street: {
      value: '',
      validators: [notNullOrEmpty]
    },
    suburb: {
      value: '',
      validators: [notNullOrEmpty]
    },
    city: {
      value: '',
      validators: [notNullOrEmpty]
    },
    province: {
      value: '',
      validators: [notNullOrEmpty]
    },
    postCode: {
      value: '',
      validators: [notNullOrEmpty]
    },
    countryCode: {
      value: '',
      validators: [notNullOrEmpty]
    },
    lat: {
      value: '',
      validators: [notNullOrEmpty, isNumber],
      converter: numberConverter
    },
    lon: {
      value: '',
      validators: [notNullOrEmpty, isNumber],
      converter: numberConverter
    }
  })

  const discard = () => history.goBack()

  const submit = () => {
    if (isFormValid(form)) {
      const data = getFormData(form)
      console.log(data)
    }
  }

  return (
    <div className={classNames('flex justify-center')}>
      <Form>
        <FormSection title={'Course info'} index={'1'}>
          <TextField
            placeholder={'Acme Country Club'}
            form={form}
            fieldName={'name'}
            label={'Name'}
          />
          <TextAreaField
            placeholder={'Supply the course description'}
            form={form}
            fieldName={'description'}
            label={'Description'}
          />
        </FormSection>
        <FormSection title={'Contact'} index={'2'}>
          <TextField
            placeholder={'info@course.com'}
            form={form}
            fieldName={'emailAddress'}
            label={'Email Address'}
          />
          <TextField
            placeholder={'+27000000000'}
            form={form}
            fieldName={'telephoneNumber'}
            label={'Telephone Number'}
          />
        </FormSection>
        <FormSection title={'Physical Address'} index={'3'}>
          <TextField
            placeholder={'1'}
            form={form}
            fieldName={'streetNumber'}
            label={'Street number'}
          />
          <TextField
            placeholder={'Acme St'}
            form={form}
            fieldName={'street'}
            label={'Street'}
          />
          <TextField
            placeholder={'Acme Hills'}
            form={form}
            fieldName={'suburb'}
            label={'Suburb'}
          />
          <TextField
            placeholder={'Acme City'}
            form={form}
            fieldName={'city'}
            label={'City'}
          />
          <TextField
            placeholder={'West Acme'}
            form={form}
            fieldName={'province'}
            label={'Province'}
          />
          <TextField
            placeholder={'0000'}
            form={form}
            fieldName={'postCode'}
            label={'Post Code'}
          />
          <DropdownField
            source={countriesSource}
            placeholder={'ZA'}
            form={form}
            fieldName={'countryCode'}
            label={'Country'}
          />
          <TextField
            placeholder={'10.487812'}
            form={form}
            fieldName={'lat'}
            label={'Latitude'}
          />
          <TextField
            placeholder={'78.340848'}
            form={form}
            fieldName={'lon'}
            label={'Longitude'}
          />
        </FormSection>
        <div className={classNames('flex', 'justify-end', 'mt-2', 'p-2')}>
          <button className={classNames('link', 'mr-4')} onClick={discard}>
            discard
          </button>
          <button className={classNames('btn')} onClick={submit}>
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AddCourseScreen
