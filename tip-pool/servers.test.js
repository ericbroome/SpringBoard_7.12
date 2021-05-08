describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('Should update the servertable element on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();
    let tds = document.querySelectorAll('#serverTable tbody tr td');
    expect(tds.length).toEqual(3);
    expect(tds[0].innerText).toEqual('Alice');
    expect(tds[1].innerText).toEqual('$0.00');
    expect(tds[2].innerText).toEqual('X');  //We do have a delete button

  });

  afterEach(function() {
    restoreDOM();
  });
});

