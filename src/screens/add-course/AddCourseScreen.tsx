import classNames from 'classnames'

const AddCourseScreen = () => {
	return (
		<div className={classNames('bg-white', 'rounded-md', 'm-2', 'p-6')}>
			<h2>Add course</h2>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Username</span>
				</label>
				<input
					type="text"
					placeholder="username"
					className="input input-bordered"
				/>
			</div>
		</div>
	)
}

export default AddCourseScreen
