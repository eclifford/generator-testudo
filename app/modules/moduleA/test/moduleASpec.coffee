define ['modules/moduleA/main'], (ModuleA) ->

  describe "A test spec", ->
    it "should work", ->
      expect(true).to.equal(true)
      # expect($('body')).to.exist

    # it "should really work", ->
    #   expect(true).to.equal(true)

    # it "should add", ->
    #   m = new ModuleA()
    #   result = m.add(1, 2)
    #   expect(result).to.equal(3)
