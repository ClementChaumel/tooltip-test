import { css } from 'styled-components'

const desktopScreen = 1280
const tabletScreen = 1024
const mobileScreen = 600

// Uses: Page backgrounds, Text colours, emphasis, disabled states
const neutralPalette = {
    almostWhite: '#F9FBFC',
    greyLightest: '#F3F4F5',
    greyLighter: '#E2E5E8',
    grey: '#BFC5CB',
    greyDarker: '#6F7D8A',
    graphite: '#3D5265',
    graphiteDarker: '#283643',
    almostBlack: '#021524',
}

const colours = {
    // Primary orange, Used for primary CTA button / clickable elements
    orange: '#F78105',
    orangeDarker: '#FA7126',
    orangeDarkest: '#E96A00',
    orangeLighter: '#FFA269',

    // Brand blue, Used for interactive elements - sliders, active forms etc.
    blue: '#303AB2',
    blueDarker: '#252F85',
    blueLighter: '#7179D2',

    // Eligibility colours, Used for the eligibility scale
    turquoise: '#04AEB5',
    turquoiseDarker: '#028388',
    greenDarkest: '#127860',
    greenDarker: '#18AE71',
    green: '#9DE89F',
    wasabi: '#9DE89F',
    amber: '#FAE376',
    reddy: '#FF7B77',

    // Error colors
    errorBrown: '#9c3438',
    errorPeach: '#f7cbcc',

    // Misc
    boxShadowGrey: '#9e9e9e',
}

const semanticColourPalette = {
    disabled: neutralPalette.grey,
    textColour: neutralPalette.graphiteDarker,

    // Eligibility scores
    preApproved: colours.greenDarkest,
    excellent: colours.greenDarker,
    veryGood: colours.green,
    good: colours.green,
    average: colours.amber,
    low: colours.reddy,
}

const media = {
    mediaMediumPlus: (...args) => css`
        @media only screen and (min-width: ${mobileScreen + 1}px) {
            ${css(...args)};
        }
    `,
    mediaLargePlus: (...args) => css`
        @media only screen and (min-width: ${tabletScreen + 1}px) {
            ${css(...args)};
        }
    `,
    mediaXL: (...args) => css`
        @media only screen and (min-width: ${desktopScreen + 1}px) {
            ${css(...args)};
        }
    `,
    mediaMediumMinus: (...args) => css`
        @media only screen and (max-width: ${mobileScreen}px) {
            ${css(...args)};
        }
    `,
    mediaLargeMinus: (...args) => css`
        @media only screen and (max-width: ${tabletScreen}px) {
            ${css(...args)};
        }
    `,
    internetExplorer: (...args) => css`
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
            ${css(...args)};
        }
    `,
}

function grid() {
    return `
		display: grid;
		grid-column-gap: 3px;
		grid-template-columns: repeat(12, 1fr);

		@media only screen and (min-width: ${mobileScreen + 1}px){
			grid-column-gap: 10px;
		}
		@media only screen and (min-width: ${tabletScreen + 1}px) {
			grid-column-gap: 25px;
		}
	`
}

const cap = 10

const spacing = {
    spacer2xs: `${cap * 0.5}px`,
    spacerXs: `${cap}px`,
    spacerSm: `${cap * 1.5}px`,
    spacerMd: `${cap * 2.5}px`,
    spacerLg: `${cap * 4}px`,
    spacerXl: `${cap * 6.5}px`,
    spacer2xl: `${cap * 10.5}px`,
}

function containerPadding() {
    return `
	    padding-right: ${spacing.spacerSm};
	    padding-left: ${spacing.spacerSm};

	    @media only screen and (min-width: ${mobileScreen + 1}px){
	        padding-right: ${spacing.spacerMd};
	        padding-left: ${spacing.spacerMd};
	    }
	    @media only screen and (min-width: ${tabletScreen + 1}px) {
	        padding-right: ${spacing.spacerLg};
	        padding-left: ${spacing.spacerLg};
	    }

		@media only screen and (min-width: ${desktopScreen + 1}px) {
	        padding-right: 0;
	        padding-left: 0;
	        width: 1200px;
	        margin: 0 auto;
	    }
	}
	`
}

function fade(colour, opacity) {
    return colour + Math.ceil(opacity * 255).toString(16)
}

function icon(img) {
    return `
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url(${img});
	`
}

const fontFamilies = {
    lato:
        "'Lato', 'Helvetica Neue', 'Segoe UI', 'Lucida Sans', 'Arial', 'Verdana', sans-serif",
    sansPro:
        "'Source Sans Pro', 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Lucida Sans', 'Arial', 'Verdana', sans-serif",
}

export default {
    ...media,
    ...spacing,
    ...neutralPalette,
    ...colours,
    ...semanticColourPalette,
    ...fontFamilies,

    grid,
    containerPadding,
    fade,
    icon,
}
