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

type Response = {
  createCourse: Course
}

const useCreateCourse = (): [
  (input: CreateCourseInput) => Promise<string>,
  {loading: boolean}
] => {
  const [execute, {loading}] = useMutation<Response, MutationCreateCourseArgs>(CREATE_COURSE, {
    update (cache, {data}) {
      cache.modify({
        fields: {
          courses: (courses = []) => {
            return {
              ...courses,
              data: [...courses.data, data?.createCourse]
            }
          }
        }
      })
    }
  })

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
