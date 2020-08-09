/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDone = /* GraphQL */ `
  subscription OnCreateDone($owner: String!) {
    onCreateDone(owner: $owner) {
      id
      name
      description
      doneDate
      category {
        id
        name
        createdAt
        updatedAt
      }
      imageFile {
        bucket
        region
        key
      }
      isDone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDone = /* GraphQL */ `
  subscription OnUpdateDone($owner: String!) {
    onUpdateDone(owner: $owner) {
      id
      name
      description
      doneDate
      category {
        id
        name
        createdAt
        updatedAt
      }
      imageFile {
        bucket
        region
        key
      }
      isDone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDone = /* GraphQL */ `
  subscription OnDeleteDone($owner: String!) {
    onDeleteDone(owner: $owner) {
      id
      name
      description
      doneDate
      category {
        id
        name
        createdAt
        updatedAt
      }
      imageFile {
        bucket
        region
        key
      }
      isDone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCustomView = /* GraphQL */ `
  subscription OnCreateCustomView {
    onCreateCustomView {
      id
      includedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      excludedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      name
      accessType
      categories {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomView = /* GraphQL */ `
  subscription OnUpdateCustomView {
    onUpdateCustomView {
      id
      includedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      excludedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      name
      accessType
      categories {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomView = /* GraphQL */ `
  subscription OnDeleteCustomView {
    onDeleteCustomView {
      id
      includedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      excludedDones {
        items {
          id
          name
          description
          doneDate
          isDone
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      name
      accessType
      categories {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
