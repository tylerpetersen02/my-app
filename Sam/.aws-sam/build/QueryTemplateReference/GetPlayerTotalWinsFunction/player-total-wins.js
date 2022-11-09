const aws = require("aws-sdk");
const rds = new aws.RDSDataService();

exports.handler = async (event) => {
  console.log("EVENT: ", event);
  const secretArn = process.env.SECRETARN;
  const resourceArn = process.env.CLUSTERARN;
  const databaseName = process.env.DATABASENAME;
  const input = event.arguments.input;

  const runSqlCommand = async (query) => {
    console.log("QUERY: ", query);
    // SQL PARAMS FOR QUERIES
    const sqlParams = {
      secretArn: secretArn,
      resourceArn: resourceArn,
      sql: query,
      database: databaseName,
      includeResultMetadata: true,
    };

    try {
      return await rds.executeStatement(sqlParams).promise();
    } catch (e) {
      console.log(e);
    }
  };

  // SET IS_COMPLETE TRUE/FALSE IN USER_ACTION_FEED TABLE FOR SPECIFIC USER
  const getPlayerTotalWins = await runSqlCommand(
    "SELECT total FROM total_wins WHERE player_id = " + input.player_id
  );
  console.log(getPlayerTotalWins.records[0]);
  const playerTotalWins = getPlayerTotalWins.records[0][0].longValue;
  console.log("hello");

  return playerTotalWins;
};
