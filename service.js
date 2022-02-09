getImages = (pageNumber, successCallback) =>{
let promise =  axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
  return promise.then((response) => {
    return response.data
  })
}

getTasks = () =>{
  let promise =  axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=3242&count=30`);
    return promise.then((response) => {
      return response.data
    })
  }
  createTasks = (title) =>{
    let promise =  axios.post(`https://repetitora.net/api/JS/Tasks`,{
      widgetId: 3242,
      title: title,
    });
      return promise.then((response) => {
        return response.data
      })
    }
    deleteTask = (id) =>{
      let promise =  axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=3242&taskId=${id}`);
      }