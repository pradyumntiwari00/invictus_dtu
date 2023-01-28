import './TechEvents.css'
import Footer from "./Footer/Footer"

const openAirCompetitions = [
    {img: require('../images/logo.png'),idx: 1, name: " Robo War", location: "TBA", DDT: "13-15th February 2023", about: "Robowars - Robots fight in an arena", regLink: "https://unstop.com/p/robosoccer-by-sr-dtu-invictus-23-invictus-23-delhi-technological-university-dtu-new-delhi-597117"},
    {img: require('../images/logo.png'),idx: 2, name: "Robo Soccer", location: "TBA", DDT: "13-15th February 2023", about: "A robot based football competition. Participants will have to use their robots to score goals.", regLink: ""},
    {img: require('../images/logo.png'),idx: 3, name: "Roborace", location: "", DDT: "13-15th February 2023", about: "Roborace - Robots race in an obstacle course", regLink: ""},
    {img: require('../images/logo.png'),idx: 4, name: "LFR", location: "", DDT: "13-15th February 2023", about: "LFR - Line following Robot maze competition", regLink: ""},
    {img: require('../images/logo.png'),idx: 5, name: "Quidditch", location: "", DDT: "13-15th February 2023", about: "A drone obstacle race event. Maneuvering the drones through the obstacle course to score points.", regLink: "https://unstop.com/p/quidditch-by-sr-dtu-invictus-23-invictus-23-delhi-technological-university-dtu-new-delhi-597098"},
    {img: require('../images/logo.png'),idx: 6, name: "Hydrojet", location: "", DDT: "13-15th February 2023", about: "Participants need to make a structurally stable hydrojet launcher which must be able to launch a bottle to a certain height and make it land as far as possible from the launching area.", regLink: "https://unstop.com/p/invictus-23-delhi-technological-university-dtu-new-delhi-593480"},
]

const quizzes = [
    {img: require('../images/logo.png'),idx: 1, name: "The LabRats Quiz", location: "TBA", DDT: "13-15th February 2023", about: "A technical quiz competition will be organized spanning topics from research to practical application of natural sciences that will assess the practical, theoretical and general knowledge in the field of biotechnology and natural sciences.", regLink: "https://unstop.com/p/lab-rats-quiz-on-health-and-nutrition-invictus-23-delhi-technological-university-dtu-new-delhi-593815"},
    {img: require('../images/logo.png'),idx: 2, name: "Mathletics", location: "TBA", DDT: "13-15th February 2023", about: "A quiz involving mathematical equations and questions.", regLink: "https://unstop.com/p/matheletics-invictus-23-delhi-technological-university-dtu-new-delhi-593580"},
    {img: require('../images/logo.png'),idx: 3, name: "Environmental Quiz", location: "", DDT: "13-15th February 2023", about: "The aim of the quiz will be to spread awareness about various social and environmental causes through a professional and practical lens.", regLink: "https://unstop.com/p/gen-tech-quiz-invictus-23-delhi-technological-university-dtu-new-delhi-593214"},
    {img: require('../images/logo.png'),idx: 4, name: "Tech Challenge", location: "", DDT: "13-15th February 2023", about: "NeuralAI,DTU brings an amazing challenge which provides participants to apply their technical knowledge and skills to solve challenges including real-world problems.", regLink: ""},
    {img: require('../images/logo.png'),idx: 5, name: "Todo-en-Uno", location: "", DDT: "13-15th February 2023", about: "This will be a tech based quiz held in offline mode on pen-paper. It would be a 1 round event containing questions related to tech history, current trends and many other related to tech domains.", regLink: ""},
    {img: require('../images/logo.png'),idx: 6, name: "The Demystification", location: "", DDT: "13-15th February 2023", about: "An intriguing Physics and Astronomy quiz where participants will be asked several interesting questions based on astronomy and related disciplines. ", regLink: "https://unstop.com/p/the-demystification-quiz-invictus-23-delhi-technological-university-dtu-new-delhi-593133"},
]

