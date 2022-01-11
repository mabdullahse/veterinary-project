import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* ------------------- */
/* Custom properties   */
/* ------------------- */

:root {
    /* colors */
    --clr-primary: 13 97% 65%;
    --clr-text-secondary: 228 28% 20%;
    --clr-text-tertiary: 0 0% 45%;
    --clr-background: 13 100% 99% 100%;
    
    /* font-sizes */
    --fs-900: 3.625rem; //h1
    --fs-800: 2.5rem; // h2
    --fs-700: 1.5rem; // h3
    --fs-600: 1.25rem; // h4
    --fs-500: 1rem; // h5
    --fs-400: 0.875rem; // p
    --fs-300: 0.75rem;
    
    /* font-families */
    --ff-serif: 'Montserrat', sans-serif;
}

::selection {
  background-color: #FC724D;
  color: white;
}

@media (min-width: 35em) {
    :root {
        /* font-sizes */

    }
}

@media (min-width: 45em) {
    :root {
        /* font-sizes */
        
    }
}


/* ------------------- */
/* Reset               */
/* ------------------- */


/* Box sizing */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}



/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


 

/* set up the body */
body {
    font-family: var(--ff-serif);
    font-size: var(--fs-400);
    color: hsl( var( --clr-text-tertiary));
    background-color: hsl( var(--clr-background));
    line-height: 1.5;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
}
 
/* ------------------- */
/* Utility classes     */
/* ------------------- */

/* general */

.flex {
    display: flex;
    gap: var(--flex-gap, 1rem);
}

.flex-space-between {
  justify-content: space-between;
}
.flex-justify-content-center {
  justify-content: center;
}

.flex-align-center {
   align-items: center;
}
.flex-column {
  flex-direction: column;
}

.grid {
    display: grid;
    gap: var(--grid-gap, 1rem);
}

.d-block {
    display: block;
}

.flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
}

.flow--space-small {
    --flow-space: .75rem;
}

.container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: 80rem;
}

.p-1 {
  padding: 1rem;
}

.mt-0 {
  margin-top: 0;
}

.mt-1 {
  margin-top: 1rem;
}

.mb-1 {
  margin-bottom: 1rem;
}

.pb-5 {
  padding-bottom: 5rem;
}

.text-center {
  text-align: center;
}

.p-relative {
  position: relative;
}
.flex-1 {
  flex: 1;
}
.cursor-pointer {
  cursor: pointer;
}


.sr-only {
  position: absolute; 
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px; 
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
}

.skip-to-content {
    position: absolute;
    z-index: 9999;
    background: hsl( var(--clr-white) );
    color: hsl( var(--clr-dark) ); 
    padding: .5em 1em;
    margin-inline: auto;
    transform: translateY(-100%);
    transition: transform 250ms ease-in;
}

.skip-to-content:focus {
    transform: translateY(0);
}

/* colors */

.bg-primary { background-color: hsl( var(--clr-primary) );}
.bg-secondary { background-color: hsl( var(--clr-text-tertiary) / 0.1 );}


.text-primary { color: hsl(var(--clr-primary));}
.text-secondary { color: hsl( var(--clr-text-secondary) / 1 );}
.text-tertiary { color: hsl( var(--clr-text-tertiary) );}

.font-bold {
  font-weight: bold;
}
/* typography */

.ff-serif { font-family: var(--ff-serif); } 
.ff-sans-cond { font-family: var(--ff-sans-cond); } 
.ff-sans-normal { font-family: var(--ff-sans-normal); } 

.letter-spacing-1 { letter-spacing: 4.75px; } 
.letter-spacing-2 { letter-spacing: 2.7px; } 
.letter-spacing-3 { letter-spacing: 2.35px; } 

.uppercase { text-transform: uppercase; }

.fs-900 { font-size: var(--fs-900); }
.fs-800 { font-size: var(--fs-800); }
.fs-700 { font-size: var(--fs-700); }
.fs-600 { font-size: var(--fs-600); }
.fs-500 { font-size: var(--fs-500); }
.fs-400 { font-size: var(--fs-400); }
.fs-300 { font-size: var(--fs-300); }

.fs-900,
.fs-800,
.fs-700,
.fs-600 {
    line-height: 1.1;
}


/* ------------------- */
/* nav               */
/* ------------------- */

.logo {
  min-width: 8rem;
  height: 56px;
}

.primary-navigation {
  --gap: clamp(1.5rem, 5vw, 3.5rem);
  list-style: none;
  padding: 0;
  margin: 0;
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation a > span {
  font-weight: 700;
  margin-right: .5em;
}

.primary-header {
  padding-bottom: 0px;
  min-height: 22rem;
}


.bg-dashboard-image {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 20rem;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  border-radius: 10px;
}


.main-section-shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;
  border-radius: 8px;
}

.product-img {
  width: 16rem;
  height: 16rem;
  object-fit: cover;
}
.image-item {
  width: 16rem !important;
}

.carousel-container {
    margin: 1.3125rem;
}

.fancy-color {
  background-image: linear-gradient(90deg, red, blue);
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background 500ms ease-in-out;
}

.fancy-color:hover {
  background-size: 80% 3px;
}

.footer {
  position: fixed;
    bottom: 0;
    width: 100%;
}

`;

export default GlobalStyle;
