import styled from 'styled-components';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';
import { projectData } from '../../data/projectData';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';
import GalleryItem from './GalleryItem';
import { buttonVariant, parentProjectVariants } from '../../utils/animations';
import { CONSTANTS } from '../../constants';

const StyledProjectGallery = styled(motion.section)`
  padding: 0rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  /* max-width: 120rem; */
  display: grid;
  row-gap: 4rem;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  position: relative;
  /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr)); */
  /* background-color: black; */

  & div {
    border-radius: 0.2rem;
    /* height: 4rem; */
  }

  & button:last-child {
    grid-column: -3 / 2;
  }
`;

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