const Hackthon_Ideathon = [
    {img: require('../images/logo.png'),idx: 1, name: "Digithon", location: "TBA", DDT: "13-15th February 2023", about: "A verilog hardware description language based problem solving competition", regLink: "https://unstop.com/p/digithon-invictus-23-delhi-technological-university-dtu-new-delhi-590480"},
    {img: require('../images/logo.png'),idx: 2, name: "Poster presentation on AI ", location: "TBA", DDT: "13-15th February 2023", about: "Poster presentation competition on the given problem statement related to AI in healthcare and medtech devices and associated technology.", regLink: "https://unstop.com/p/poster-presentation-competition-on-ai-in-healthcare-invictus-23-delhi-technological-university-dtu-new-delhi-593836"},
    {img: require('../images/logo.png'),idx: 3, name: "Brainwave", location: "", DDT: "13-15th February 2023", about: "It would be an Arduino based design Challenge. Problem Statements would be released online through Google Forms and Instagram and the participants would be assigned topics ", regLink: "https://unstop.com/p/brainwave-invictus-23-delhi-technological-university-dtu-new-delhi-596762"},
    {img: require('../images/logo.png'),idx: 4, name: "Envision", location: "", DDT: "13-15th February 2023", about: "This will be a system design hackathon where the teams will be given a system design problem and they will have to come up with an efficient real-life solution that is scalable", regLink: "https://unstop.com/p/envision-invictus-23-delhi-technological-university-dtu-new-delhi-590459"},
    {img: require('../images/logo.png'),idx: 5, name: "Research Hackathon", location: "", DDT: "13-15th February 2023", about: "The teams will be set on a 30-hour time bomb to solve a problem based on the field they picked.They'll present their work in front of a panel of eminent professors or Ph.D. scholars from the department of physics.", regLink: "https://unstop.com/p/research-hackathon-astronomy-invictus-23-delhi-technological-university-dtu-new-delhi-593149"},
]

const codingEvents = [
    {img: require('../images/logo.png'),idx: 1, name: "Codelocks", location: "TBA", DDT: "13-15th February 2023", about: "A coding based showdown competition in which participants will be placed in 1v1 knockout matches.", regLink: "https://unstop.com/p/codelocks-invictus-23-indian-game-theory-society-592769"},
    {img: require('../images/logo.png'),idx: 2, name: "Reverse Engineering", location: "TBA", DDT: "13-15th February 2023", about: "Participants will be given an Encode.py and they’ll be required to reverse-engineer the file. They’ll be expected to find a relationship between the input and output file and code a decoder.py file that takes in input and returns an output.", regLink: "https://unstop.com/p/reverse-engineering-invictus-23-delhi-technological-university-dtu-new-delhi-592953"},
    {img: require('../images/logo.png'),idx: 3, name: "Code Script", location: "", DDT: "13-15th February 2023", about: "The Website design tournament would span over about 4 hours. All the participants will be challenged to design a website within the given time span and on a given theme.", regLink: "https://unstop.com/p/codescript-website-designing-tournament-invictus-23-delhi-technological-university-dtu-new-delhi-593651"},
    {img: require('../images/logo.png'),idx: 4, name: "ERROR 404", location: "", DDT: "13-15th February 2023", about: "Error 404 is a debugging event in which participants will be given codes which they have to debug as there will be 2 stages and we will eliminate participants based on their performance in each stage", regLink: "https://unstop.com/p/error-404-invictus-23-delhi-technological-university-dtu-new-delhi-592920"},
]

const caseStudies = [
    {img: require('../images/logo.png'),idx: 1, name: "Case Study", location: "TBA", DDT: "13-15th February 2023", about: "It will consist of business case study on topics like Product Management, Analytics, Business Plan etc.", regLink: "https://unstop.com/p/ecopreneurs-20-stride-for-sustainable-resolutions-invictus-23-delhi-technological-university-dtu-new-delhi-593849"},
]

