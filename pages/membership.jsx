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
			pricePrefix: "",
			useSlider: false,
			price: "60",
			buttonText: "Join",
			buttonLink: "https://buy.stripe.com/6oEeVF8Hh5XrenC7sw",
			inviteCount: "1",
			discountPercentage: "5",
			supportAmount: "Dedicated",
			adjective: "Supporting",
		},
		{
			name: "Contributor",
			description:
				"For groups that want to grow their community using Knowledge Futures infrastructure.",
			pricePrefix: "",
			useSlider: true,
			price: contributorPrices[budgetValue - 1],
			buttonText: "Join",
			buttonLink: contributorLinks[budgetValue - 1],
			inviteCount: "5",
			discountPercentage: "10",
			supportAmount: "3 hrs dedicated",
			adjective: "Contributing",
		},
		{
			name: "Network",
			description:
				"For groups that want to leverage Knowledge Futures infrastructure across their network.",
			pricePrefix: "starting at",
			useSlider: false,
			price: "25,000",
			buttonText: "Contact Us",
			buttonLink: "",
			inviteCount: "10",
			discountPercentage: "15",
			supportAmount: "Regular",
			adjective: "Network",
		},
	];
	return (
		<div className={styles.membership}>
			<Head>
				<title>Membership · Knowledge Futures Group</title>
			</Head>
			<h1>Become a Member</h1>
			<p>
				Members are critical to sustaining our mission to build public knowledge
				infrastructure. Becoming a Knowledge Futures Member allows individuals and
				organizations of all sizes to support open infrastructure; receive support for
				PubPub, Underlay, and other products; meet and share ideas with other innovative
				knowledge communities; and join a community passionate about the future of knowledge
				infrastructure and its development.
			</p>

			<div className={styles.tiers}>
				{tiers.map((tier) => {
					return (
						<div index={tier.name} className={styles.tier}>
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
									<div className={styles.pricePrefix}>{tier.pricePrefix}</div>
									<div className={styles.price}>
										${tier.price}
										<span>/year</span>
									</div>

									<Button
										className={styles.button}
										text={tier.buttonText}
										href={tier.buttonLink}
									/>
									<ul>
										<li>
											Invitations to <a>member events</a>
										</li>
										<li>{tier.inviteCount} invite to member Slack group</li>
										<li>Custom domains for your PubPub communities</li>
										<li>
											{tier.discountPercentage}% discount on PubPub{" "}
											<a>Community Services</a>
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
										<li>
											Support and strategy calls for individuals and groups
											within your network
										</li>
									</ul>
								</div>
							</div>
							<div className={styles.seeAllLink}>
								<a className="hoverline" href="">
									See all {tier.adjective} members
								</a>
							</div>
						</div>
					);
				})}
			</div>

			<div className={styles.banner}>
				Membership is a vote for a future where knowledge is produced, curated, and shared
				in service of the public good.
			</div>

			<h1>Current Members</h1>
			<p>
				We gratefully ackowledge and thank all of our members. Without their support, the
				public knowledge infrastructure we build would not be possible.
			</p>
			<div className={styles.memberHeader}>Network Members</div>
			<ul className={styles.memberUl}>
				{network
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

			<div className={styles.memberHeader}>Contributing Members</div>
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

			<div className={styles.memberHeader}>Supporting Members</div>
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
			</ul>
		</div>
	);
}
