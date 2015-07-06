'use strict'

module.exports = function fail (err) {
  console.error(err)
  if (err instanceof Error) console.error(err.stack)
  process.exit(1)
}
