import { React, Fragment } from "react";
import "./style.css";

export default function AmfossTasks() {
	return (
		<Fragment>
			<div className="blog-page">
				<div id="header">
					<img
						id="main_banner"
						src={require("../../images/banner.png")}
						height="auto"
						width="100%"
						alt=""
					/>
				</div>

				<article>
					<p className="para_title">The Mission:</p>
					<p className="paragraph_content">
						With this project we are trying to spread awareness to youth about
						cyberbullying and the impacts it has on us. Further we would be
						talking about the different ways to protect ourselves from being
						cyberbullied and steps to take when we are in such a situation.{" "}
						<br />
					</p>
					<p className="para_title">Core Contributors</p>
					<p className="paragraph_content">
						SSR group 39 <br />
						<br />
						Team Members:
					</p>
					<ul className="paragraph_content">
						<li>Karthik Narayanan (AM.EN.U4CSE19327)</li>
						<li>M Ranjith (AM.EN.U4CSE19331)</li>
						<li>Gokul Krishnan G (AM.EN.U4CSE19321)</li>
						<li>Dhyan Chand S (AM.EN.U4CSE19318)</li>
						<li>Vinayak Shankar K (AM.EN.U4CSE19360)</li>
					</ul>
					<p className="para_title">Activities Undertaken</p>
					<p className="paragraph_content">
						<b>1.</b> Session on Cyberbullying and its impact on children.
					</p>
					<ul className="paragraph_content">
						<li>
							Speaker - DR.K.K.KUNHAMMAD, psychologist and an hr trainer with a
							masters degree and Phd in Psychology and also a PG Diploma in
							Counselling.
						</li>
						<li>Interactive session with students.</li>
						<li>
							Discussed various forms of cyberbullying, and its effects on
							children.
						</li>
						<li>
							Further discussed on how various people such as parents, teachers
							can help children who were cyberbullied.
						</li>
						<li>Participation of more than 50 students.</li>
					</ul>
					<p className="paragraph_content">
						<b>2.</b> Awareness session on Cyber Misuse
					</p>
					<ul className="paragraph_content">
						<li>
							Speaker - BINDURAJ. C. K Sub Inspector at Kathiroor Police
							Station.
						</li>
						<li>
							Made students aware of how Cyber Misuse happens and how to protect
							ourselves from it.
						</li>
						<li>
							The speaker shared different incidents of Cyber Misuse with the
							audience.
						</li>
						<li>Participation of more than 60 students.</li>
					</ul>
					<p className="para_title">Background of the Problem</p>
					<p className="paragraph_content"></p>
					<ul className="paragraph_content">
						<li>
							According to a worldwide poll done in 24 countries in 2011, 66
							percent of the 18,687 persons interviewed, including children and
							adults, saw, read, or heard anything about cyberbullying.
						</li>
						<li>
							According to the Cyberbullying Research Center in the United
							States, one in every four teenagers has been the victim of
							cyberbullying, and one in every six has perpetrated it.
						</li>
						<li>
							According to the 2014 EU Net Children Go Mobile Report,
							cyberbullying affected 12% of the 3,500 children aged 9 to 16.
						</li>
						<li>
							According to the 2011 EU Kids Online survey, 6% of the 25,142
							children aged 9 to 16 years old in Europe had been bullied online,
							while 3% had engaged in cyberbullying themselves.
						</li>
					</ul>
					<p className="para_title">Media</p>
					<p className="paragraph_content">
						<b>
							Posters: <br />
							<span className="media_content_poster">
								<img
									className="poster"
									src={require("../../images/session1.jpeg")}
									alt=""
								/>
								<img
									className="poster"
									src={require("../../images/session2.jpeg")}
									alt=""
								/>
								<br />
							</span>{" "}
							<br />
							Images: <br />
							<br />
							Session 1: <br />
							<span className="media_content">
								<img
									className="session_images"
									src={require("../../images/session1_meeting1.jpeg")}
									height="100%"
									width="90%"
									alt=""
								/>
								<img
									className="session_images"
									src={require("../../images/session1_meeting2.jpeg")}
									height="100%"
									width="90%"
									alt=""
								/>
							</span>
							<br />
							Session 2: <br />
							<span className="media_content">
								<img
									className="session_images"
									src={require("../../images/session2_meeting1.jpeg")}
									height="100%"
									width="90%"
									alt=""
								/>
								<img
									className="session_images"
									src={require("../../images/session2_meeting2.jpeg")}
									height="100%"
									width="90%"
									alt=""
								/>
							</span>
						</b>
					</p>
					<p className="para_title">Obstacles Faced</p>
					<ul className="paragraph_content">
						<li>
							There were frequent network issues during the session by Binduraj
							Sir on Cyber Misuse.
						</li>
						<li>
							We expected about more than 60 participants in our first session,
							but the count of participants did not reach the expected mark.
						</li>
						<li>
							We also had difficulty in finding the second speaker for our
							project.
						</li>
						<li>
							We had to change our speakers as our previous speaker was only
							available after 3-4 months.
						</li>
					</ul>
					<p className="para_title">Total Man hours for accomplishment</p>
					<p className="paragraph_content">50-60 hours</p>
					<p className="para_title">Road Ahead</p>
					<ul className="paragraph_content">
						<li>
							Our next focus if possible, would be to conduct more such sessions
							on cyber related issues.
						</li>
						<li>
							We would like to conduct these sessions offline so that there
							would be more interaction between the speaker and the audience.
						</li>
						<li>
							With the help of municipal and panchayat association groups, we
							would like to conduct awareness sessions on cyber related topics
							for them and thus extend these programs to a more diverse
							population.
						</li>
					</ul>
				</article>
				<footer>
					<div className="footer-contents">
						<div className="footer-uni-section">
							<img
								className="footer-uni-sites"
								src={require("../../images/amritalogo.png")}
								alt=""
							/>
							<img
								className="footer-uni-sites"
								src={require("../../images/SSRLOGO.png")}
								alt=""
							/>
						</div>
						<hr></hr>
						<p style={{ margin: "0", color: "rgb(0,218,255)" }}>
							website created by Gokul Krishnan,{" "}
							<a href="https://github.com/gokulkrh">Github</a>.
						</p>
					</div>
				</footer>
			</div>
		</Fragment>
	);
}
