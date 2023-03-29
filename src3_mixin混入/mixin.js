const CommonFun = {
  methods: {
    showName() {
      alert(this.studentName)
    }
  },
  data() {
    return {
      height: '185'
    }
  },
  created: function () {
    console.log('混入对象的钩子被调用')
  }

}
export default CommonFun;