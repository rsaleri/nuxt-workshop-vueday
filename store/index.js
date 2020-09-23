export const state = () => ({
  breadcrumbLinks: []
})

export const mutations = {
  SET_BREADCRUMB_LINKS (state, breadcrumbs) {
    const newBc = []
    breadcrumbs.reduce((path, bc) => {
      const newPath = `${path}${bc}`
      newBc.push({ to: newPath || '/', name: bc || 'home' })
      return newPath + '/'
    }, '')
    state.breadcrumbLinks = newBc
  }
}
