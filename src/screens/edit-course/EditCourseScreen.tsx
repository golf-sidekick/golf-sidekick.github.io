import {CourseForm, useGetCourse, useUpdateCourse} from 'state/courses'
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
import {useCountryDropdownSource, useTimezoneDropdownSource} from 'state'
import {useHistory, useParams} from 'react-router-dom'

import classNames from 'classnames'
import {useMemo} from 'react'

const EditCourseScreen = () => {
  const history = useHistory()
  let {courseId} = useParams<{courseId: string}>()
  const {data} = useGetCourse(courseId)
  const countries = useCountryDropdownSource()
  const timezones = useTimezoneDropdownSource()

  const fields = useMemo(
    () => ({
      name: {
        value: data?.name ?? '',
        validators: [notNullOrEmpty]
      },
      description: {
        value: data?.description ?? '',
        validators: [notNullOrEmpty]
      },
      emailAddress: {
        value: data?.emailAddress ?? '',
        validators: [notNullOrEmpty, isEmailAddress]
      },
      dialingCode: {
        value: data?.telephoneNumber?.dialingCode ?? '',
        validators: [notNullOrEmpty]
      },
      telephoneNumber: {
        value: data?.telephoneNumber?.number ?? '',
        validators: [notNullOrEmpty]
      },
      streetNumber: {
        value: data?.physicalAddress?.streetNumber ?? '',
        validators: [notNullOrEmpty]
      },
      street: {
        value: data?.physicalAddress?.street ?? '',
        validators: [notNullOrEmpty]
      },
      suburb: {
        value: data?.physicalAddress?.suburb ?? '',
        validators: [notNullOrEmpty]
      },
      city: {
        value: data?.physicalAddress?.city ?? '',
        validators: [notNullOrEmpty]
      },
      province: {
        value: data?.physicalAddress?.province ?? '',
        validators: [notNullOrEmpty]
      },
      postCode: {
        value: data?.physicalAddress?.postCode ?? '',
        validators: [notNullOrEmpty]
      },
      countryCode: {
        value: data?.physicalAddress?.countryCode ?? '',
        validators: [notNullOrEmpty]
      },
      lat: {
        value: data?.physicalAddress?.coordinates?.lat ?? 0,
        validators: [notNullOrEmpty, isNumber],
        converter: numberConverter
      },
      lon: {
        value: data?.physicalAddress?.coordinates?.lon ?? 0,
        validators: [notNullOrEmpty, isNumber],
        converter: numberConverter
      },
      timezoneId: {
        value: data?.timezone?.id,
        validators: [notNullOrEmpty]
      }
    }),
    [data]
  )

  const form = useForm(fields)

  const [execute, {loading}] = useUpdateCourse()
  const discard = () => history.replace('/admin')
  const submit = async () => {
    if (isFormValid(form)) {
      const data = getFormData<CourseForm>(form)
      await execute({
        courseId,
        name: data.name,
        description: data.description,
        emailAddress: data.emailAddress,
        timezoneId: data.timezoneId,
        telephoneNumber: {
          number: data.telephoneNumber,
          dialingCode: data.dialingCode
        },
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
            onClick={submit}
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default EditCourseScreen
