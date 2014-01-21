module.exports =
  src: "#{process.env.GRUNT_BASE_PATH}/tests/acceptance/features"
  options:
    steps: "#{process.env.GRUNT_BASE_PATH}/tests/acceptance/step_definitions"
    format: "pretty"
