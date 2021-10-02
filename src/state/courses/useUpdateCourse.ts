import {Course, MutationUpdateCourseArgs, UpdateCourseInput} from 'services/api'
import {gql, useMutation} from '@apollo/client'

import {COURSE_FRAGMENT} from './COURSE_FRAGMENT'

const CREATE_COURSE = gql`
  mutation UpdateCourse($input: UpdateCourseInput!) {
    updateCourse(input: $input) {
      ...CourseFragment
    }
  }
  ${COURSE_FRAGMENT}
`
const useUpdateCourse = (): [
  (input: UpdateCourseInput) => Promise<string>,
  {loading: boolean}
] => {
  const [execute, {loading}] = useMutation<
    {
      updateCourse: Course
    },
    MutationUpdateCourseArgs
  >(CREATE_COURSE)

  const updateCourse = async (input: UpdateCourseInput) => {
    const result = await execute({
      variables: {
        input
      }
    })
    return result.data?.updateCourse.id
  }

  return [updateCourse, {loading}]
}

export default useUpdateCourse