const ai_summit = [
    {img: require('../images/logo.png'),idx: 1, name: "Interview with Chat-GPT", location: "TBA", DDT: "13-15th February 2023", about: "The participants shall come and actually go through the interview on a simulated ChatGPT bot given by us.",regLink:""},
    {img: require('../images/logo.png'),idx: 2, name: "Statistica", location: "TBA", DDT: "13-15th February 2023", about: "Participants are thrown a number of questions in a time bound manner related to Statistics in Online Assessment mode. They may choose their own level depending upon their proficiency.", regLink:""},
    {img: require('../images/logo.png'),idx: 3, name: "Techno Vision", location: "TBA", DDT: "13-14th February 2023", about: "This will be a research Showcase competition where the participants who have done any research in their fields will be showcasing it into the conference and the winner will be announced based on the impact factor of his/her research into the real world and some other judging criterias to cooperate for the unpublished research.",regLink:"https://unstop.com/p/techno-vision-invictus-23-delhi-technological-university-dtu-new-delhi-590462"},
    {img: require('../images/logo.png'),idx: 4, name: "Bots", location: "TBA", DDT: "13-14th February 2023", about: "Bots - It will be a 3hr online coding competition hosted on any one of the coding platforms.",regLink:"https://unstop.com/p/bytes-invictus-23-delhi-technological-university-dtu-new-delhi-590439"},
    {img: require('../images/logo.png'),idx: 5, name: "Object Recognition Challenge", location: "TBA", DDT: "13-14th February 2023", about: "Participants are given a bunch of complex numbers and operations to do. They may do so using Python libraries. Based on it they shall be assigned a jar containing a bunch of chits with QR Codes. Each QR Code gives a certain image. The participants are to make a model using ML and OpenCV which detects the object in image and tells its shape, color, etc.",regLink:""},
    {img: require('../images/logo.png'),idx: 6, name: "Seminar Neural AI", location: "TBA", DDT: "13-14th February 2023", about: "",regLink:""},
]
const other_competitions = [
    {img: require('../images/logo.png'),idx: 1, name: "3D Pro", location: "TBA", DDT: "13-15th February 2023", about: "",regLink:""},
    {img: require('../images/logo.png'),idx: 2, name: "Stratazenith", location: "TBA", DDT: "13-15th February 2023", about: "The event consists of several intriguing mind-games based on day-to-day situations. Participants will face each other in an elimination based format.", regLink:"https://unstop.com/p/stratazenith-invictus-23-indian-game-theory-society-592875"},
    {img: require('../images/logo.png'),idx: 3, name: "Chess Warfare", location: "TBA", DDT: "13-14th February 2023", about: "An individual-based event, in which players will compete with each other in the game of chess. The tournament will follow an elimination-based system.",regLink:"https://unstop.com/p/chess-warfare-invictus-23-macs-dtu-in-association-with-invictus23-593650"},
    {img: require('../images/logo.png'),idx: 4, name: "Bridge Building", location: "TBA", DDT: "13-15th February 2023", about: "The event will comprise a bridge-making task out of ice cream sticks according to the given dimensions. The construction and testing activities involved in bridge building test the practical and real-life application skills and principles of civil engineering.",regLink:"https://unstop.com/p/bridge-building-competition-invictus-23-delhi-technological-university-dtu-new-delhi-593825"},
    {img: require('../images/logo.png'),idx: 5, name: "Financial Cricket", location: "TBA", DDT: "13-15th February 2023", about: "An IPL Auction that places players in their respective teams, as chosen by the owners of the teams themselves.",regLink:"https://unstop.com/p/financial-cricket-invictus-23-society-for-industrial-and-applied-mathematics-dtu-593663"},
    {img: require('../images/logo.png'),idx: 6, name: "Decrypter’s Dilemma", location: "TBA", DDT: "13-15th February 2023", about: "A hunt involving features from both treasure hunts and cryptic hunts.",regLink:""},
    {img: require('../images/logo.png'),idx: 7, name: "De-Cyber", location: "TBA", DDT: "13-15th February 2023", about: "A debugging and decryption based competition with a cyber war theme.",regLink:"https://unstop.com/p/de-cyber-invictus-23-delhi-technological-university-dtu-new-delhi-593547"},
    {img: require('../images/logo.png'),idx: 8, name: "Web O Mania", location: "TBA", DDT: "13-15th February 2023", about: "",regLink:""},
    {img: require('../images/logo.png'),idx: 9, name: "Design Pro", location: "TBA", DDT: "13-15th February 2023", about: "It will be a graphic designing based competition followed by an engaging workshop on graphic designing and basic Photoshop.",regLink:""},
    {img: require('../images/logo.png'),idx: 10, name: "Anime Decoder", location: "TBA", DDT: "13-15th February 2023", about: "A cryptographic quiz competition based on famous Anime.",regLink:"https://unstop.com/p/anime-decoder-invictus-23-society-for-industrial-and-applied-mathematics-dtu-593674"},
    {img: require('../images/logo.png'),idx: 11, name: "Greedy Knight", location: "TBA", DDT: "13-15th February 2023", about: "A chess based puzzle competition in which a participant will have to collect the maximum number of coins placed on the chess board using the KNIGHT pawn.",regLink:"https://unstop.com/p/greedy-knight-invictus-23-delhi-technological-university-dtu-new-delhi-593869"},
]

