import React from 'react';
import Helmet from 'react-helmet';

const Jobs = function() {
	return (
		<div id="container">
			<Helmet>
				<title>Jobs · KFG</title>
			</Helmet>

			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Jobs</h2>
				<p>Come join us to implement sustainable knowledge futures!</p>

				<p>
					Values we look for in prospective team mates include: self-motivation, an
					experimental/problem-solving mindset, interest in personal growth, broad
					intellectual curiosity, and of course, kindness.
				</p>

				<p>
					Lastly, if you’re excited about working with us, but don’t see the exact role
					for you, please <a href="mailto:hiring@knowledgefutures.org">get in touch</a>.
					We’re open to creating roles for the right people.{' '}
				</p>
				<hr />
				<ol>
					<li><a href="https://notes.knowledgefutures.org/pub/rh7vxl1u"><strong>Senior Software Engineer, PubPub</strong> • Full-Time • Cambridge, MA or Remote</a></li>
					<li><a href="https://notes.knowledgefutures.org/pub/8ybcdqbn"><strong>Junior Software Engineer, PubPub</strong> • Full-Time • Cambridge, MA or Remote</a></li>
					<li><a href="https://notes.knowledgefutures.org/pub/si1okbw9"><strong>Software Engineer, the Underlay Project</strong> • Full-Time • Cambridge, MA or Remote</a></li>
				</ol>
			</section>
		</div>
	);
};

export default Jobs;
