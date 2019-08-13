function handleModel(e) {
	console.log("called");
	e.target;
	var a = baseData[e.target.id],
		n = document.getElementById("modal-container");
	console.log(n), n.classList.add("active-modal");
	var i = document.getElementById("modal-inner");
	window.innerWidth < 700 ? $("body").addClass("stay") : $("#content").css({
		"z-index": "99"
	}), i.children[0].src = a.url, i.children[1].innerHTML = a.name, i.children[2].innerHTML = a.description
}

function handleClose() {
	console.log("something"), $("body").removeClass("stay"), document.getElementById("modal-container").classList.remove("active-modal"), setTimeout(function () {
		$("#content").css({
			"z-index": ""
		})
	}, 500);
	var e = document.getElementById("modal-inner");
	setTimeout(function () {
		e.children[0].src = "", e.children[1].innerHTML = "", e.children[2].innerHTML = ""
	}, 400)
}

function handleNavbar(e) {
	$("#navbar-mob").hasClass("active-nav") ? ($("#navbar-mob").css({
		opacity: 0
	}), setTimeout(function () {
		$("#navbar-mob").removeClass("active-nav")
	}, 400), $("#footer-outer,#content").removeClass("filter-transit")) : ($("#navbar-mob").addClass("active-nav"), setTimeout(function () {
		$("#footer-outer,#content").addClass("filter-transit"), $("#navbar-mob").css({
			opacity: 1
		})
	}, 100))
}

