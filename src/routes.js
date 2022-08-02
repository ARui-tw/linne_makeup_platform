import index from './views/index.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Awards from './views/Awards.vue'
import Expert from './views/Expert.vue'
import MakeupPapers from './views/MakeupPapers.vue'
import MakeupPhotos from './views/MakeupPhotos/index.vue'
import MakeupPhotosUpload from './views/MakeupPhotos/Upload.vue'
import MakeupPhotosCertificate from './views/MakeupPhotos/Certificate.vue'
import MakeupScore from './views/MakeupScore/index.vue'
import MakeupScoreRelative from './views/MakeupScore/Relative.vue'
import MakeupScoreRelativeCertificate from './views/MakeupScore/RelativeCertificate.vue'
import MakeupScoreAbsolute from './views/MakeupScore/Absolute.vue'
import MakeupScoreAbsoluteCertificate from './views/MakeupScore/AbsoluteCertificate.vue'

import NotFound from './views/NotFound.vue'

import auth from './middleware/auth.js'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [

  { path: '/', component: index },
  { path: '/home', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About Us' } },
  { path: '/awards', component: Awards, meta: { title: 'Award' } },
  { path: '/expert', component: Expert, meta: { title: 'Expert' } },
  { path: '/makeupPapers', component: MakeupPapers, meta: { title: 'Makeup Papers' } },
  { path: '/makeupPhotos', component: MakeupPhotos, meta: { title: 'Makeup Photos' } },
  { path: '/makeupPhotos/upload', component: MakeupPhotosUpload, meta: { title: 'Makeup Photos Upload' } },
  { path: '/makeupPhotos/certificate', component: MakeupPhotosCertificate, meta: { title: 'Makeup Photos Certificate' } },
  { path: '/makeupScore', component: MakeupScore, meta:
    { 
      title: 'Makeup Score', 
      // middleware: auth
    }
  },
  { path: '/makeupScore/relative', component: MakeupScoreRelative, meta: { title: 'Makeup Score Relative' } },
  { path: '/makeupScore/relative/certificate', component: MakeupScoreRelativeCertificate, meta: { title: 'Makeup Score Relative' } },
  { path: '/makeupScore/absolute', component: MakeupScoreAbsolute, meta: { title: 'Makeup Score Absolute' } },
  { path: '/makeupScore/absolute/certificate', component: MakeupScoreAbsoluteCertificate, meta: { title: 'Makeup Score Absolute' } },
  { path: '/:path(.*)', component: NotFound },
]
