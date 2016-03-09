export default function TodoService($http, ApiService, $filter) {
  'ngInject';

  var todos = [];
  var service = {
    findAll,
    save,
    update,
    remove
  };
  service.todo = {};
  service.saveMode = 'Add';
  return service;

  function findAll() {
    return $http.get(ApiService.getUrl('/api/todos'))
      .then(function(response) {
        todos = response.data;
        return todos;
      });
  }

  function save(todo) {
    return $http.post(ApiService.getUrl('/api/todos'), todo)
      .then(function(response) {
        todos.push(response.data);
      });
  }

  function update(todo) {
    return $http.put(ApiService.getUrl('/api/todos'), todo)
      .then(function(response) {
        var index = todos.indexOf($filter('filter')(todos, {
          id: todo.id
        })[0]);
        todos[index] = response.data;
      });
  }

  function remove(todoId) {
    return $http.delete(ApiService.getUrl('/api/todos/' + todoId))
      .then(function() {
        var index = todos.indexOf($filter('filter')(todos, {
          id: todoId
        })[0]);
        todos.splice(index, 1);
      });
  }
}
