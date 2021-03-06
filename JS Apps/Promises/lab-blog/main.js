function attachEvents() {
const appId = 'kid_rk0KOc2Wx';
const apiBaseUrl = `https://baas.kinvey.com/appdata/${appId}/`;
const userName = 'peter';
const password = 'p';
const authorizationHeader = {Authorization: 'Basic ' + btoa(`${userName}:${password}`)};

$('#btnLoadPosts').on('click', loadPosts);
$('#btnViewPost').on('click', loadPostDetails);

function loadPosts() {
   $.get({
       url: apiBaseUrl + 'posts',
       headers: authorizationHeader
   })
       .then(fillDropDownMenu)
       .catch(renderError);
}

function fillDropDownMenu(posts) {
   let menu = $('#posts');
   menu.empty();
   for (let post of posts) {
       menu.append(createOptionItem(post.title, post._id));
   }
}

function loadPostDetails() {
   let postId = $('#posts').val(); //this is the chosen option in the dropdown
   let getPostDetails = $.get({
       url: apiBaseUrl + 'posts/' + postId,
       headers: authorizationHeader
   });

   let getComments = $.get({
       url: apiBaseUrl + `comments/?query={"post_id":"${postId}"}`,
       headers: authorizationHeader
   });

   Promise.all([getPostDetails, getComments])
       .then(function ([posts, comments]) {
           renderPost(posts);
           renderComments(comments);
       })
       .catch(renderError);
}

function renderPost(postData) {
   $('#post-title').text(postData.title);
   $('#post-body').text(postData.body);
}

function renderComments(comments) {
   let commentsList = $('#post-comments');
   commentsList.empty();
   for (let comment of comments) {
       commentsList.append(createListItem(comment.text));
   }
}

function renderError(error) {
   let errorContainer = $('<div>')
       .text(`Error: ${error.status} (${error.statusText})`)
       .hide();
   $('body')
       .prepend(errorContainer);

   errorContainer.slideDown(function () {  //sleeky way to hide the error
       setTimeout(function () {
           errorContainer.slideUp(function () {
               errorContainer.remove();
           });
       }, 1000);
   });
}

function createOptionItem(text, value) { //create option in menu
   return $('<option>')
       .attr('value', value)
       .text(text);
}

function createListItem(text) {
   return $('<li>')
       .text(text);
}


}
