import React from 'react';
import img1 from '../img/team/team-1.jpg'
import img2 from '../img/team/team-2.jpg'
import img3 from '../img/team/team-3.jpg'
import img4 from '../img/team/team-4.jpg'
import img5 from '../img/team/team-5.jpg'
import img6 from '../img/team/team-6.jpg'


const TeamMember = ({imgSrc, name, title, bio}) => {
  return (
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 member" data-aos="fade-up">
      <div className="member-img">
        <img src={imgSrc} className="img-fluid" alt={name} />
      </div>
      <div className="member-info text-center">
        <h4>{name}</h4>
        <span>{title}</span>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const Team = ({imgSrc, name, title, bio}) => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        <div className="flex flex-wrap  gy-5">
          <TeamMember
            imgSrc={img1}
            name="Walter White"
            title="Chief Executive Officer"
            bio="Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow"
          />
          <TeamMember
            imgSrc={img2}
            name="Sarah Jhonson"
            title="Product Manager"
            bio="Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut"
          />
          <TeamMember
            imgSrc={img3}
            name="William Anderson"
            title="CTO"
            bio="Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui"
          />
          <TeamMember
            imgSrc={img4}
            name="Amanda Jepson"
            title="Accountant"
            bio="Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur"
          />
          <TeamMember
            imgSrc={img5}
            name="Brian Doe"
            title="Marketing"
            bio="Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          />
          <TeamMember
            imgSrc={img6}
            name="Karen Masters"
            title="Business Development"
            bio="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