const exhibition = [
    {img: require('../images/logo.png'),idx: 1, name: "Action Lab", location: "TBA", DDT: "13-15th February 2023", about: "Participants will be required to demonstrate and explain a usual or lesser-known daily life scientific phenomenon.", regLink:"The Action Lab by Delhi Technological University (DTU), New Delhi! // Unstop (formerly Dare2Compete)"},
]
const symposium = [
    {img: require('../images/logo.png'),idx: 1, name: "Symposium(SIAM)", location: "TBA", DDT: "13-15th February 2023", about: "Professors and academicians from different colleges are invited to a guest lecture and interactive session with the students.",regLink: ""},
    {img: require('../images/logo.png'),idx: 2, name: "Panel Discussion", location: "TBA", DDT: "13-15th February 2023", about: "This event will comprise a panel discussion with industry experts from across India (IAS, IPS, and/or IFS) on different topics. The discussion will include the role of technology in environmental modeling and will deliberate upon the growing intersection of the technological field with environmental sustainability.",regLink: "https://unstop.com/p/panel-discussion-by-industry-experts-invictus-23-delhi-technological-university-dtu-new-delhi-593195"},
    {img: require('../images/logo.png'),idx: 3, name: "Game Theory Talks", location: "TBA", DDT: "13-15th February 2023", about: "The event is a seminar based on the basics of Game Theory and Decision Making delivered by special speaker Mr. Manoj Gadia(Founder, IGTS).",regLink: "https://unstop.com/p/the-art-of-winning-understanding-game-theory-invictus-23-indian-game-theory-society-592964"},
]
const miscellaneous = [
    {img: require('../images/logo.png'),idx: 1, name: "S-Pave", location: "TBA", DDT: "13-15th February 2023", about: "This will be a management conference where industry leaders from management and entrepreneurship world will share their views/thoughts on emerging business and management topics through their insightful speakers sessions and panel discussions.",regLink: ""},
    {img: require('../images/logo.png'),idx: 2, name: "S-Pac", location: "TBA", DDT: "13-15th February 2023", about: "This will be a conference where industry experts from various fields would be giving out their insightful views to the students for choosing out their career paths.",regLink: ""},
]

const TechEvents = () => {
    return (
        <>
            <div className='back-img'>
                <div className="main">
                    <h1 className='my-5 font'>Open Air Competition</h1>
                    <ul className="cards1">

                        {
                            openAirCompetitions.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Quizzes</h1>
                    <ul className="cards1">

                        {
                            quizzes.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Coding Events</h1>
                    <ul className="cards1">

                        {
                            codingEvents.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Case Study</h1>
                    <ul className="cards1">

                        {
                            caseStudies.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Hackthon and Ideathon</h1>
                    <ul className="cards1">

                        {
                            Hackthon_Ideathon.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>AI Summit</h1>
                    <ul className="cards1">

                        {
                            ai_summit.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Other Competitions</h1>
                    <ul className="cards1">

                        {
                            other_competitions.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Exhibition</h1>
                    <ul className="cards1">

                        {
                            exhibition.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Symposium</h1>
                    <ul className="cards1">

                        {
                            symposium.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Miscellaneous</h1>
                    <ul className="cards1">

                        {
                            miscellaneous.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href={element.regLink} rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TechEvents