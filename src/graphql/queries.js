/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPortfolio = /* GraphQL */ `
  query GetPortfolio($id: ID!) {
    getPortfolio(id: $id) {
      id
      name
      artifacts {
        items {
          id
          title
          content
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPortfolios = /* GraphQL */ `
  query ListPortfolios(
    $filter: ModelPortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        artifacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtifact = /* GraphQL */ `
  query GetArtifact($id: ID!) {
    getArtifact(id: $id) {
      id
      title
      content
      portfolioID
      portfolio {
        id
        name
        artifacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          artifactID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArtifacts = /* GraphQL */ `
  query ListArtifacts(
    $filter: ModelArtifactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtifacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        portfolioID
        portfolio {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      artifactID
      artifact {
        id
        title
        content
        portfolioID
        portfolio {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artifactID
        artifact {
          id
          title
          content
          portfolioID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
