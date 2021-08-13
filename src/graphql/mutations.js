/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPortfolio = /* GraphQL */ `
  mutation CreatePortfolio(
    $input: CreatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    createPortfolio(input: $input, condition: $condition) {
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
export const updatePortfolio = /* GraphQL */ `
  mutation UpdatePortfolio(
    $input: UpdatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    updatePortfolio(input: $input, condition: $condition) {
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
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio(
    $input: DeletePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    deletePortfolio(input: $input, condition: $condition) {
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
export const createArtifact = /* GraphQL */ `
  mutation CreateArtifact(
    $input: CreateArtifactInput!
    $condition: ModelArtifactConditionInput
  ) {
    createArtifact(input: $input, condition: $condition) {
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
export const updateArtifact = /* GraphQL */ `
  mutation UpdateArtifact(
    $input: UpdateArtifactInput!
    $condition: ModelArtifactConditionInput
  ) {
    updateArtifact(input: $input, condition: $condition) {
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
export const deleteArtifact = /* GraphQL */ `
  mutation DeleteArtifact(
    $input: DeleteArtifactInput!
    $condition: ModelArtifactConditionInput
  ) {
    deleteArtifact(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
