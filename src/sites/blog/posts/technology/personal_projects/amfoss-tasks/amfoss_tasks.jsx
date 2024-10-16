import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../images/amritalogo.png";
import "./style.css";

export default function AmfossTaskBlog() {
	return (
		<Fragment>
			<div className="blog-page">
				<article>
					<p className="para_title">About Amfoss</p>
					<p className="paragraph_content">
						Foss@Amrita is a community of student developers based in Amrita
						Vishwa Vidyapeetham, Amritapuri, dedicated to fostering
						contributions in the realms of computer science and open source
						software. Under the guidance of its founder, Vipin Pavithran, amFOSS
						has earned its distinction as a pioneering student club in India,
						with its members being accepted to prestigious international
						programs year after year.
					</p>
					<p className="para_title">Praveshan 2019-20</p>
					<p className="paragraph_content">
						Freshers interested in joining the club usually have to solve some
						tasks as an entry assignment, which will be evaluated, followed by
						an interview with the already existing members.
						<br />
						<br />
						<b>Task List: </b>
						<a href="https://docs.google.com/document/d/1ceRGjrSLH9kB_ATYtDuOC6W_GrGW1GTUyAnz9XrnRRI/edit">
							amfoss-tasks 2019-20
						</a>
						<br />
						<br />
						This blog post can be considered as my progress report,{" "}
						<a href="https://github.com/gokulkrh/amfoss-tasks">
							github repository
						</a>
					</p>

					<p className="para_title">Task Progress</p>
					<p className="paragraph_content">
						<b>0.</b> Install Ubuntu 18.04:
					</p>
					<ul className="paragraph_content">
						<li>
							Installing ubuntu was way easier than I thought. I downloaded
							ubuntu 18.04 and created a bootable usb drive for installing. Then
							it was just a matter of following the on screen instructions and
							making partitions.
						</li>
						<li>
							I did run into an error though, the installer was not detecting my
							hard drive. I got round this by changing the SATA operation mode
							in the bios from RAID to AHCI. I also created a blog in github
							pages.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>1.</b> Star all the amFOSS repositories:
					</p>
					<ul className="paragraph_content">
						<li>
							This was pretty straight forward, just had to follow all the
							instructions in the mentioned repository. Copy the script into the
							developer console of the browser and run.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>2.</b> Programming:
					</p>
					<ul className="paragraph_content">
						<li>
							I used python3 to complete all the questions. I had no prior
							experience in computer science and I learned python during the
							first semester of college.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>3.</b> Google Scraping using Ruby
					</p>
					<ul className="paragraph_content">
						<li>
							Here I used the inspector window of the browser to find the HTML
							class of the title and url of the search results. Using Nokogiri I
							parsed two consecutive search results page and displays the first
							ten results in text format.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>4.</b> Advanced XOR:
					</p>
					<ul className="paragraph_content">
						<li>
							While going through the program I found out that the keylength is
							5, but I was still unable extract the plaintext.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>5.</b> Get it using Javascript:
					</p>
					<ul className="paragraph_content">
						<li>
							I designed a basic webpage using html. I went through github's
							graphql api's documentation and watched several youtube videos to
							make the queries.
						</li>
						<li>
							I also had to get a personal access token from github so that I
							can authorize my requests.
						</li>
						<li>
							My webpage shows the username, name, bio and avatarlink of the
							given user, If no person exists it displays an alert box saying no
							person exists. Also, github has revoked my access token when i
							uploaded the program.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>6.</b> CLI App using Go:
					</p>
					<ul className="paragraph_content">
						<li>
							I went through the resources provided with the task and learned
							more about Go.
						</li>
						<li>
							The idea was to access the Users/show endpoint of the twitter API
							by sending a GET request.
						</li>
						<li>
							In order to do that I had to apply for a twitter developer account
							to recieve the consumer keys and access tokens.
						</li>
						<li>
							I used "Twitter API" which is a Go package for accessing version
							1.1 of the Twitter API (
							<a href="https://github.com/amit-lulla/twitterapi">
								{" "}
								https://github.com/amit-lulla/twitterapi
							</a>
							). There were several resources online explaining the process of
							writing output to text file in Go.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>7.</b> Rusted Email:
					</p>
					<ul className="paragraph_content">
						<li>
							The general pattern for e-mail adress is a username followed by an
							@ symbol followed by domain.
						</li>
						<li>
							I found the regular expression for an e-mail id online (
							"a-z0-9_+?)@([a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]
							{(2, 6)}" ) and used the regex crate in rust to validate the input
							email-id.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>8.</b> Captcha Breaking:
					</p>
					<ul className="paragraph_content">
						<li>
							For this task I made a black and white png image with a simple
							arithmetic expression.
						</li>
						<li>
							The program I wrote is very basic. I used PIL and pytesseract ocr
							to extract the text from image as a string.
						</li>
						<li>
							I came across the built in eval() function in python which
							evaluates a string like a python expression and returns the result
							as an integer.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>9.</b> Setup a Simple Personal Website:
					</p>
					<ul className="paragraph_content">
						<li>
							I used the repository mentioned in the task and the followed the
							instructions to set up my website.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>10.</b> CS50:
					</p>
					<ul className="paragraph_content">
						<li>
							I watched all the lectures till week 5 and completed the
							problemsets as much as I could.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>11.</b> A Pong game:
					</p>
					<ul className="paragraph_content">
						<li>
							I found several online tutorials and resources for building the
							game. I followed this tutorial on youtube (
							<a href="https://www.youtube.com/watch?v=KApAJhkkqkA">
								{" "}
								https://www.youtube.com/watch?v=KApAJhkkqkA
							</a>
							) and made an offline multiplayer version of it.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>12.</b> Python Source:
					</p>
					<ul className="paragraph_content">
						<li>
							For this task I first converted the individual hexadecimal values
							to decimal and checked which ascii value when xored according to
							the program gives the decimal in the ciphertext. Then I reversed
							the shift function in the program to extract a list containing the
							flag.
						</li>
						<li>
							It took me a long time as I did most of the process on paper, I
							don't know if I'm supposed to do it like this but still I was able
							to solve the task.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>13.</b> Project Euler (for math freaks):
					</p>
					<ul className="paragraph_content">
						<li>
							I used python 3 and was able complete all the questions but it
							showed runtime errors and time limit exceeded errors in some test
							cases.
						</li>
					</ul>
					<p className="paragraph_content">
						<b>14.</b> Bandit:
					</p>
					<ul className="paragraph_content">
						<li>completed bandit till level 10.</li>
					</ul>
					<p className="para_title">Project</p>
					<p className="paragraph_content">
						Since I started work in my second semester, i was asked to do an
						extra assignment in addition to the entry tasks. The project
						assigned was to design and implement a courier management system for
						the university, that can notify students when a package was recieved
						at the college mailroom.
						<br />
						<br /> As the given time was very limited, I decided to use django
						and Sqlite for this project along with bootstrap to speed up
						frontend development.
						<p className="paragraph_content">
							<b>Features implemented:</b>
						</p>
						<ul className="paragraph_content">
							<li>Login page(for admin and users)</li>
							<li>Admins can add packages with relevant fields.</li>
							<li>
								Users can view all the packages recieved and search for theirs
								using their username.
							</li>
							<li>Password reset system for the users.</li>
						</ul>
					</p>
					<p className="paragraph_content">
						<a href="https://github.com/gokulkrh/Courier-management-system">
							github repository
						</a>
					</p>
				</article>

				<footer>
					<div className="footer">
						<div className="footer-column">
							<div className="footer-about-section">
								<p>
									About: <br />
									Extracting Audience Feedback from User Comments using
									multilabel Emotion recognition and Text Summarization <br />
									Final Year Project group 10b <br />
									Gokul Krishnan G <br />
									AM.EN.U4CSE19321 <br />
								</p>
							</div>
							<div className="socials">
								<div className="media-link-icons">
									<h3>Find me:</h3>
									<Link>
										<img
											className="footer-media-icons"
											src={require("../../../../../../images/facebook.png")}
											alt=""
										/>
									</Link>
									<Link>
										<img
											className="footer-media-icons"
											src={require("../../../../../../images/twitter.png")}
											alt=""
										/>
									</Link>
									<Link>
										<img
											className="footer-media-icons"
											src={require("../../../../../../images/instagram.png")}
											alt=""
										/>
									</Link>
									<Link>
										<img
											className="footer-media-icons"
											src={require("../../../../../../images/youtube.png")}
											alt=""
										/>
									</Link>
								</div>
							</div>
							{/* <Contact /> */}
						</div>
						<div className="disclaimer">
							<p>
								Please Note: The content displayed by the website is
								auto-generated using publicly available data such as comments.
								<br />
								Any crass or offensive content displayed by the website is
								purely coincidental.
								<br />
								They are not a representation of the website creator's beliefs
								or views.
							</p>
						</div>
					</div>
				</footer>
			</div>
		</Fragment>
	);
}
