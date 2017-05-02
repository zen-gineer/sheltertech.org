import React from 'react'

//import images
import ImageDarcel from '../assets/darcel-story.png'
import ImageInitiative1 from '../assets/sheltertech-wifi-logo.png'
import ImageInitiative2 from '../assets/ask-darcel-logo.png'
import ImageInitiative3 from '../assets/casey-logo.png'
import ImageKQED from '../assets/kqed-logo.png'
import ImageCitylab from '../assets/citylab-logo.png'
import ImageCasey from '../assets/casey-app.png'
import ImageJob1 from '../assets/positions-1.png'
import ImageJob2 from '../assets/positions-2.png'
import ImageJob3 from '../assets/positions-3.png'
import ImageDonateBar from '../assets/donate-bar.png'
//import team images
import ImageTeam1 from '../assets/team-1.jpg'
import ImageTeam2 from '../assets/team-2.jpg'
import ImageTeam3 from '../assets/team-3.jpg'
import ImageTeam4 from '../assets/team-4.jpg'
import ImageTeam5 from '../assets/team-5.jpg'
import ImageTeam6 from '../assets/team-6.jpg'
import ImageTeam7 from '../assets/team-7.jpg'
import ImageTeam8 from '../assets/team-8.jpg'
import ImageTeam9 from '../assets/team-9.jpg'
import ImageTeam10 from '../assets/team-10.jpg'
import ImageTeam11 from '../assets/team-11.jpg'
import ImageTeam12 from '../assets/team-12.jpg'
import ImageTeam13 from '../assets/team-13.jpg'
import ImageTeam14 from '../assets/team-14.jpg'
import ImageTeam15 from '../assets/team-15.jpg'
import ImageTeam16 from '../assets/team-16.jpg'
import ImageTeam17 from '../assets/team-17.jpg'
import ImageTeam18 from '../assets/team-18.jpg'

var initiativeLogo1 = {backgroundImage: 'url(' + ImageInitiative1 + ')'}
var initiativeLogo2 = {backgroundImage: 'url(' + ImageInitiative2 + ')'}
var initiativeLogo3 = {backgroundImage: 'url(' + ImageInitiative3 + ')'}

var job1 = {backgroundImage: 'url(' + job1 + ')'}
var job2 = {backgroundImage: 'url(' + job2 + ')'}
var job3 = {backgroundImage: 'url(' + job3 + ')'}


