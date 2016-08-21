/* eslint-env node, mocha */
const expect = require('chai').expect
const reqMock = require('gw2e-requester/mock')

const Module = require('../../src/endpoints/itemstats.js')

describe('endpoints > itemstats', () => {
  let endpoint
  beforeEach(() => {
    endpoint = new Module(false)
    reqMock.reset()
    endpoint.requester = reqMock
  })

  it('test /v2/itemstats', async () => {
    expect(endpoint.isPaginated).to.equal(true)
    expect(endpoint.isBulk).to.equal(true)
    expect(endpoint.supportsBulkAll).to.equal(true)
    expect(endpoint.isLocalized).to.equal(true)
    expect(endpoint.isAuthenticated).to.equal(false)
    expect(endpoint.url).to.equal('/v2/itemstats')

    reqMock.addResponse({id: 1, name: 'Healing'})
    let content = await endpoint.get(1)
    expect(content.name).to.equal('Healing')
  })
})
