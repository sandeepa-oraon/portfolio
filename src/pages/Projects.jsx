import pr1 from "../assets/pr1.jpg"
import pr2 from "../assets/pr2.jpg"

function Projects() {
	return (
		<>
			<div className="home-container">
				<h2>My recent projects</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia consequatur dolore blanditiis quia autem modi, aspernatur iusto soluta illo.</p>

				<div className="project-flex">
					<div className="card">
						<img src={pr1} alt="" />
						<div className="p-flex">
							<h4>Studio Elite</h4>
							<div className="share-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
								</svg>
							</div>
						</div>
						<p className="desc">Easily create a portfolio with Next.js and Markdown.</p>
					</div>

					<div className="card">
						<img src={pr2} alt="" />
						<div className="p-flex">
							<h4>Software</h4>
							<div className="share-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
								</svg>
							</div>
						</div>
						<p className="desc">Easily create a portfolio with Next.js and Markdown.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects
