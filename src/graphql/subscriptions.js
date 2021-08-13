/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio {
    onCreatePortfolio {
      id
      name
      artifacts {
        items {
          id
          title
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
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio {
    onUpdatePortfolio {
      id
      name
      artifacts {
        items {
          id
          title
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
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio {
    onDeletePortfolio {
      id
      name
      artifacts {
        items {
          id
          title
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
export const onCreateArtifact = /* GraphQL */ `
  subscription OnCreateArtifact {
    onCreateArtifact {
      id
      title
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
export const onUpdateArtifact = /* GraphQL */ `
  subscription OnUpdateArtifact {
    onUpdateArtifact {
      id
      title
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
export const onDeleteArtifact = /* GraphQL */ `
  subscription OnDeleteArtifact {
    onDeleteArtifact {
      id
      title
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      artifactID
      artifact {
        id
        title
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      artifactID
      artifact {
        id
        title
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      artifactID
      artifact {
        id
        title
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
