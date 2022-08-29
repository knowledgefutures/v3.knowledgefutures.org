import React, { useState } from "react";
import Head from "next/head";

import { Button } from "components";
import { supporting, contributing, network } from "utils/members";

import styles from "./membership.module.scss";

export default function Membership() {
	return (
		<div className={styles.workinggroups}>
			<Head>
				<title>Working Groups · Knowledge Futures Group</title>
			</Head>
			<h1>Working Groups</h1>
			<p>
				Knowledge Futures Working Groups are facilitated conversations and targeted projects
				between the KF Team and Members that have common areas of expertise, interest, or
				inquiry.
			</p>
			<p>
				Knowledge Futures Group facilitates a Member (and user) community that join us from
				a variety of industries and backgrounds, from academia and industry to government
				and cultural institutions. Working Groups are one way to bring a cross section of
				these Members together for collaborative problem solving and creation. Through these
				groups we can create new on-ramps for unlikely (and some obvious) collaborations
				that ensure our product development emerges from a community-driven process and
				consistently addresses real problems and needs. While some working groups may be
				ongoing and industry or specialty-specific, others may be time-bound and feature or
				issue-based.
			</p>
			<p>
				If you're interested in participating in one of our Working Groups or in suggesting
				a future one, please consider joining as a KFG Member at any tier.
			</p>
			<h2>Current Working Groups</h2>
			<h3>Community Publishing for Libraries (CP4L)</h3>
			<p>
				CP4L is a KFG Working Group for librarians and those working out of or in close
				collaboration with university libraries that are also KFG Members. Libraries have
				long served as a top supporter of PubPub and the researchers who use the platform to
				develop and share their work. As a result, CP4L aims to open lines of communication
				with librarians and the communities they support. CP4L is also a way to acknowledge
				and expand upon this existing and helpful exchange by sharing information on a range
				of topics, including: strategies for promoting OA adoption, strategies for
				fundraising and budgeting to prioritize open knowledge, creating documentation for
				dissemination on campus, sharing experiences about standing up new programs, and
				exchanging creative ideas and new experiments.
			</p>
			<p>
				<b>Active Members:</b> Appalachian State University Belk Library and Information Commons,
				Brown University Library Center for Digital Scholarship, Iowa State University
				Library, KU Leuven Libraries, MIT Libraries, Vanderbilt University Jean & Alexander
				Heard Libraries
			</p>
		</div>
	);
}
