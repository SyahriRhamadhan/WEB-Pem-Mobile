import React, { useState } from 'react'
import '../Search/style.css'

export default function SearchHome() {

	const [showhide, setShowhide] = useState("no");

	const handleShow = e => {
		const getShow = e.target.value;
		setShowhide(getShow);
	}

	return (
		<div className="section mb-0 pb-0" id='panel'>
			<div className="section-center">
				<div className="container">
					<div className="row">
						<div className="booking-form">
							<form>
								<div className="form-group">
									<div className="form-checkbox">
										<label htmlFor="roundtrip">
											<input type="radio" id="roundtrip" name="flight-type" value="yes"
												onClick={handleShow} />
											<span></span>Roundtrip
										</label>

										<label htmlFor="one-way">
											<input type="radio" id="one-way" name="flight-type" value="no"
												checked={showhide === 'no'} onClick={handleShow} />
											<span></span>One way
										</label>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Flight from</span>
											<input className="form-control" type="text" placeholder="Jakarta" />
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Going to</span>
											<input className="form-control" type="text" placeholder="Bali" />
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="form-group">
											<span className="form-label">Departing</span>
											<input className="form-control" type="date" required />
										</div>
									</div>

									{showhide === 'yes' && (
										<div className="col-md-3">
											<div className="form-group">
												<span className="form-label">Returning</span>
												<input className="form-control" type="date" required />
											</div>
										</div>
									)
									}

									<div className="col-md-2">
										<div className="form-group">
											<span className="form-label">Passenger</span>
											<input className="form-control" type="text" placeholder="0" />
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="form-btn">
											<a className="submit-btn" href='/login' style={{ padding: 20 }}>Show flights</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}