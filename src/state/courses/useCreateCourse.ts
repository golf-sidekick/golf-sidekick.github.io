import {Course, CreateCourseInput, MutationCreateCourseArgs} from 'services/api'
import {gql, useMutation} from '@apollo/client'

import {COURSE_FRAGMENT} from './COURSE_FRAGMENT'

const CREATE_COURSE = gql`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      ...CourseFragment
    }
  }
  ${COURSE_FRAGMENT}
`
const useCreateCourse = (): [
  (input: CreateCourseInput) => Promise<string>,
  {loading: boolean}
] => {
  const [execute, {loading}] = useMutation<
    {
      createCourse: Course
    },
    MutationCreateCourseArgs
  >(CREATE_COURSE)

  const createCourse = async (input: CreateCourseInput) => {
    const result = await execute({
      variables: {
        input
      }
    })
    return result.data?.createCourse.id
  }

  return [createCourse, {loading}]
}

export default useCreateCourse
