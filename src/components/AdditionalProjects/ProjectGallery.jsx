import styled from 'styled-components';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';
import { projectData } from '../../data/projectData';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';
import { StyledProjectGallery } from '../../styles/AdditionalProjects/AdditionalProjectsLayout/StyledProjectGallery';
import GalleryItem from './GalleryItem';
import { buttonVariant, parentProjectVariants } from '../../utils/animations';
import { CONSTANTS } from '../../constants';

const ProjectGallery = () => {
  const shouldReduceMotion = useReducedMotion();
  const { showMoreProjects, toggleMoreProjects } = useGlobalContext();
  return (
    <>
      <AnimatePresence>
        {showMoreProjects && (
          <>
            <StyledProjectGallery
              key={crypto.randomUUID()}
              initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
              animate='visible'
              variants={parentProjectVariants}
              exit='exit'
            >
              {projectData
                .slice(CONSTANTS.FEATURED_PROJECT_CUTOFF)
                .map(project => {
                  return <GalleryItem key={project.id} project={project} />;
                })}
              <StyledProjectButton
                variants={buttonVariant}
                initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
                animate='visible'
                exit={shouldReduceMotion ? 'noMotion' : 'exit'}
                onClick={() => toggleMoreProjects()}
              >
                show less
              </StyledProjectButton>
            </StyledProjectGallery>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
