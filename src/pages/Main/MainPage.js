import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import styles from './MainPage.module.scss';
import MainPageImages from '../../data/MainPageImages';
import Logo from '../../component/Layout/Logo';
import MouseFollower from '../../component/Layout/MouseFollower';
import SlideAlert from '../../component/Alert/SlideAlert';

function MainPage() {
  const [currentProject, setCurrentProject] = useState({ id: '', title: '', category: '' });
  const navigate = useNavigate();

  useEffect(() => {
    let sections = document.querySelectorAll(`.${styles.section}`),
      images = document.querySelectorAll(`.${styles.background}`),
      outerWrappers = document.querySelectorAll(`[class*="${styles.wrapperOuter}"]`),
      innerWrappers = document.querySelectorAll(`[class*="${styles.wrapperInner}"]`);

    let currentIndex = -1;
    let wrap = (index, max) => (index + max) % max;
    let animating;

    const gotoSection = (index, direction) => {
      index = wrap(index, sections.length);
      animating = true;

      let timeline = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false)
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        timeline.to(images[currentIndex], { yPercent: -15 * direction })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      timeline.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i) => (i ? -100 * direction : 100 * direction) },
        { yPercent: 0 },
        0
      ).fromTo(images[index], { yPercent: 15 * direction }, { yPercent: 0 }, 0)

      currentIndex = index;

      setCurrentProject(MainPageImages[index]);
    }

    const handleWheel = (event) => {
      if (!animating) {
        const direction = event.deltaY > 0 ? 1 : -1;
        gotoSection(currentIndex + direction, direction);
      }
    }

    const handleTouch = (e) => e.changedTouches[0].screenY;

    const addEventListeners = () => {
      window.addEventListener('wheel', handleWheel);

      let touchStartY = 0;
      window.addEventListener('touchstart', (e) => {
        touchStartY = handleTouch(e);
      });
      
      window.addEventListener('touchend', (e) => {
        const touchEndY = handleTouch(e);
        if (!animating) {
          const direction = touchEndY < touchStartY ? 1 : -1;
          gotoSection(currentIndex + direction, direction);
        }
      });
    };

    const removeEventListeners = () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touch', handleTouch);
    }

    gotoSection(0, 1);
    addEventListeners();

    return () => removeEventListeners();
  }, []);

  const handleSectionClick = (category, title) => {
    navigate(`/list/${encodeURIComponent(category)}/${encodeURIComponent(title)}`);
  };

  return (
    <>
      <Logo />
      <MouseFollower />

      <SlideAlert direction="vertical" storageKey="mainPageAlertShown" />

      <p className={styles.copyright}>@ 2024</p>

      <div className={styles.container}>
        <div>
          <p>{currentProject.id} &mdash; 014</p>
          <p>{currentProject.title}</p>
          <p>{currentProject.category}</p>
        </div>
        <p>scroll</p>
      </div>

      {MainPageImages.map((project, index) => (
        <Section
          key={project.id}
          id={project.id}
          title={project.title}
          bgUrl={project.bgurl}
          onClick={() => handleSectionClick(project.category, project.title)}
        />
      ))}
    </>
  );
}

const Section = ({ id, bgUrl, onClick }) => {
  return (
    <section id={id} className={styles.section} onClick={onClick}>
      <div className={styles.wrapperOuter}>
        <div className={styles.wrapperInner}>
          <Link to={`/list`}>
            <div className={`${styles.background} mouse-hover`} style={{ backgroundImage: `url(${encodeURIComponent(bgUrl)})` }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainPage;