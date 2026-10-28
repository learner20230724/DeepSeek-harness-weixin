const DSH_RELEASE = '0.2.0-rc.2'

function pinDshRelease(dependencies) {
  for (const name of Object.keys(dependencies ?? {})) {
    if (name.startsWith('@deepseek-ai/dsh-')) dependencies[name] = DSH_RELEASE
  }
}

module.exports = {
  hooks: {
    readPackage(pkg) {
      pinDshRelease(pkg.dependencies)
      pinDshRelease(pkg.optionalDependencies)
      pinDshRelease(pkg.peerDependencies)
      return pkg
    },
  },
}
