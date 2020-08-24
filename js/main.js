new Vue({
  el: '#app',
  data: {
    newTaskName: '',
    tasks: [{name: '試験の申し込み', checked: false},{name: 'チケットの予約', checked: false}]
  },
  methods: {
    addTask: function(event) {
      if(this.newTaskName == ''){
        return
      }
      var task = {
        name: this.newTaskName,
        checked: false
      }

      this.tasks.push(task)
      this.newTaskName = ''
    },
    checkTask: function(index) {
      this.tasks[index].checked = !(this.tasks[index].checked)
    },
    deleteTask: function(index) {
      this.tasks.splice(index,1)
    }
  }
})