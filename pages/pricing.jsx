import Head from "next/head";

export default function Pricing() {
	return (
		<div>
			<Head>
				<title>Membership Pricing · Knowledge Futures</title>
				<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
			</Head>
			<stripe-pricing-table
				pricing-table-id="prctbl_1N1abeA3imchyjX3r8NxwKCD"
				publishable-key="pk_live_LNAFguce61iBJulFJDh2T0Yg00BbIqS1to"
			></stripe-pricing-table>
		</div>
	);
}
