import React, {useState} from 'react'
import {Switch, useHistory} from 'react-router-dom'
import {faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {formatAddress, isBusy} from 'state'

import {AddCourseScreen} from 'screens/add-course'
import {Body} from 'components/body'
import {EditCourseScreen} from 'screens/edit-course'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {MapsProvider} from 'services/maps'
import {ProtectedRoute} from 'components/protected-route'
import classNames from 'classnames'
import {useAuthContext} from 'services/auth'
import {useCourseSearch} from 'state/courses'
import {useGetImageSource} from 'state/media'
import {useGetSelf} from 'state/players'
import {RemoveCourseButton} from 'components/remove-course-button'

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
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <button
                className={'btn btn-ghost flex flex-row justify-start gap-x-2'}
                onClick={logout}>
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
  const [term, setTerm] = useState('')
  const {data, networkStatus} = useCourseSearch({limit: 10000, term})
  const history = useHistory()
  const addCourse = () => history.push('/admin/add-course')
  const editCourse = (courseId: string) => () =>
    history.push(`/admin/edit-course/${courseId}`)
  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(e.target.value)

  return (
    <div
      className={classNames('bg-white', 'rounded-md', 'm-2', 'p-6', 'shadow')}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'justify-between',
          'border-b-2',
          'mb-3'
        )}>
        <h2 className={classNames('text-lg', 'text-bold', 'p-3')}>
          Course list
        </h2>
        <div
          className={classNames(
            'flex',
            'flex-row',
            'items-center',
            'space-x-3'
          )}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Filter"
              className="input input-bordered input-sm"
              onChange={onFilter}
              value={term}
            />
          </div>
          <button
            onClick={addCourse}
            className={classNames(
              'btn',
              'btn-sm',
              'flex',
              'flex-row',
              'justify-start',
              'gap-x-2'
            )}>
            Add course
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      {!isBusy(networkStatus) && (
        <div className={'overflow-x-auto'}>
          <table className={'table w-full'}>
            <thead>
              <tr>
                <th>Name</th>
                <th className={'hidden xl:table-cell'}>Description</th>
                <th className={'hidden lg:table-cell'}>Address</th>
                <th className={'hidden xl:table-cell'}>Timezone</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {data.map(course => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td className={'hidden xl:table-cell'}>
                    {course.description}
                  </td>
                  <td className={'hidden lg:table-cell'}>
                    {formatAddress(course.physicalAddress)}
                  </td>
                  <td className={'hidden xl:table-cell'}>
                    {course.timezone?.name}
                  </td>
                  <td>
                    <button
                      className={classNames('btn btn-xs')}
                      onClick={editCourse(course.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <RemoveCourseButton courseId={course.id} />
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
    <MapsProvider>
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
    </MapsProvider>
  )
}

export default AdminScreen
