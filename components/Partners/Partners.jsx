import styles from "./Partners.module.scss";

const Partners = () => {
	const partners = [
		{
			title: "MIT Press",
			img: "/partners/mitp.png",
			link: "https://mitpress.mit.edu/",
		},
		{
			title: "MacArthur Foundation",
			img: "/partners/macarthur.png",
			link: "https://www.macfound.org",
		},
		{
			title: "Reid Hoffman",
			img: "/partners/reid.png",
			link: "https://www.reidhoffman.org/",
		},
		// {
		// 	title: 'Goldsmiths Press',
		// 	img: '/partners/goldsmiths.png',
		// 	link: 'https://www.gold.ac.uk/goldsmiths-press/',
		// },
		{
			title: "Sloan Foundation",
			img: "/partners/sloan.png",
			link: "https://sloan.org/",
		},
		{
			title: "Siegel Family Foundation",
			img: "/partners/siegel.png",
			link: "https://www.siegelendowment.org/",
		},
		{
			title: "Protocol Labs",
			img: "/partners/proto.png",
			link: "https://protocol.ai/",
		},

		// {title: 'Lever for Change', img: '/partners/lever.png', link: 'https://www.leverforchange.org/' },
		{
			title: "Patrick J. McGovern Foundation",
			img: "/partners/mcgovern.png",
			link: "https://www.mcgovern.org/",
		},
	];

	return (
		<div className={styles.partners}>
			{partners.map((partner) => {
				return (
					<div className={styles.partner} key={partner.title}>
						<a href={partner.link}>
							<img src={partner.img} alt={partner.title} />
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default Partners;
