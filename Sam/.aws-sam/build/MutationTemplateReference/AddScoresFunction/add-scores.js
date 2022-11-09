const aws = require("aws-sdk");
const rds = new aws.RDSDataService();

exports.handler = async (event) => {
  console.log("EVENT: ", event);
  const secretArn = process.env.SECRETARN;
  const resourceArn = process.env.CLUSTERARN;
  const databaseName = process.env.DATABASENAME;
  const input = event.arguments.input;

  const game_type = input.game_type;
  const overall_round = input.overall_round;
  const tyler_round_one = input.tyler_round_one;
  const tyler_round_two = input.tyler_round_two;
  const tyler_round_three = input.tyler_round_three;
  const tyler_round_four = input.tyler_round_four || 0;
  const tyler_round_five = input.tyler_round_five || 0;
  const tyler_round_six = input.tyler_round_six || 0;
  const tyler_round_seven = input.tyler_round_seven || 0;
  const tyler_round_eight = input.tyler_round_eight || 0;
  const tyler_round_nine = input.tyler_round_nine || 0;
  const tyler_total_round_score = input.tyler_total_round_score;
  const tyler_comments = input.tyler_comments;
  const sam_round_one = input.sam_round_one;
  const sam_round_two = input.sam_round_two;
  const sam_round_three = input.sam_round_three;
  const sam_round_four = input.sam_round_four || 0;
  const sam_round_five = input.sam_round_five || 0;
  const sam_round_six = input.sam_round_six || 0;
  const sam_round_seven = input.sam_round_seven || 0;
  const sam_round_eight = input.sam_round_eight || 0;
  const sam_round_nine = input.sam_round_nine || 0;
  const sam_total_round_score = input.sam_total_round_score;
  const sam_comments = input.sam_comments;

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
  await runSqlCommand(
    "INSERT INTO game_scores (player_id, game_type, overall_round, round_one, round_two, round_three, round_four, round_five, round_six, round_seven, round_eight, round_nine, total_round_score, comments) VALUES(1, '" +
      game_type +
      "', " +
      overall_round +
      ", " +
      tyler_round_one +
      ", " +
      tyler_round_two +
      ", " +
      tyler_round_three +
      ", " +
      tyler_round_four +
      ", " +
      tyler_round_five +
      ", " +
      tyler_round_six +
      ", " +
      tyler_round_seven +
      ", " +
      tyler_round_eight +
      ", " +
      tyler_round_nine +
      ", " +
      tyler_total_round_score +
      ", '" +
      tyler_comments +
      "'), (2, '" +
      game_type +
      "', " +
      overall_round +
      ", " +
      sam_round_one +
      ", " +
      sam_round_two +
      ", " +
      sam_round_three +
      ", " +
      sam_round_four +
      ", " +
      sam_round_five +
      ", " +
      sam_round_six +
      ", " +
      sam_round_seven +
      ", " +
      sam_round_eight +
      ", " +
      sam_round_nine +
      ", " +
      sam_total_round_score +
      ", '" +
      sam_comments +
      "')"
  );
};
