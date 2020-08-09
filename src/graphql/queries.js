/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDone = /* GraphQL */ `
  query GetDone($id: ID!) {
    getDone(id: $id) {
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
export const listDones = /* GraphQL */ `
  query ListDones(
    $filter: ModelDoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomView = /* GraphQL */ `
  query GetCustomView($id: ID!) {
    getCustomView(id: $id) {
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
export const listCustomViews = /* GraphQL */ `
  query ListCustomViews(
    $filter: ModelCustomViewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        includedDones {
          nextToken
        }
        excludedDones {
          nextToken
        }
        name
        accessType
        categories {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      createdAt
      updatedAt
    }
  }
`;
export const searchDones = /* GraphQL */ `
  query SearchDones(
    $filter: SearchableDoneFilterInput
    $sort: SearchableDoneSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchDones(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
