import {Maybe, PaginatedResultsOfCourse} from 'services/api'
import {gql, useQuery} from '@apollo/client'

import {COURSE_FRAGMENT} from './COURSE_FRAGMENT'

const SEARCH_COURSES = gql`
  query searchCourses($limit: Int!, $continuationToken: String, $term: String) {
    courses(limit: $limit, continuationToken: $continuationToken, term: $term) {
      data {
        ...CourseFragment
      }
      continuationToken
    }
  }
  ${COURSE_FRAGMENT}
`

const defaultArgs = {
  limit: 50
}

const useCourseSearch = (args: {limit?: number; term?: string}) => {
  const {data, networkStatus, refetch, fetchMore} = useQuery<{
    courses: Maybe<PaginatedResultsOfCourse>
  }>(SEARCH_COURSES, {
    notifyOnNetworkStatusChange: true,
    variables: {
      ...defaultArgs,
      ...args
    },
    fetchPolicy: 'cache-and-network'
  })

  const fetchMoreIfMoreExist = () => {
    // No continuation token indicates no more results to load
    if (!data?.courses?.continuationToken) return

    fetchMore({
      variables: {
        continuationToken: data?.courses?.continuationToken
      }
    })
  }

  return {
    data: data?.courses?.data ?? [],
    networkStatus,
    refetch,
    fetchMore: fetchMoreIfMoreExist
  }
}

export default useCourseSearch
