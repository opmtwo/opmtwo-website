'use client';

import SvgComponent from '@/components/SvgComponent';

const Thoughts = () => {
	const basePathStyle = {
		fill: 'none',
		stroke: 'rgb(226, 9, 83)',
		strokeWidth: '2.5px',
		strokeLinecap: 'round' as const,
		strokeLinejoin: 'round' as const,
	};

	return (
		<main>
			<div className="min-h-dvh">
				<section id="section-conditionnement" className="onscroll fitscreen seen min-h-dvh">
					<div className="layer back">
						<div className="half fitheight">
							<div className="v-half b-scolor-2"></div>
						</div>
						<div className="half fitheight right">
							<div className="v-half bottom b-scolor-2"></div>
						</div>
						<div className="rope sketch">
							<SvgComponent visibility={1} />
						</div>
					</div>
					<div className="layer fore">
						<div className="centered-thin clear-after">
							<div className="half fitheight right-pad-12">
								<div className="middle-holder">
									<div className="middle">
										<div className="title">
											<h4>Notre Savoir-faire</h4>
											<h2>
												Conditionnement
												<br />
											</h2>
										</div>
										<p className="t-regular">
											Juste après la cuisson, notre conditionnement, organisé en interne, contribue à toujours proposer une crevette
											fraîche.
											<br />
										</p>
										<p className="t-regular">
											Sous-atmosphère, en skin packaging ou bien en boîte poly, le tout sous divers formats (adaptés aux besoins de nos
											clients), nous offrons à nos produits un conditionnement à la hauteur de leur qualité.
											<br />
										</p>{' '}
									</div>
									<div></div>
								</div>
							</div>
							<div className="half fitheight right left-pad-15">
								<div className="middle-holder">
									<div className="middle">
										<div className="circle-holder">
											<div className="wave wave-savoirfaire-5-back"></div>
											<div className="circle">
												<img
													className="square lazyloaded"
													data-src="https://crustac.fr/wp-content/themes/crustac/img/pixel_square.png"
													src="https://crustac.fr/wp-content/themes/crustac/img/pixel_square.png"
												/>
											</div>
											<div className="wave wave-savoirfaire-5-fore"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="#" className="next-screen a-input scrollto" data-target="section-livraison">
							<span className="in">Suivant</span>
						</a>
					</div>
				</section>

				<section id="section-livraison" className="onscroll fitscreen seen min-h-dvh">
					<div className="layer back">
						<div className="half fitheight">
							<div className="v-half bottom b-scolor-2"></div>
						</div>
						<div className="half fitheight right">
							<div className="v-half b-scolor-2"></div>
						</div>
						<div className="rope sketch">
							<SvgComponent visibility={1} />
						</div>
					</div>

					<div className="layer fore">
						<div className="centered-thin clear-after">
							<div className="half fitheight right-pad-15">
								<div className="middle-holder">
									<div className="middle">
										<div className="circle-holder">
											<div className="wave wave-savoirfaire-6-back"></div>
											<div className="circle">
												<img
													className="square lazyloaded"
													data-src="https://crustac.fr/wp-content/themes/crustac/img/pixel_square.png"
													src="https://crustac.fr/wp-content/themes/crustac/img/pixel_square.png"
												/>
											</div>
											<div className="wave wave-savoirfaire-6-fore"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="half fitheight right left-pad-12">
								<div className="middle-holder">
									<div className="middle">
										<div className="title">
											<h4>Notre Savoir-faire</h4>
											<h2>
												Livraison
												<br />
											</h2>
										</div>
										<p className="t-regular">
											Véritable challenge depuis des années, nous assurons aujourd’hui une livraison pour toute l’Europe, avec des départs
											six jours sur sept.
											<br />
										</p>
										<p className="t-regular">
											Nous nous assurons ainsi à répondre rapidement aux fluctuations de l’activité, avec une flotte et une organisation
											adaptées en permanence.
											<br />
										</p>
									</div>
								</div>
							</div>
						</div>
						<a href="#" className="next-screen a-input scrollto" data-target="section-suivi">
							<span className="in">Suivant</span>
						</a>
					</div>
					<div className="pagination">
						<div className="current">07</div>
						<div className="total">08</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Thoughts;
