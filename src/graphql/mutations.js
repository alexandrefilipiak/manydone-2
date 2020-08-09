/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDone = /* GraphQL */ `
  mutation CreateDone(
    $input: CreateDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    createDone(input: $input, condition: $condition) {
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
export const updateDone = /* GraphQL */ `
  mutation UpdateDone(
    $input: UpdateDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    updateDone(input: $input, condition: $condition) {
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
export const deleteDone = /* GraphQL */ `
  mutation DeleteDone(
    $input: DeleteDoneInput!
    $condition: ModelDoneConditionInput
  ) {
    deleteDone(input: $input, condition: $condition) {
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
export const createCustomView = /* GraphQL */ `
  mutation CreateCustomView(
    $input: CreateCustomViewInput!
    $condition: ModelCustomViewConditionInput
  ) {
    createCustomView(input: $input, condition: $condition) {
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
export const updateCustomView = /* GraphQL */ `
  mutation UpdateCustomView(
    $input: UpdateCustomViewInput!
    $condition: ModelCustomViewConditionInput
  ) {
    updateCustomView(input: $input, condition: $condition) {
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
export const deleteCustomView = /* GraphQL */ `
  mutation DeleteCustomView(
    $input: DeleteCustomViewInput!
    $condition: ModelCustomViewConditionInput
  ) {
    deleteCustomView(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
      id
      username
      email
      registered
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      registered
      createdAt
      updatedAt
    }
  }
`;
