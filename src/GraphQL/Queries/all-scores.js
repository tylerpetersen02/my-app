import { gql } from "@apollo/client";

const GET_ALL_SCORES = gql`
  query MyQuery {
    allScores {
      id
      game_type
      player_id
      overall_round
      round_one
      round_two
      round_three
      round_four
      round_five
      round_six
      round_seven
      round_eight
      round_nine
      total_round_score
      comments
      created_timestamp
    }
  }
`;

export default GET_ALL_SCORES;

// {
//   "input": {
//       "game_type": "Golf",
//       "overall_round": 1,
//       "tyler_round_one": 1,
//       "tyler_round_two": 2,
//       "tyler_round_three": 3,
//       "tyler_total_round_score": 6,
//       "tyler_comments": "sup",
//       "sam_round_one": 1,
//       "sam_round_two": 2,
//       "sam_round_three": 3,
//       "sam_total_round_score": 6,
//       "sam_comments": "yo"
//   }
// }
