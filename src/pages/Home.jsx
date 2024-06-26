import { Routes, Route, Link } from "react-router-dom"
import Resume from "./Resume"
import Social from "./Social"
import Connect from "./Connect"
import profilepic from "../assets/sandy_r.png"
import { useState, useEffect } from "react"
import React from "react"

function Home() {
	

	return (
		<>
			<div className="home-container home" >
                <div className="user">
				    <img src={profilepic} className="user-i" alt="" />
                </div>
				<div className="user-">
					<h2>Hey I am Sandeepa!</h2>
					<p>I'm a frontend developer, optimist, and community builder. I currently work as VP of product at Vercel, where I help teach the Next.js logomark, Next.js community, an open-source web framework built with React</p>
					<div className="connect-flex">
						<Link to="/" className="connect">
							<div>My Resume</div>
						</Link>
						<Link to="/social" className="connect">
							follow me on Social Media
						</Link>
						<Link to="/connect">
							<div className="connect">Let's talk!</div>
						</Link>
					</div>
				</div>
			</div>

			<Routes>
				<Route path="/resume" element={<Resume />} />
				<Route path="/social" element={<Social />} />
				<Route path="/connect" element={<Connect />} />
			</Routes>
		</>
	)
}

export default Home
