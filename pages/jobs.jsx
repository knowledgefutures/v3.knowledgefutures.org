import Head from "next/head";

import { JobList } from "components";

export default function Jobs() {
	return (
		<div>
			<Head>
				<title>Jobs · Knowledge Futures Group</title>
			</Head>
			<h1>Jobs</h1>
			<p>Come join us to implement sustainable knowledge futures!</p>

			<p>
				Values we look for in prospective team mates include: self-motivation, an
				experimental/problem-solving mindset, interest in personal growth, broad
				intellectual curiosity, and of course, kindness.
			</p>

			<p>
				Lastly, if you’re excited about working with us, but don’t see the exact role for
				you, please <a href="mailto:hiring@knowledgefutures.org">get in touch</a>. We’re
				open to creating roles for the right people.{" "}
			</p>
			<hr />
			<JobList />
		</div>
	);
}
