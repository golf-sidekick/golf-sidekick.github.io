import {CourseForm, useCreateCourse} from 'state/courses'
import {
  DropdownField,
  Form,
  FormSection,
  PlaceField,
  PlaceProps,
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
import {useCallback, useMemo} from 'react'
import {useCountryDropdownSource, useTimezoneDropdownSource} from 'state'

import classNames from 'classnames'
import {useHistory} from 'react-router-dom'

const AddCourseScreen = () => {
  const history = useHistory()
  const fields = useMemo(
    () => ({
      name: {
        value: '',
        validators: [notNullOrEmpty]
      },
      description: {
        value: '',
        validators: [notNullOrEmpty]
      },
      website: {
        value: '',
        validators: []
      },
      emailAddress: {
        value: '',
        validators: [isEmailAddress]
      },
      dialingCode: {
        value: '',
        validators: []
      },
      telephoneNumber: {
        value: '',
        validators: []
      },
      streetNumber: {
        value: '',
        validators: []
      },
      street: {
        value: '',
        validators: []
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
      },
      timezoneId: {
        value: '',
        validators: [notNullOrEmpty]
      }
    }),
    []
  )
  const form = useForm(fields)
  const [, {setValues}] = form
  const discard = () => history.goBack()
  const [execute, {loading}] = useCreateCourse()
  const countries = useCountryDropdownSource()
  const timezones = useTimezoneDropdownSource()

  const submit = async () => {
    if (isFormValid(form)) {
      const data = getFormData<CourseForm>(form)
      await execute({
        name: data.name,
        description: data.description,
        website: data.website,
        emailAddress: data.emailAddress,
        timezoneId: data.timezoneId,
        telephoneNumber:
          data.telephoneNumber && data.dialingCode
            ? {
                number: data.telephoneNumber,
                dialingCode: data.dialingCode
              }
            : null,
        physicalAddress: {
          city: data.city,
          countryCode: data.countryCode,
          postCode: data.postCode,
          province: data.province,
          street: data.street,
          streetNumber: data.streetNumber,
          suburb: data.suburb,
          coordinates: {
            lat: data.lat,
            lon: data.lon
          }
        }
      })
      history.replace('/admin')
    }
  }

  const onPlaceChanged = useCallback(
    (place: PlaceProps) => setValues(place),
    [setValues]
  )

  return (
    <div className={classNames('flex justify-center')}>
      <Form>
        <FormSection title={'Course info'} index={'1'}>
          <PlaceField
            placeholder={'Acme Country Club'}
            form={form}
            fieldName={'name'}
            label={'Name'}
            onPlaceChanged={onPlaceChanged}
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
            placeholder={'https://www.course.com'}
            form={form}
            fieldName={'website'}
            label={'Website'}
          />
          <TextField
            placeholder={'info@course.com'}
            form={form}
            fieldName={'emailAddress'}
            label={'Email Address'}
          />
          <TextField
            placeholder={'+27'}
            form={form}
            fieldName={'dialingCode'}
            label={'Telephone Number Dialing Code'}
          />
          <TextField
            placeholder={'000000000'}
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
            source={countries}
            placeholder={'Thailand'}
            form={form}
            fieldName={'countryCode'}
            label={'Country'}
          />
          <DropdownField
            source={timezones}
            placeholder={'SE Asia Standard Time'}
            form={form}
            fieldName={'timezoneId'}
            label={'Timezone'}
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
          <button
            className={classNames('btn', {loading: loading})}
            onClick={submit}>
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AddCourseScreen
