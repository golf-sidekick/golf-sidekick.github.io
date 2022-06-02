import {Course, MutationRemoveCourseArgs, RemoveCourseInput} from 'services/api'
import {gql, useMutation} from '@apollo/client'

import {COURSE_FRAGMENT} from './COURSE_FRAGMENT'

const REMOVE_COURSE = gql`
  mutation RemoveCourse($input: RemoveCourseInput!) {
    removeCourse(input: $input) {
      ...CourseFragment
    }
  }
  ${COURSE_FRAGMENT}
`

type Response = 
{
    removeCourse: Course
}

const useRemoveCourse = (): [
  (input: RemoveCourseInput) => Promise<string>,
  {loading: boolean}
] => {
  const [execute, {loading}] = useMutation<Response, MutationRemoveCourseArgs>(REMOVE_COURSE, {
    update (cache, {data}) {
      cache.modify({
        fields: {
          courses: (courses = [], {
            readField
          }) => {
            return {
              ...courses,
              data: courses.data.filter((ref: any) => readField({
                from: ref,
                fieldName: 'id'
              }) !== data?.removeCourse.id)
            }
          }
        }
      })
    }
  })

  const removeCourse = async (input: RemoveCourseInput) => {
    const result = await execute({
      variables: {
        input
      }
    })
    return result.data?.removeCourse.id
  }

  return [removeCourse, {loading}]
}

export default useRemoveCourse
