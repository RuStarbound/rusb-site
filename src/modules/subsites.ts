import { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient)
    return

  router.beforeEach((to, _, next) => {
    // Assign a layout based on subsite path
    to.meta.layout = to.path.substring(1, (`${to.path}/`).indexOf('/', 1)) || to.meta.layout

    next()
  })
}
