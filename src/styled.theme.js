const theme = {}
const rem = px => `${px / 16}rem`

// colors

theme.mainColor  = `#0063FF`
theme.mainColorTransparent = `rgba(0, 99, 255, .2)`;
theme.darkColor = `#636363`
theme.lightColor = `#B0B0B0`
theme.badgeColor = '#FF6363'
theme.categorieColors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f1c40f', '#e67e22', '#e74c3c', '#f39c12', '#d35400', '#c0392b']


// Typography

// Font-Family
theme.fontFamily = `'Raleway', Helvetica, sans-serif`
// Scale - 1.414
theme.superSmallFontSize = rem(5.66)
theme.extraSmallFontSize = rem(8)
theme.smallFontSize = rem(11.32)
theme.normalFontSize = rem(16)
theme.largeFontSize = rem(22.62)
theme.extraLargeFontSize = rem(31.99)
theme.superLargeFontSize = rem(45.23)


// Spacing
theme.superSmallSpacingSize = rem(2)
theme.extraSmallSpacingSize = rem(4)
theme.smallSpacingSize = rem(8)
theme.normalSpacingSize = rem(16)
theme.largeSpacingSize = rem(32)


// Z-Level
theme.behind = -2500
theme.normalLevel = 1000
theme.frontLevel = 2500


// Border
theme.smallBorder = rem(4)
theme.normalBorder = rem(8)

// Size Icons

theme.smallIconSize = rem(8)
theme.normalIconSize = rem(16)
theme.largeIconSize = rem(24)

export default theme