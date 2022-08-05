import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = ({ open }) => (
  <Section nopadding id="projects" open={open}>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, index) => {
        return (
          <BlogCard key={index}>
          <Img src={project.image} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{project.description}</CardInfo>
            <div>
              <br />
              <TitleContent><b>Tech Stack</b></TitleContent>
              <TagList>
                {project.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </TagList>
            </div>
              <UtilityList>
                {project.backendCode ? 
                  <ExternalLinks href={project.backendCode} target="_blank">Backend Code</ExternalLinks>
                : <p></p>}
                {project.frontendCode ?
                  <ExternalLinks href={project.frontendCode} target="_blank">Frontend Code</ExternalLinks>
                : <p></p>}
                {project.source ?
                  <ExternalLinks href={project.source} target="_blank">Website</ExternalLinks>
                  : <p>No Frontend Website</p>
                }
              </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;