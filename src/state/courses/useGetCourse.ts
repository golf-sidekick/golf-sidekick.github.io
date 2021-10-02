import {Course, Maybe} from 'services/api'
import {NetworkStatus, gql, useQuery} from '@apollo/client'

import {COURSE_FRAGMENT} from './COURSE_FRAGMENT'

const GET_COURSE = gql`
  query GetCourse($courseId: Uuid!) {
    course(courseId: $courseId) {
      ...CourseFragment
    }
  }
  ${COURSE_FRAGMENT}
`

const useGetCourse = (courseId: string) => {
  const {data, networkStatus, refetch} = useQuery<{
    course: Maybe<Course>
  }>(GET_COURSE, {
    variables: {
      courseId
    }
  })

  const loading = networkStatus === NetworkStatus.loading
  return {loading, data: data?.course, networkStatus, refetch}
}

export default useGetCourse
