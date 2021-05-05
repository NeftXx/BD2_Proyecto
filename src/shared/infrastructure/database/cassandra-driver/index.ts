import cassandra from "cassandra-driver";

const authProvider = new cassandra.auth.PlainTextAuthProvider(
  process.env.CASSANDRA_USERNAME,
  process.env.CASSANDRA_PASSWORD
);
const contactPoints = [process.env.CASSANDRA_IP];

const client = new cassandra.Client({
  contactPoints,
  localDataCenter: process.env.CASSANDRA_DATA_CENTER,
  authProvider,
  keyspace: process.env.CASSANDRA_KEYSPACE,
});

export default client;
