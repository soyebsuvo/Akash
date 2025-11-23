import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Timeline() {
    return (
        <div className='mt-6 font-Montserrat'>
            <VerticalTimeline>                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
                    date="2021 - present"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor Of Honours Degree</h3>
                    <h4 className="vertical-timeline-element-subtitle">3rd year, History - Ongoing</h4>
                    <p>
                        Dinajpur Govt College, Dinajpur, Bangladesh
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
                    date="2019 - 2023"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Diploma in Agriculture</h3>
                    <h4 className="vertical-timeline-element-subtitle">Agriculture - 3.66/4.00</h4>
                    <p>
                        Alhaj Shafiuddin Ahmed Karigori Mohabiddalaya, Panchagarh, Bangladesh
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
                    date="2018 - 2020"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Humanities - 4.67/5.00</h4>
                    <p>
                        Siddique Memorial School and College, Rangpur, Bangladesh
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #1e2024' }}
                    date="2016 - 2018"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Seconday School Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Humanities - 4.00/5.00</h4>
                    <p>
                        Balarampur High School, Atwari, Panchagarh , Bangladesh
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
                    date="2014 - 2015"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Junior School Cerficate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Completed with 4.25/5.00</h4>
                    <p>
                        Balarampur High School, Atwari, Panchagarh , Bangladesh
                    </p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow: '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
                    contentArrowStyle={{ borderRight: '7px solid #1e2024' }}
                    date="2023 - 2024"
                    iconStyle={{ background: '#FF014F', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Development Course</h3>
                    <h4 className="vertical-timeline-element-subtitle">MERN - Programming Hero</h4>
                    <p>
                        It was an online platform. I have completed the web development course by Jhankar Mahbub
                    </p>
                </VerticalTimelineElement> */}
                {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow : '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
    date="April 2013"
    iconStyle={{ background: '#FF014F', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement> */}
                {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow : '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
    contentArrowStyle={{ borderRight: '7px solid #1e2024' }}
    date="November 2012"
    iconStyle={{ background: '#FF014F', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement> */}
                {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(145deg, #1e2024, #23272b)', color: '#fff', boxShadow : '10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e' }}
    contentArrowStyle={{ borderRight: '7px solid #23272b' }}
    date="2002 - 2006"
    iconStyle={{ background: '#FF014F', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
                {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  /> */}
            </VerticalTimeline>
            <hr className="border-b border-[0px] mb-8 mt-8 border-black" />
        </div>
    )
}