export const HomeView = () => (
  <div className="home">
    <section className="hero">
	    <h1>Everyone should benefit from technology</h1>
	    <h3>We collaborate with underserved community members to create digital products that have real impact in <em>their lives</em>.</h3>
    </section>
    <section className="founder-message">
    	<div className="content">
    		<img className="founder-image" src={ImageDarcel} alt="Darcel Jackson" />
    		<div className="founder-text">
    			<h5>A message from our founder</h5>
    			<h2>Darcel Jackson</h2>
    			<p>When I was injured and lost my welding job working on the new Bay Bridge, I became homeless. I realized the longer I stayed in that condition, the harder it would become to escape it. I was lucky to find cooking classes, start a catering company, and escape homelessness. </p>
    			<p>Living on the streets, you spend most of your time trying to survive. It’s hard to find the resources and time to get trained in a new field and search for jobs. Now I want to help people find the resources they need to get their life back.</p>
    		</div>
    	</div>
    </section>
    <section className="intiatives" id="initiatives">
    	<div className="initiative-overview">
	    	<h2>Our Initiatives</h2>
	    	<ul className="initiative-list">
	    		<li>
	    			<img src={ImageInitiative1} alt="Shelter Wifi" />
	    			<h3>Shelter Wifi</h3>
	    			<small>Free internet access in shelters and SROs</small>
	    		</li>
	    		<li>
	    			<img src={ImageInitiative2} alt="AskDarcel" />
	    			<h3>AskDarcel</h3>
	    			<small>Peer-reviewed resource<br/>directory</small>
	    		</li>
	    		<li>
	    			<img src={ImageInitiative3} alt="Casey" />
	    			<h3>Casey</h3>
	    			<small>Automated resource<br/>recommendations via SMS</small>
	    		</li>
	    	</ul>
    	</div>
    	<div className="shelter-wifi">
    		<div className="content">
    			<div className="initiative-logo" style={initiativeLogo1}></div>
    			<h4>Since 2015, we've equipped one shelter and 9 SROs in San Francisco with free WiFi, providing more than 1200 underserved people with access to the Internet. </h4>
    			<p>We partner with local internet service providers to offer free WiFi in shelters and low income housing so that people can access the resources, training, and jobs that will help them get back on their feet. </p>
    			<p className="more-info">Read about it on</p>
    			<a href="http://ww2.kqed.org/news/2015/05/18/a-homeless-man-brings-wi-fi-to-san-francisco-shelters" className="kqed"><img src={ImageKQED} alt="KQED" /></a>
    		</div>
    	</div>
    	<div className="askdarcel">
    		<div className="content">
    			<div className="initiative-logo" style={initiativeLogo2}></div>
    			<h4>AskDarcel provides underserved people and case managers a peer-reviewed, continuously updated directory of resources nearby.</h4>
    			<p>When our founder Darcel Jackson was on the streets, finding work opportunities, food, and places to shower were time consuming, daily chores. AskDarcel acts as a moving referral center so people can find the services they need wherever they are.</p>
    			<p className="more-info">Read about it on</p>
    			<a href="http://www.citylab.com/cityfixer/2015/10/how-apps-can-help-and-harm-the-homeless/412780/" className="citylab"><img src={ImageCitylab} alt="Citylab" /></a>
    			<p><a href="http://askdarcel.org" className="ask-darcel-btn">Visit AskDarcel.org</a></p>
    		</div>
    	</div>
    	<div className="casey">
    		<div className="content">
    			<div className="casey-text">
    				<div className="initiative-logo" style={initiativeLogo3}></div>
	    			<h4>Casey is an interactive bot that provides local resource recommendations and low level case management.</h4>
	    			<p>Casey uses conversational language and resource data from AskDarcel to provide users with the best recommendations possible for their needs. Look out for Casey in mid 2017.</p>
	    			</div>
	    		<img src={ImageCasey} alt="Casey App" className="casey-image" />
    		</div>
    	</div>
    </section>
    <section className="team" id="team">
    	<div className="content">
	    	<h2>Our Team</h2>
	    	<p>ShelterTech is a 501c(3) non-profit organization and all members are volunteers. </p>
	    	<p>Income from events, donations, and grants are invested into improving and maintaining the technology and employing underserved community members to improve our data and products.</p>
    	</div>
    	<ul className="team-list">
    		<li className="team-list-item">
    			<img src={ImageTeam1} alt="Darcel Jackson" />
    			<p className="name">Darcel Jackson</p>
    			<p className="title">Founder</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam2} alt="Hicham Sabir" />
    			<p className="name">Hicham Sabir</p>
    			<p className="title">Project Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam3} alt="Derek Fidler" />
    			<p className="name">Derek Fidler</p>
    			<p className="title">Product Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam4} alt="Alice Henry" />
    			<p className="name">Alice Henry</p>
    			<p className="title">Operations</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam5} alt="Joe Freund" />
    			<p className="name">Joe Freund</p>
    			<p className="title">Development Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam6} alt="Chris Keone" />
    			<p className="name">Chris Keone</p>
    			<p className="title">Growth and Marketing Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam7} alt="Leland Garofolo" />
    			<p className="name">Leland Garofolo</p>
    			<p className="title">Back End Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam8} alt="Sondra Silverhawk" />
    			<p className="name">Sondra Silverhawk</p>
    			<p className="title">Mobile Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam9} alt="Avneet Chadha" />
    			<p className="name">Avneet Chadha</p>
    			<p className="title">Front End Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam16} alt="Richard Xia" />
    			<p className="name">Richard Xia</p>
    			<p className="title">Development</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam17} alt="Steph Chan" />
    			<p className="name">Steph Chan</p>
    			<p className="title">Partnerships</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam18} alt="Clem Wolf" />
    			<p className="name">Clem Wolf</p>
    			<p className="title">Partnerships</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam10} alt="John Domingo" />
    			<p className="name">John Domingo</p>
    			<p className="title">Development</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam11} alt="Brian Schroer" />
    			<p className="name">Brian Schroer</p>
    			<p className="title">Development</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam12} alt="Thomas Wolfe" />
    			<p className="name">Thomas Wolfe</p>
    			<p className="title">Development</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam13} alt="Mark Hansen" />
    			<p className="name">Mark Hansen</p>
    			<p className="title">Bot Lead</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam14} alt="James Francis Hamlin" />
    			<p className="name">James Francis Hamlin</p>
    			<p className="title">Development</p>
    		</li>
    		<li className="team-list-item">
    			<img src={ImageTeam15} alt="Wendy Chang" />
    			<p className="name">Wendy Chang</p>
    			<p className="title">Development</p>
    		</li>
    	</ul>
    </section>
    <section className="get-involved" id="get-involved">
    	<h2>Get Involved</h2>
    	<p>Sheltertech is an all volunteer organization and we're always looking for good people to join our team.</p>
    	<ul className="jobs-list">
    		<li>
    			<img src={ImageJob3} alt="Development" />
    			<h3>Development</h3>
    			<small>Mobile or full stack development</small>
    		</li>
    		<li>
    			<img src={ImageJob1} alt="Usability Testing" />
    			<h3>Usability Testing</h3>
    			<small>Improving our products for our users</small>
    		</li>
    		<li>
    			<img src={ImageJob2} alt="Partnerships" />
    			<h3>Partnerships</h3>
    			<small>Building community partnerships</small>
    		</li>
    	</ul>
    	<p>We're currently looking for the following skills, but no matter your experience, we'd love to hear from you. Contact us at info@sheltertech.org</p>
    </section>
    <section className="donate" id="donate">
    	<h2>Donate</h2>
    	<p>100% of donations go towards hiring low income and no income community members to improve our service data.</p>
    	<div className="donate-image-container">
    		<div className="donate-image-text">
    		<small>Your support has allowed us to employ our formerly homeless partners for <strong>200</strong> hours.</small>
    		</div>
    		<img src={ImageDonateBar} alt="Donation Goals" className="donate-bar-image" />
    	</div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="donate-form">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="K29R6HRSEDRF6" />
            <input className="donate-form-image" type="image" src="http://i.imgur.com/DqgcGsJ.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    	
    </section>
    <section className="contact" id="contact">
    	<h2>Contact Us</h2>
    	<p>Email</p>
    	<h3>info@sheltertech.org</h3>
    	<p>Twitter</p>
    	<h3>@sheltertechSF</h3>
    </section>
    <footer className="site-footer">
    <small>©2017 Sheltertech a 501c(3) non profit organisation • Made in San Francisco, California</small>
    </footer>
  </div>
)

export default HomeView
