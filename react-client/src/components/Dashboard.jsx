import React from 'react';




const Dashboard = (props)=>{

console.log(props)
return 	(

	<div className="container-fluid page-cont">
	<div className="header"><h1>Teacher System</h1></div>
		<div className="row dash-row">
			
			<div className="col-4 data-box">
				<div>
					<h3><span>1</span> Students</h3>
				</div>
			</div>
			
			<div className="col-4 data-box">
				<div>
					<h3><span>0</span> Responses</h3>
				</div>
			</div>
			
			<div className="col-4 data-box">
				<div>
					<h3><span>{props.ashraf.length}</span> total Homeworks</h3>

				</div>
			</div>
			
		</div>
	</div>
)


}

export default Dashboard;