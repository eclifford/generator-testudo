#
# Setup Karma w/ Require
# Find all specs in the modules and load them.
#
# @author Eric Clifford
#
tests = []
for file of window.__karma__.files
  if window.__karma__.files.hasOwnProperty(file)
    specRgx = new RegExp("unit/.*/[0-9A-Za-z]*Spec.js")
    tests.push file if specRgx.test(file)

requirejs.config

  # Karma serves files from '/base'
  baseUrl: "/base/.tmp"

  # ask Require.js to load these files (all our tests)
  deps: tests

  # start test run, once Require.js is done
  callback: window.__karma__.start

  # add a known DOM element to the page for appending test elements
  document.body.innerHTML += "<div id='fixtures'></div>"
