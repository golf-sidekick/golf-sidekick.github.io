import classNames from 'classnames'
import React, {useState} from 'react'
import {useRemoveCourse} from 'state/courses'
import {RemoveCourseButtonProps} from './RemoveCourseButtonProps'

const RemoveCourse = ({courseId}: RemoveCourseButtonProps) => {
  const [open, setOpen] = useState(false)
  const [removeCourse, {loading}] = useRemoveCourse()

  const onCancelClicked = () => setOpen(false)

  const onRemoveClicked = async () => {
    await removeCourse({courseId})
    setOpen(false)
  }

  return (
    <>
      <div className={classNames('modal', {'modal-open': open})}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to remove the course?
          </h3>
          <div className="modal-action">
            <label onClick={onCancelClicked} className="btn">
              Cancel
            </label>
            <label
              onClick={onRemoveClicked}
              className={classNames('btn btn-success', {loading: loading})}>
              Yes
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={classNames('btn btn-xs btn-warning modal-button')}
        onClick={() => setOpen(true)}>
        Remove
      </button>
    </>
  )
}

export default RemoveCourse
