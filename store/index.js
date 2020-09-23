export const state = () => ({
  breadcrumbLinks: []
})

export const mutations = {
  SET_BREADCRUMB_LINKS (state, breadcrumbs) {
    const newBc = [{ to: '/', name: 'home' }]
    breadcrumbs.reduce((path, bc) => {
      const newPath = `${path}/${bc}`
      newBc.push({ to: newPath, name: bc })
      return newPath
    })
    state.breadcrumbLinks = newBc
  }
}