function handleNotifClose() {
	$("#snackbar").css({
		transform: "translateY(100%)"
	})
}
var baseData = [{
	url: "imgs/speakers/andrine.jpg",
	name: "Andrine Mendez",
	description: "Andrine Mendez is the Co-founder of the Smiley privilege program and the founder of Colours of Future and Indiavibes. He believes that innovations are never by accident and promotes the same thought through his various endeavours. Initially his venture which focused on training solutions alone, is now providing services in the fields of Brand Fostering, Strategy Consultants, Online gimmicks and much more. Having received substantial recognition as an entrepreneur and a blogger, Mendez is cited today as an example for the youth who think different."
}, {
	url: "imgs/speakers/arshad.jpg",
	name: "Arshad Muhammed",
	description: "Arshad Muhammed, Teen Speaker for TEDxMEC 2013 is an avid reader, and indulges in quizzing, oratory, debate and chess in his leisure time. Arshad was selected as the Aviva Young Scholar National Geographic National Champion in 2010, and has also been a regular winner of various state level Speaking Contests. He was also the national runner-up in the Hindu Young World Quiz 2011 and the Aqua Regia National Science Quiz 2011."
}, {
	url: "imgs/speakers/arvind.jpg",
	name: "Arvind Sajeev",
	description: "Described as a serial innovator, Arvind Sanjeev is credited with his creation of DIY Hacking. Formerly involved with Fin, RHL Vision as CTO, Arvind possesses a trail of recognitionsincluding Yahoo-Accenture’s ‘Most Promising Innovator’. He was featured on TechCrunch for his open source projects. Recently captured in the news for his Google Glass clone from Kochi, Arvind aims to improve the presence of open source electronics and maker community in India. He is actively involved with RideSmart, a project undertaken with support from BlackBerry. Arvind Sanjeev was selected as one of the five student entrepreneurs from Kerala as part of SV Square Initiative by StartUp Village, Kochi to visit and interact with influential companies at Silicon Valley, California. The trip was funded by the Govt. of Kerala and hosted by the Rajeev Motwani Foundation, Palo Alto. Arvind is focussed on exposing students to latest open source prototyping technologies such as Raspberry Pi and Adruino. He is currently working on a book titled ‘How To Be A Maker’."
}, {
	url: "imgs/speakers/ashwin.jpg",
	name: "Ashwin Sreenivas",
	description: "Ashwin Sreenivas, from The Choice School, Cochin was the Teen Speaker for TEDxMEC 2012. Ashwin expounded his arguments on “Reforms to the Education System”."
}, {
	url: "imgs/speakers/biju.jpg",
	name: "Biju Mathew",
	description: "Biju Mathew is the current Joint Director and the Head (Kerala) of the organisation HelpAge International. HelpAge International is a worldwide network helping the downtrodden older people attain their civil rights to economic and physical security, health care and social services, and provide moral support and care for them. The organisation which started off as a small venture, now has 74 affiliates in more than 50 countries and over 300 partners around the world ranging from associations and community-based organizations to national NGO's, academic institutions, governments and international agencies for the aged. The organisation HelpAge India is the Indian Chapter of the international organization."
}, {
	url: "imgs/speakers/captain.jpg",
	name: "Captain Radhika Menon",
	description: "The very first woman captain of the Indian merchant navy, Captain Radhika Menon understood from the very beginning that she was not cut out for the regular 9-to-5 job. She wanted to do something different. Joining the Shipping Corporation of India as a trainee radio officer, she gradually ascended the hierarchy to take command of the Merchant Ship MT Suvarna Swarajya as captain, becoming the first Indian woman to do so. Her words “I knew I would become captain one day,” is a strong motivation for the generations to come."
}, {
	url: "imgs/speakers/chitra.jpg",
	name: "Chitra Iyer",
	description: "Chitra Iyer, a renowned singer of present times, made her mark in the Malayalam film industry as a playback singer with music duo, Bernie and Ignatious. Music was Chitra’s passion since a very young age. She has training in both Carnatic as well as Hindustani music. She recorded her first album, on Udupi Krishna, in 1993 and composed the songs for the same.She was associated with budding fusion composer, Balabhaskar to do numerous albums and music videos which catapulted her to the limelight. Her first Tamil playback song was for the movie Tenali, music composed by A. R. Rahman. Chitra is an enthusiast of animal welfare. She supports elephant rehabilitation and looks after the causes of stray animals. Chitra Iyer is famous in the Malayalam film industry for her songs in Swapnakoodu and Chronic Bachelor."
}, {
	url: "imgs/speakers/deepak.jpg",
	name: "Deepak Ravindran",
	description: "Deepak Ravindran is the co-founder & CEO of Innoz, a leading mobile company based in India which was named a Red Herring Global 100 and Nasscom Top 8 Emerging Product companies for 2010. Innoz was incepted as Swades Solutions, an offshore Web design firm in 2005 while Deepak was still at high-school. He participated in the finals of DFJ-CISCO Global Business Plan Competition 2009 alongside Stanford and Georgia Tech teams. He was named one of the MIT Technology Review outstanding innovators under 35, for his innovation SMSGYAN - a mobile meta search engine over SMS.He received the Star Entrepreneurship Award for 2010. He holds a degree in Computer Science from LBS College of Engineering, Kerala, India."
}, {
	url: "imgs/speakers/dhimant.jpg",
	name: "Dhimant Vyas",
	description: "A name that stands out in the wonder world of animation is Dhimant Vyas- a creative animation film designer who worked for Zynga games, India. His animation work on the title sequence of the acclaimed hindi movie “Taare Zameen Par” stands testimony to his vivid design skills. Projects such as Shaun the Sheep series 2, Purple & Brown and Creature Comforts have won him Academy awards and various national and international accolades. He has created magic in almost all manifestations of art viz. Character Design, Concept Artwork, Sketches, Caricatures, Cartoons, Photography, Sculptures and more. Know more on Dhimant Vyas : http://www.dhimantvyas.com"
}, {
	url: "imgs/speakers/diwia.jpg",
	name: "Diwia Thomas",
	description: "The founder of Papertrail, a social entrepreneurship venture that began in 2008, Diwia Thomas involves women from all strata of society in making newspaper bags. She manages an extensive supply chain of newspaper donators, bag makers and customers. Some of their bags even sail the seas. Papertrail operates in 5 locations across Kerala and touches the lives of countless women, from the educated and healthy to the abandoned, physically challenged and even adivasis who live on the fringe of Kerala’s forests. Empowering the women financially is her goal. Her vibrant personality and gentle words have motivated many women to move up in life. She is a writer by profession and is currently engaged in Content Strategy for the web.To know more about Papertrails work visit : http://www.facebook.com/papertrailindia"
}, {
	url: "imgs/speakers/hormis.jpg",
	name: "P. K. Hormis Tharakan",
	description: "P. K. Hormis Tharakan, an IPS officer of the Kerala cadre (1968 batch) was chief of the Research and Analysis Wing (R&AW), India's external intelligence agency from February 1, 2005 to January 31, 2007.He retired from the Indian Police Service in January 2007, after serving as Director General of Police, Kerala and Secretary (R) in the Cabinet Secretariat, Government of India. After retirement, he served as Advisor to the Second Administrative Reforms Commission on Counter-terrorism and as Advisor to the Governor of Karnataka during President's Rule. Currently, he is a Member of the National Security Advisory Board, Member of the Advisory Committee of the Centre for Strategic Initiatives being set up by the Department of Science and Technology, Government of India at the Indian Institute of Science, Bangalore, Chief Advisor (Strategic Studies), BrahMos Aerospace and Visiting Professor at the Department of Geopolitics, Manipal University.Apart from being upright and sober, he is an effective leader. He brought about a transformation in the Kerala police. A 1968 batch Indian Police Service officer, he has served the country with distinction for 39 years. He studies and writes on issues of strategic interest."
}, {
	url: "imgs/speakers/jayen.jpg",
	name: "Jayen Varma",
	description: "World renowned bass guitarist Mr. Jayen Varma made it to the pinnacle of experimenting and exploring the possibilities of his favorite musical instrument- Indian Bass Guitar; he innovated the idea of Indian Slap Bass- the novel technique of applying tabla and mridangam based movements on bass guitar. The innovation has bestowed on him accolades from across the world and an Official World Record too.World’s great bass guitarists like Jeff Berlin, Bootsy Collins, and Marcus Miller reckons him as potential musician. At TEDxMEC 2012, Jayen shall create a whole new magic with bass guitar.Know more on Jayen Varma : http://www.jayenvarma.net/"
}, {
	url: "imgs/speakers/jithin.jpg",
	name: "Jithin C Nedumala",
	description: "Jithin C Nedumala is the founder of Make a Difference (MAD) and is currently involved with the organization. An IIM Lucknow alumnus, he has successfully utilized his people management skills to organize the activities of MAD. He has been involved in imparting education in various orphanages and has personally conducted more than 1500 hours of classroom sessions. Today, MAD functions in 11 cities across India and it is his vision to provide quality education to the last rung of the economic ladder. His organization has given a platform for the interaction between the children and the youth who want to help. From career guidance to financial help, Jithin has been constantly directing his efforts for the welfare of these children. He truly has the potential to ‘right every wrong’ in the Indian context and bring a change for the better."
}, {
	url: "imgs/speakers/joby.jpg",
	name: "Joby Mathew",
	description: "Joby Mathew is a 33 year old athlete from Kerala, India who won the World Arm Wrestling title in Spain in 2008. Mr Mathew is 3 foot 5 inch tall and suffers from severely under-developed legs, a condition caused by Proximal Femoral Focal Deficiency (PFFD). But with outstanding confidence and unquenchable thirst to defeat his fate, he relentlessly trained himself to gain the upper body strength that brought him the world championship in arm wrestling. So far Joby Mathew has bagged 5 medals - a gold, a silver and three bronzes on the international stage which incorporates championship in general category as well."
}, {
	url: "imgs/speakers/kalamandalam.jpg",
	name: "Kalamandalam Krishnakumar",
	description: "Kalamandalam Krishnakumar is an eminent and professional Kathakali artist who has played a pivotal role in spreading the elegance and charm of the elite art form of kerala- Kathakali. With a Diploma (6 years) from the prestigious Kerala Kalamandalam and a two year special training in Kathakali from the Department of Culture, Govt. of India, Mr. Krishnakumar has performed in many dance theatre festivals at national and international levels. Besides he had a two year training in Bharathanatyam from Kalakshethra, Adayar, Madras. He practised Kathakali under veteran artists like Kalamandalam Raman Kutty Nair and Kalamandalam Padmanabhan Nair, and handles with ease the Sathwik as well as villainous characters of puranas."
}, {
	url: "imgs/speakers/korath.jpg",
	name: "Korath V Mathew",
	description: "An alumnus of National Defence Academy, Korath V Mathew, is a true enthusiast of the Right to Information Act. He has carried out Business Process Re-Engineering studies that include redefining roles and responsibilities of people and bringing about change in management for successful implementation of computerized solutions. An expert in cyber security, Korath V Mathew was cyber security officer of the corps. Just prior to retirement from the Army, he was involved in shaping an IT project worth over 1000 crores which involved networking over 500 stations in India using MPLS- VPN, installing a VOIP based Tele-network and implementation of an ERP solution."
}, {
	url: "imgs/speakers/liji.jpg",
	name: "Liji Jinaraj",
	description: "Liji Jinaraj is a versatile entrepreneur focused on design and development. He is a proven photographer and the creator of Tweeple of India. Tweeple of India is simply a directory of twitter users. The updates of the twitter users can be easily accessed this way. He believes in the idea of “Change your mind, change your world.”In this edition of TEDxMEC, he shared his views on ‘@Actnowon’. This is basically a silent revolution that shows how individual acts can add up to a change in the society. It is powered by twitter. It’s all about stopping your work and spending fifteen minutes on a relevant action related to the tweet."
}, {
	url: "imgs/speakers/m.jpg",
	name: "Santosh Hedge",
	description: "A veteran social figure, who has adorned the epitome positions of law and order in India, N. Santosh Hegde was the Supreme Court Chief Justice during the tenure 1999- 2005. With his belief that injustice anywhere is a threat to justice everywhere, he served impartially for the country’s tussle towards a corruption free India. As the Lokayukta of Karnataka, Mr. Hegde demystified the supremacy of political power and raised his voice against the violations of laws and breaches of trust. At TEDxMEC 2012, Santosh Hegde sparked fire on his the dream of India sans corruption. For more on Mr. Hegde, visit http://en.wikipedia.org/wiki/N._Santosh_Hegde"
}, {
	url: "imgs/speakers/narayanan.jpg",
	name: "Narayan Krishnan",
	description: "A celebrated chef with Taj Hotels, Bangalore with future prospects of an elite position in Switzerland, Narayanan Krishnan was all set to define his future when his plans took a sudden detour. He witnessed an old man in ragged clothes sitting by the road-side in a pathetic state. Moved by this distressing sight, he proceeded to a nearby eatery and bought food for him. The incident created a lasting impression on Mr. Krishnan, who quit his job and went on to set up the Akshaya Trust in 2003 to help the needy and poor. Today, Akshaya Trust ensures food and shelter to around 425 indigent and elderly people. For the outstanding example set by him in the care of the needy and destitute, he was honoured as one of CNN’s ‘Heroes of 2010’."
}, {
	url: "imgs/speakers/nelvin.jpg",
	name: "Nelvin Joseph",
	description: "Nelvin Joseph is a successful entrepreneur in the field of Artificial Intelligence and Green Technology. The winner of the IEEE (Institute of Electrical and Electronics Engineers) Best Engineer Award, Nelvin revolutionized the Global Energy Market. Inspired by the man- machines in the movie Terminator, Nelvin decided to have his own companyway back in his second grade. Around 17 years hence, Nelvin, a B.Tech graduate, started his own company that works for a “Technology that Thinks for Us”. Artin Dynamics, is a product-oriented company with a dedicated R&D division on artificial intelligence. Commenced in April 2008, their proposal was soon selected by TBI Technopark for incubation. The achievement made it the youngest company and Nelvin, the youngest CEO to be based in the Technopark. Artin Dynamics is easily among the first in India to work exclusively in the AI domain, and in merging Hi-tech with clean tech. To its credit, the company has already launched its first product, SPARA, which helps reduce the power bill of enterprises by addressing an everyday issue – automatically switching off electronic devices that are not in use."
}, {
	url: "imgs/speakers/nisha.jpg",
	name: "Nisha Purushothaman",
	description: "In this world where the presence of women in positions of influence and power is ever increasing, a woman in the expanse of photography, especially from India, still remains hard to believe. Nisha Purushothaman aims to banish these boundaries set by outdated conventions by venturing out into wild to capture the beauty surrounding us on lens. BBC has selected one of Ms. Purushothaman’s pictures for this year’s ‘Photographer of the Year Award’ out of 80,000 entries from 89 countries. A graduate of Fine Arts from the College of Fine Arts, Thiruvananthapuram, Nisha made her introduction to photography as a student of Applied Arts. She has the distinction of having many of her pictures being published in numerous magazines and websites, including six times in the Wild Bird Photography section of National Geographic. She is also actively involved in ‘Shades of Life’, a conservation project."
}, {
	url: "imgs/speakers/praveen.jpg",
	name: "Praveen Paul",
	description: "Praveen Paul is the CEO of Kochivibe- an online magazine that revolves around the city of Kochi. As an online endeavor that tracks and traces every pulse of the city, Kochivibe has gained substantial popularity within a short span of time. Everything from the fashion nights celebrated in the metro to the socially relevant issues of the time like women security and driving etiquette gets discussed here. Through Kochivibe, Mr. Paul not only initiated a novel media approach but also successfully experimented the vast possibilities of social media networks on the cloud. Truly fresh in style and presentation, Kochivibe currently talks about everyday living, shifting from its initial emphasis on the city events alone. The venture has been noted and appreciated for its pace of growth and novelty."
}, {
	url: "imgs/speakers/ram.jpg",
	name: "Ram Kumar R",
	description: "Ram Kumar R is the founder and CEO of Dreamajax Technologies Private Limited. A business startup on his own was a burning passion for Mr. Ram Kumar despite his experience being just 8 months in an industry. He commenced with freelancing and amidst various initial hurdles and struggles found success in the same. Today Dreamajax Tech. is one among India’s leading consultant companies in the Web Programming and Application Development arena. Within a short span of two years, Mr. Ram has grown into one of the world’s top 10 independent consultants, with emphasis provided on Ad Delivery Engine (Adservers) and Wireless Sensor Networks and catering to the needs of more than 500 clients."
}, {
	url: "imgs/speakers/rituja.jpg",
	name: "Rituja Ravikiran Rao",
	description: "Rituja Ravikiran Rao from Fergusson Junior College, Pune was our Teen Speaker for TEDxMEC 2014. Rituja believes that her voice can make a difference and through TEDxMEC, she is confident she will attain the same. A Horlicks WizKid WizTeam winner, Rituja moved the stage with the ‘Little Lost Lass’, a theatrical depiction involving the transformation of an Indian teenage girl blossoming into a woman. This bright teenager was chosen as one of the best delegates at Model United Nations (MUN) and was also the winner of the ICAI National Debate Competition."
}, {
	url: "imgs/speakers/sabriye.jpg",
	name: "Sabriye Tenberken & Paul Kronenberg",
	description: "Sabriye Tenberken is an inspiration for people from all walks of life to dream big and realise their dreams. Sabriya was born in Germany. She gradually became visually impaired and by the age of thirteen she was completely blind due to retinal disease. While doing a course on Central Asian Studies at Bonn University she focused on modern and classical Tibetan in combination with Sociology and Philosophy. No blind student had ever before ventured to enroll in this kind of studies.So she developed a Tibetan Braille script for the blind in 1992, which became the official script for the blind in Tibet. In 1997, Sabriye travelled to Tibet alone in order to assess the situation of the blind there. Returning in 1998, she founded the Centre for the Blind in Lhasa, the capital of Tibet, to educate the blind. The centre which started with five children and Sabriya herself teaching grew into a big project with the assistance of Paul Kronenberg who had been working for the Red Cross in Shigatse. In 1998 Paul joined Sabriya in establishing the Project for the Blind, Tibet. In September 2002 the project adopted the name Braille Without Borders. In addition to the school in Lhasa, BWB runs a farm and cheese factory for the vocational training of adults near Shigatse and is planning an International School for Development and Project Planning near Trivandrum, India."
}, {
	url: "imgs/speakers/sajitha.jpg",
	name: "Sajita Nair",
	description: "Sajita Nair served in the Indian Army as a Captain till 1999. After which she decided to follow her long passion as a writer. Her short stories, articles and travelogues have been published in reputed print and online publications such as The New Indian Express, Femina Magazine, New Woman Magazine, Transitions Abroad (USA) and many more. Among other laurels she has won the contests conducted by the Kala Ghoda Literary Festival and Sulekha.com. Her debut novel, titled 'She's a Jolly Good Fellow' which was published by Hachette India in April 2010 and received rave reviews from the reading community."
}, {
	url: "imgs/speakers/sanjay.jpg",
	name: "Sanjay Manaktala",
	description: "Sanjay Manaktala isn't your average NRI. Born in the US, he came back to India after his job got outsourced and began his comedic endeavors in the process. Silly, intelligent, self deprecating and refreshingly relaxed is how he describes his act. A techie at heart, he likes to poke fun at life's big problems. He is a regular at the Canvas Laugh Factory and the Comedy Store properties across Mumbai and Delhi. He has also been featured on CNN.com, Forbes India, TOI and various other publications. When he's not performing, he occasionally writes for DNA, actively pushes his youtube.com/SanjayComedy channel and works in a comedy troupe (facebook.com/PolishedBottoms)"
}, {
	url: "imgs/speakers/soorya.jpg",
	name: "Soorya Krishnamoorthy",
	description: "Soorya Krishnamoorthy is the founder-director of the SOORYA Stage and Film Society.The Society, based in Trivandrum, organizes the Soorya Festival- the most prestigious cultural event in India. It promotes Indian arts and culture all over the world. The Soorya Festival, conducted annually, lasts for more than a hundred days in which the finest and the most accomplished artists in Indian classical dances and music participate. Over the years, Soorya has opened chapters in Singapore, Malaysia, London (U.K) and other prime locations all over the world. Soorya has the the aim of achieving “Integration through Culture”  and promoting Indian culture. Soorya Krishnamoorthy is a pioneer of the Light and Sound show in Malayalam. He has also ventured into the first ever mobile Light and Sound Show and a new theatrical art form - “THEATRE OF FREEDOM” . This theatre movement also has completed 30 years. He has also written, conceived and directed various stage shows."
}, {
	url: "imgs/speakers/sreelakshmi.jpg",
	name: "Sreelakshmi Suresh",
	description: "An exceptionally brilliant 15- year old, Sreelakshmi Suresh made media and dailies focus on her when she became the youngest CEO of the world at the age of 10. Her company eDesign Technologies emphasizing on web design and developments reflects her epitome skills and passion for the same. Sreelakshmi who designed websites for the bar council and other government organisations is the “youngest web designer” of the world. She is the youngest ever member of the Association of American Webmasters and has bagged national and international honors including the prestigious Global Internet Directories and the Golden Web awards. The Association of American Webmasters, who has made her a member of the society, testifies that she is their youngest and the only member under 18 years of age. The Republic of India honored her talent by conferring her the National Child Award for Exceptional Achievement in 2008."
}, {
	url: "imgs/speakers/t.jpg",
	name: "T.P. Sreenivasan",
	description: "Diplomat, Ambassador, Author, Producer, T.P. Sreenivasan has many roles. An iconic figure in the field of multilateral diplomacy, T.P. Sreenivasan is currently the Vice-Chairman and Executive Head of the Kerala State Higher Education Council. A former Permanent Representative of India to the United Nations and Governor for India of the IAEA, he retired from the highest level of Indian Foreign Service in 2004 with 37 years of diplomatic experience behind him. Author of several books notably ‘Words, Words, Words—Adventures in Diplomacy’ and ‘Encounters’, he also produced the famous TV programme titled ‘Videsha Vicharam’. To know more about Mr. T.P. Sreenivasan, log on to : www.tpsreenivasan.com"
}
, {
	url: "imgs/speakers/2018/clifin.jpg", // id=30
	name: "Clifin Francis",
	description: "Clifin Francis, former MECian gained attention from media worldwide when he cycled all the way to Russia, to watch the world Cup."
}
, {
	url: "imgs/speakers/2018/Mohammed.jpg",
	name: "K Mohammed Y Safirulla",
	description: "K Mohammed Y Safirulla IAS was the district collector of Ernakulam. He bagged the 55th rank in the 2009 Civil Service Examination on his first attempt, without even leaving his job. He has, in his career as District Collector, paved the way for numerous developments, including the efforts for prevention of Dengue and his wisdom during the time of the Kerala floods avoided widespread havoc. Mr. Safirulla has also won the best collector award from The State Women and Child Development Department, as a recognition of his meritorious service in the field of child development and related areas in 2017-18."
}, {
	url: "imgs/speakers/2018/Jessica.jpg",
	name: "Jessica Mundroina",
	description: "Jessica has over 2 decades of experience in diverse professional roles. She has worked in the Hospitality, Aviation, Banking and Civil Services among other domain industries, both in India and United Kingdom."
}, {
	url: "imgs/speakers/2018/BruceLee.jpg",
	name: "Bruce Lee Mani",
	description: "Back when Rock music was alien to us, Bruce Lee Mani made a phenomenal mark by bringing it within our grasps. Hear the Pioneer of Indian Rock bare his soul on his remarkable journey from the realm of teaching to a world of music."
}, {
	url: "imgs/speakers/2018/Vishak.jpg",
	name: "Vishak Nair",
	description: "In this fast moving world where people get busier by the minute, we often forget to take a break and just relax Follow one of Kerala’s most charismatic young actors as he speaks about following ones passion and taking the time to laugh."
}, {
	url: "imgs/speakers/2018/Rajagopal.png",
	name: "Dr Rajagopal",
	description: "Dr T P Rajagopal one of the first responders of the Nipah outbreak will speak about how modern medicine is improvising and adapting to overcome pandemics."
}, {
	url: "imgs/speakers/2018/Achyuth.jpg",
	name: "Achyuth Jaigopal",
	description: "Playing guitar since the age of 10, Achyuth's has been part of The Raghu Dixit Project (2015-17), and has played over 250 concerts across India and countries like the UK, Sri Lanka, USA, Canada, Spain, Indonesia, Singapore and Bhutan."
}, {
	url: "imgs/speakers/amit.png", // id=37
	name: "Amit Singh",
	description: "Amit Singh is the CEO & Co-Founder of www.outsiteVR.com and is ranked amongst India's TOP 24 budding entrepreneurs, selected by DS Group & NETWORK18."
}, {
	url: "imgs/speakers/kalki.png",
	name: "Kalki Subramaniam",
	description: "Kalki Subramaniam is a transgender right activist, actor and the founder director of Sahodari Foundation. At TEDxMEC, she will talk about the future of Transgenders in India."
}, {
	url: "imgs/speakers/srikant.png",
	name: "Mr. Srikant Suryanarayanan",
	description: "Srikant Surayanarayanan is the founder and chairman of Ishika Farms. At TEDxMEC, he will talk about why sustainable practises are the need of the hour and how it needs to be incorporated."
}, {
	url: "imgs/speakers/knraghavan.png",
	name: "Dr. K. N Raghavan",
	description: "Dr. K. N Raghavan, IRS is the CEO of NORKA ROOTS and former Customs Commissioner of Kochi. At TEDxMEC, he will talk about why following one&#39;s passion is not always the best move."
}];
$(document).ready(function () {
	$(".detail-view").click(handleModel), $("#close-modal").click(handleClose)
}), $(document).ready(function () {
	$("#navbar-button").click(handleNavbar), $("#close-notif").click(handleNotifClose), console.log("heelo"), setTimeout(function () {
		$("#snackbar").addClass("show-notif")
	}, 10)
});
var wrapperMenu = document.querySelector(".wrapper-menu");
wrapperMenu.addEventListener("click", function () {
	wrapperMenu.classList.toggle("open")
});