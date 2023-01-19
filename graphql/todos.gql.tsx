import * as Types from './types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type TodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', _id: string, title: string, done: boolean }> };

export type UpdateTodoMutationVariables = Types.Exact<{
  input: Types.TodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', _id: string, title: string, done: boolean } | null };


export const TodosDocument = gql`
    query Todos {
  todos {
    _id
    title
    done
  }
}
    `;

export function useTodosQuery(options?: Omit<Urql.UseQueryArgs<TodosQueryVariables>, 'query'>) {
  return Urql.useQuery<TodosQuery>({ query: TodosDocument, ...options });
};
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($input: TodoInput!) {
  updateTodo(input: $input) {
    _id
    title
    done
  }
}
    `;

export function useUpdateTodoMutation() {
  return Urql.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument);
};