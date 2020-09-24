import React from 'react';
import Helmet from 'react-helmet';

require('./advisory.scss');

const Advisory = function() {
	return (
		<div id="advisory">
			<Helmet>
				<title>Advisory Council · Knowledge Futures Group</title>
			</Helmet>
			<h1>Advisory Council</h1>
			<p>
				Thank you for your interest in joining the KFG Advisory Council! As we continue to
				develop into a more diversified and complex organization that serves an
				ever-broadening audience, we will be looking to the Council for assistance and
				guidance in assuring the continued fulfillment of our core mission.
			</p>
			<p>
				We are seeking to build a Council with a diversity of skills, experience and
				perspectives who are committed to working creatively and collegially in furtherance
				of the KFG’s mission. We could not be more delighted to have you join us in this
				endeavor, and are grateful for your willingness to contribute your time, expertise,
				and support.
			</p>
			<hr />
			<p>
				We are structuring the Advisory Council to have a <b>single primary focus</b>: the
				KFG Annual Report.
			</p>
			<p>
				The Council will measure its success by its ability to help the organization meet
				the objectives laid out in the previous year’s annual report, and by its ability to
				help craft a compelling and comprehensive Annual Report at the end of the current
				fiscal year (June 30).
			</p>
			<p>
				While we encourage and welcome as much involvement as you’d like, we appreciate the
				value and limit of your time. Any or all of the following modes of contribution are
				greatly appreciated!
			</p>
			<ul>
				<li>
					Provide strategic advice based on review of the previous year’s annual report
				</li>
				<li>
					Provide contribution and critique as we draft the current year’s annual report
				</li>
				<li>Brainstorm & catch-up calls with members of the KFG team</li>
				<li>Participate in the KFG Advisory Council mailing list</li>
			</ul>
			<h2>Documents</h2>
			<ul>
				<li>
					<a href="/reports/annualReport2020.pdf">FY20 Annual Report PDF</a> (
					<a href="https://notes.knowledgefutures.org/pub/2020report">HTML</a>)
				</li>
				<li>
					<a href="https://docs.google.com/document/d/15aliO1cYfTFoNK6-peacEX9Bg_PtCW5oVpvGPthIV-s/edit?usp=sharing">
						FY21 Objectives
					</a>
				</li>
			</ul>

			<h2>Join</h2>
			<p>
				To formally signal your enthusiasm and willingness to participate, please complete
				and submit the following form.
			</p>
			<p>
				Participation on the advisory council is only expected for the current fiscal year
				(July 1, 2020 to June 30, 2021), but can be extended for additional years if we both
				find the collaboration fruitful!
			</p>
			<form name="advisory-council" method="POST" data-netlify="true" netlify-honeypot="city">
				<label htmlFor="name">
					Name
					<input type="text" name="name" required placeholder="Name" />
				</label>
				<label htmlFor="email">
					Email
					<input type="email" name="email" required placeholder="Email" />
				</label>
				<label htmlFor="publicName">
					We're proud of who we work with!
					<br />
					Opt-in to have your participation publicly listed (e.g. on website, annual
					report)
					<input type="checkbox" name="publicName" value="true" />
				</label>
				<label className="hp" htmlFor="city">
					City hp field
					<input name="city" />
				</label>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Advisory;
