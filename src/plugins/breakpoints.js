// ref: https://dev.to/jsbaguette/tailwind-vuejs-breakpoint-reactivity-2al7

import { onMounted, reactive } from 'vue'

const screens = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

const xs = val => val >= screens.xs && val <= screens.sm
const sm = val => val >= screens.sm && val <= screens.md
const md = val => val >= screens.md && val <= screens.lg
const lg = val => val >= screens.lg && val <= screens.xl
const xl = val => val >= screens.xl && val <= screens.xxl
const xxl = val => val >= screens.xxl

const breakpoints = reactive({ w: 0, h: 0, sm: false, md: false, ls: false, xl:false, xxl:false, is: 'xs' })

const getBreakpoint = w => {
  if (xs(w)) return 'xs'
  else if (sm(w)) return 'sm'
  else if (md(w)) return 'md'
  else if (lg(w)) return 'lg'
  else if (xl(w)) return 'xl'
  else if (xxl(w)) return 'xxl'
  else return 'all'
}

const setBreakpoint = () => {
  breakpoints.w = window.innerWidth
  breakpoints.h = window.innerHeight
  breakpoints.xs = window.innerWidth > screens.xs
  breakpoints.sm= window.innerWidth > screens.sm,
  breakpoints.md= window.innerWidth > screens.md,
  breakpoints.lg= window.innerWidth > screens.lg,
  breakpoints.xl= window.innerWidth > screens.xl,
  breakpoints.xxl= window.innerWidth > screens.xxl,
  breakpoints.is = getBreakpoint(window.innerWidth)
}

const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint()
    window.addEventListener('resize', () => {
      setBreakpoint()
    })
  })

  return breakpoints
}

export default useBreakpoint