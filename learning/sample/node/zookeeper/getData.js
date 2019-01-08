var zookeeper = require('node-zookeeper-client');
 
var client = zookeeper.createClient('10.255.72.237:2181');
var path = process.argv[2];
 
function listChildren(client, path) {
  client.getData(
    path,
    function (event) {
        console.log('Got event: %s.', event);
    },
    function (error, data, stat) {
        if (error) {
            console.log(error.stack);
            return;
        }
  
        console.log('Got data: %s', data.toString('utf8'));
    }
  );
}
 
client.once('connected', function () {
    console.log('Connected to ZooKeeper.');
    listChildren(client, path);
});
 
client.connect();
