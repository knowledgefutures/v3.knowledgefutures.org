import React, { useState } from "react";
import Head from "next/head";

import { Button } from "components";
import { supporting, contributing, network } from "utils/members";

import styles from "./membership.module.scss";

export default function Membership() {
	const [budgetValue, setBudgetValue] = useState("2");
	const contributorPrices = ["1,150", "3,500", "7,500", "12,500"];
	const contributorLinks = [
		"https://buy.stripe.com/8wM9Bl4r1etX1AQ14c",
		"https://buy.stripe.com/28o3cX1eP71vdjy007",
		"https://buy.stripe.com/dR69Bl2iT85zbbqaEK",
		"https://buy.stripe.com/7sI28Tf5FbhL5R6149",
	];
	const tiers = [
		{
			name: "Supporter",
			description:
				"For budget constrained groups that want to support Knowledge Futures and join the community.",
			// pricePrefix: "",
			useSlider: false,
			price: "60",
			buttonText: "Join",
			buttonLink: "https://buy.stripe.com/6oEeVF8Hh5XrenC7sw",
			inviteCount: "1 invite",
			discountPercentage: "5",
			supportAmount: "Dedicated",
			adjective: "Supporting",
			adjectiveLink: "#supporting-members",
		},
		{
			name: "Contributor",
			description:
				"For groups that want to grow their community using Knowledge Futures infrastructure.",
			// pricePrefix: "",
			useSlider: true,
			price: contributorPrices[budgetValue - 1],
			buttonText: "Join",
			buttonLink: contributorLinks[budgetValue - 1],
			inviteCount: "5 invites",
			discountPercentage: "10",
			supportAmount: "3 hrs dedicated",
			adjective: "Contributing",
			adjectiveLink: "#contributing-members",
		},
		{
			name: "Network",
			description:
				"For groups that want to leverage Knowledge Futures infrastructure across their network.",
			// pricePrefix: "Scaled for your organization",
			useSlider: false,
			price: "",
			buttonText: "Contact Us",
			buttonLink:
				"mailto:partnerships@knowledgefutures.org?subject=Interested in Network Membership",
			inviteCount: "10 invites",
			discountPercentage: "15",
			supportAmount: "Regular",
			adjective: "Network",
			adjectiveLink: "#network-members",
		},
	];
	return (
		<div className={styles.membership}>
			<Head>
				<title>Membership · Knowledge Futures Group</title>
			</Head>
			<h1>Become a Member</h1>
			{/* <h2>One-liner about the value prop of membership</h2> */}
			<h2>
				Membership helps communities be more effective in their work and advances publicly
				available digital infrastructure.
			</h2>

			<p>
				Membership is a collaboration with Knowledge Futures to identify and implement
				infrastructure strategies that enable communities to be more effective in their work
				while also providing value beyond their specific goals by contributing to publicly
				available digital infrastructure.
			</p>
			<p>
				Becoming a Knowledge Futures Member allows communities of all sizes to advance their
				mission, support open infrastructure, meet and share ideas with other innovative
				knowledge communities, and join a network passionate about the future of knowledge
				infrastructure and its development.
			</p>
			<Button
				className={styles.contactButton}
				text={"Contact us about Membership"}
				href="mailto:partnerships@knowledgefutures.org?subject=Interested in Network Membership"
				opensNewTab={true}
			/>
			<p>
				In addition to the collaboration towards shared goals, membership benefits include:
			</p>
			<ul className={styles.benefits}>
				<li>Invitations to member events</li>
				<li>Custom domains for your PubPub communities</li>
				<li>Access to community services</li>
				<li>Email support for PubPub, Underlay, and future products</li>
				<li>Regular support, consultation, and training</li>
				<li>Support and strategy calls for individuals and groups within your network</li>
			</ul>

			{/* <div className={styles.tiers}>
				{tiers.map((tier) => {
					return (
						<div key={tier.name} className={styles.tier}>
							<div className={styles.card}>
								<div className={styles.cardContent}>
									<div className={styles.name}>{tier.name}</div>
									<div className={styles.description}>{tier.description}</div>
									{tier.useSlider && (
										<div className={styles.slider}>
											<label>
												Operating Budget{" "}
												<div className={styles.info}>
													<img src="/images/info.png" />
													<div>
														In order to serve a broad spectrum of groups
														and organizations, the price of Contributor
														memberships is based on the operating budget
														of each member.
													</div>
												</div>
											</label>
											<input
												type="range"
												min="1"
												value={budgetValue}
												max="4"
												step="1"
												onChange={(evt) => {
													console.log(evt.target, evt.target.value);
													setBudgetValue(evt.target.value);
												}}
											/>
											<div className={styles.ticks}>
												<div>{"<$100k"}</div>
												<div>{"<$1mm"}</div>
												<div>{"<$5mm"}</div>
												<div>{">$5mm"}</div>
											</div>
										</div>
									)}

									<div className={styles.pricePrefix}>
										// {tier.pricePrefix}
									</div>
									<div className={styles.price}>
										{tier.price && (
											<React.Fragment>
												${tier.price}
												<span>/year</span>
											</React.Fragment>
										)}
										{!tier.price && "Custom"}
									</div>

									<Button
										className={styles.button}
										text={tier.buttonText}
										href={tier.buttonLink}
										opensNewTab={true}
									/>
									<ul>
										<li>
											Invitations to <a>member events</a>
										</li>
										<li>{tier.inviteCount} to member email list</li>
										<li>Custom domains for your PubPub communities</li>
										<li>
											{tier.discountPercentage}% discount on PubPub{" "}
											<a href="https://www.pubpub.org/community-services">
												Community Services
											</a>
										</li>
										<li>
											Email support for PubPub, Underlay, and future products
										</li>
										<li>
											{tier.supportAmount} support, consultation, and training
										</li>
										<li>
											Regular strategy calls to help grow your network's use
											of public knowledge infrastructure
										</li>
										<li>Dedicated shared Slack channel</li>
										<li>
											Support and strategy calls for individuals and groups
											within your network
										</li>
									</ul>
								</div>
							</div>
							<div className={styles.seeAllLink}>
								<a className="hoverline" href={tier.adjectiveLink}>
									See all {tier.adjective} members
								</a>
							</div>
						</div>
					);
				})}
			</div>

			<div className={styles.finePrint}>
				<p>
					Want to join, but have questions, need an invoice or contract, or can't quite
					afford to? Please{" "}
					<a href="mailto:members@knowledgefutures.org?subject=Membership+Inquiry">
						reach out
					</a>{" "}
					and tell us about your work and needs.
				</p>
			</div>
			 */}
			<div className={styles.banner}>
				Membership is a vote for a future where knowledge is produced, curated, and shared
				in service of the public good.
			</div>

			<h1>Current Members</h1>
			<p>
				We gratefully ackowledge and thank all of our members. Without their support, the
				public knowledge infrastructure we build would not be possible.
			</p>
			{/* <div className={styles.memberHeader} id="network-members">
				Network Members
			</div> */}
			<ul className={styles.memberUl}>
				{[...network, ...contributing, ...supporting]
					.sort((foo, bar) => {
						if (foo.toLowerCase() < bar.toLowerCase()) {
							return -1;
						}
						if (foo.toLowerCase() > bar.toLowerCase()) {
							return 1;
						}
						return 0;
					})
					.map((member) => {
						return (
							<li key={member} className={styles.member}>
								{member}
							</li>
						);
					})}
			</ul>

			{/* <div className={styles.memberHeader} id="contributing-members">
				Contributing Members
			</div>
			<ul className={styles.memberUl}>
				{contributing
					.sort((foo, bar) => {
						if (foo < bar) {
							return -1;
						}
						if (foo > bar) {
							return 1;
						}
						return 0;
					})
					.map((member) => {
						return (
							<li key={member} className={styles.member}>
								{member}
							</li>
						);
					})}
			</ul>

			<div className={styles.memberHeader} id="supporting-members">
				Supporting Members
			</div>
			<ul className={styles.memberUl}>
				{supporting
					.sort((foo, bar) => {
						if (foo < bar) {
							return -1;
						}
						if (foo > bar) {
							return 1;
						}
						return 0;
					})
					.map((member) => {
						return (
							<li key={member} className={styles.member}>
								{member}
							</li>
						);
					})}
			</ul> */}
		</div>
	);
}
