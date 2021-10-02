import {Switch, useHistory} from 'react-router-dom'
import {faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {formatAddress, isBusy} from 'state'

import {AddCourseScreen} from 'screens/add-course'
import {Body} from 'components/body'
import {EditCourseScreen} from 'screens/edit-course'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ProtectedRoute} from 'components/protected-route'
import classNames from 'classnames'
import {useAuthContext} from 'services/auth'
import {useCourseSearch} from 'state/courses'
import {useGetImageSource} from 'state/media'
import {useGetSelf} from 'state/players'

const NavBar = () => {
  const {logout} = useAuthContext()
  const {data} = useGetSelf()
  const source = useGetImageSource(data?.self?.profileImageRef)
  return (
    <div className="m-2 navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 hidden px-2 mx-2 lg:flex divide-x-2">
        <span className="text-md px-2">GSK Admin Console</span>
        <span className="text-lg font-bold px-2">
          {data?.self && data.self.name}
        </span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end text-black">
          <div tabIndex={0} className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              {source && <img src={source} alt={'Profile'} />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                className={'btn btn-ghost flex flex-row justify-start gap-x-2'}
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const CourseList = () => {
  const {data, networkStatus} = useCourseSearch({})
  const history = useHistory()
  const addCourse = () => history.push('/admin/add-course')
  const editCourse = (courseId: string) => () =>
    history.push(`/admin/edit-course/${courseId}`)

  return (
    <div
      className={classNames('bg-white', 'rounded-md', 'm-2', 'p-6', 'shadow')}
    >
      <div
        className={classNames(
          'flex',
          'flex-row',
          'justify-between',
          'border-b-2',
          'mb-3'
        )}
      >
        <h2 className={classNames('text-lg', 'text-bold', 'p-3')}>
          Course list
        </h2>
        <button
          onClick={addCourse}
          className={classNames(
            'btn',
            'btn-sm',
            'flex',
            'flex-row',
            'justify-start',
            'gap-x-2'
          )}
        >
          Add course
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {!isBusy(networkStatus) && (
        <div className={'overflow-x-auto max-h-96'}>
          <table className={'table w-full'}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Timezone</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {data.map(course => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{formatAddress(course.physicalAddress)}</td>
                  <td>{course.timezone?.name}</td>
                  <td>
                    <button
                      className={classNames('btn btn-xs')}
                      onClick={editCourse(course.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const DashboardScreen = () => {
  return <CourseList />
}

const AdminScreen = () => {
  return (
    <Body>
      <NavBar />
      <Switch>
        <ProtectedRoute path={'/admin/add-course'}>
          <AddCourseScreen />
        </ProtectedRoute>
        <ProtectedRoute path={'/admin/edit-course/:courseId'}>
          <EditCourseScreen />
        </ProtectedRoute>
        <ProtectedRoute path={'/'}>
          <DashboardScreen />
        </ProtectedRoute>
      </Switch>
    </Body>
  )
}

export default AdminScreen
