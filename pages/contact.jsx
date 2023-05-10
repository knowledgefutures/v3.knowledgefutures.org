import Head from "next/head";
import MembershipForm from "components/MembershipForm/MembershipForm";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact Us About Membership · Knowledge Futures</title>
			</Head>
			<h1>Contact Us About Membership</h1>
			<h2>
				Membership is a collaboration to support your mission by leveraging infrastructure
				for public knowledge.
			</h2>
			<p>To get started, fill out the form below and we'll reach out shortly.</p>
			<MembershipForm />
		</div>
	);
}
