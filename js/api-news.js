

export function newsApi(source, topic, apiKey) {
  return new Promise(function(success, error) {
    const request = new XMLHttpRequest();
    const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&domains=${source}&q=${topic}`;

    request.onload = function() {
      if (this.status === 200) {
        success(request.response);
      } else {
        error(Error(request.statusText));
      }
    }
    request.open('GET', url, true);
    request.send();
  });
}

// // Notes:
// export function newsApi(source, topic, apiKey) {
// // Run function and pass in parameters from front end
//   return new Promise(function(success, error) {
// //returns the function immediately and creates new instance of Promise Object with success and error as parameters which are also functions. Connects to front end, and then
//     const request = new XMLHttpRequest();
// //1. ----------------------->
// // set Javascript XMLHttpRequest object as new variable
//     const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&domains=${source}&q=${topic}`;
// //2. ----------------------->
// // (I exist but I don't run till after .then from front end runs)
// //6. ----------------------->
// // This is the api call from documentation including your key and whatever key value pairs you want to grab.
//
//     request.onload = function() {
//       if (this.status === 200) {
//         success(request.response);
//       } else {
//         error(Error(request.statusText));
//       }
//     }
// //3. ----------------------->
//     request.open('GET', url, true);
// //4. ----------------------->
//     request.send();
//   });
// }
