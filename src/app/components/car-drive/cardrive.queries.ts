import { gql } from 'apollo-angular';

export const GET_USER_PROFILE = gql`
query carDrive(
    $where: t_NA_CarDriveFilterInput
    $order: [t_NA_CarDriveSortInput!]
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    carDrive(
      where: $where
      order: $order
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        f_ID
        f_DriveBy
        f_StartKM
        f_PlaceFrom
        f_DateStart
        f_PlaceTo
        f_DateEnd
        f_EndKM
        f_TotalKM
        f_FuelId
        f_Notes
        f_Active
        f_CreatedDate
      }
    }
  }
  
`;