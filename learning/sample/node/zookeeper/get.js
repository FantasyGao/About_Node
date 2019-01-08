var zookeeper = require('node-zookeeper-client');
 
var client = zookeeper.createClient('10.255.72.237:2181');
var path = process.argv[2];
 
function listChildren(client, path) {
    client.getChildren(
        path,
        function (event) {
            console.log('Got watcher event: %s', event);
            listChildren(client, path);
        },
        function (error, children, stat) {
            if (error) {
                console.log(
                    'Failed to list children of %s due to: %s.',
                    path,
                    error
                );
                return;
            }
 
            console.log('Children of %s are: %j.', path, children);
        }
    );
}
 
client.once('connected', function () {
    console.log('Connected to ZooKeeper.');
    listChildren(client, path);
});
 
client.connect();