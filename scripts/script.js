// script.js

window.logCheckpoints = false // set to true/false to add/remove checkpoint logs to clear room for your own debugging


// script.js

document.addEventListener('DOMContentLoaded', () => {
  /* TODO:
   * 1. fetch json results from https://cse110lab6.herokuapp.com/entries
   * 2. for each entry, create and append a custom HTML element 
   *    using a web component called JournalEntry to a 
   *    list of journal entries in inside <main></main>. 
   *    
   * Hint: don't forget to set the entry property inside JournalEntry to 
   * the current entry for each journal-entry element.
   */

  let url = "https://cse110lab6.herokuapp.com/entries"  // SET URL 

  fetch(url)
    .then(response => response.json())
    .then(entries => {
      entries.forEach((entry) => {
       
        let newPost;  

        // CODE GOES HERE vvv
        let main = document.querySelector('main');

        newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        //let shadowDom = newPost.shadowRoot;

        /*let img = document.createElement('img');
        img.className = 'entry-image';
        img.src = entry.image.src;
        img.alt = entry.image.alt;
        //newPost.append(img);


        if(entry.audio != null) {
          let audio = document.createElement('audio');
          audio.className = 'entry-audio';
          audio.src = entry.audio;
          audio.controls = true;
          newPost.append(audio);
        }*/

        main.append(newPost);
        // CODE GOES HERE ^^^



        /* ------------- do not edit this code, it is for your debugging purposes ------------- */
        try {
          window.logCheckpoint('"newPost"', exampleNewPost, newPost);
        } catch(err) {
          console.log('variable name changed: ', err);
        }
        /* ------------- do not edit this code, it is for your debugging purposes ------------- */
    })
    logCheckpoints();
  })
  .catch(error => {
    console.log(`%cresult of fetch is an error: \n"${error}"`, 'color: red');
  });    
   
});



/* ------------- do not edit this code, it is for your debugging purposes ------------- */
function logCheckpoints() {
  let errorStyle = 'color: red; font-weight: bold';
  let successStyle = 'color: green; font-weight: bold';
  let entries = [...document.getElementsByTagName('journal-entry')];
  entries.length == 0 ? console.log('%cno journal entries have been rendered to the DOM', errorStyle) : console.log('%cDOM contains journal entries', successStyle);
}
const exampleNewPost = '<journal-entry entry="[object Object]">';
/* ------------- do not edit this code, it is for your debugging purposes ------------- */